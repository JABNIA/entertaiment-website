import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import useUserContext from "./Context";


type trand = {
    title: string,
    category: string,
    year: number, 
    rating: string,
    bookmark: boolean
    imageUrl: string | undefined
}


export default function Trending() {
    const context = useUserContext();
    const trends = context.moviesData.filter(movie => movie.isTrending !== false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
  
    // Scroll function using native WheelEvent
    const scroll = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
  
        if (
          (event.deltaY < 0 && scrollLeft > 0) ||
          (event.deltaY > 0 && scrollLeft + clientWidth < scrollWidth)
        ) {
          event.preventDefault();
          scrollContainerRef.current.scrollLeft += event.deltaY *2;
        }
      }
    };
  
    useEffect(() => {
      const container = scrollContainerRef.current;
  
      if (container) {
        // Add native wheel event listener
        container.addEventListener('wheel', scroll as EventListener, { passive: false });
      }
  
      return () => {
        if (container) {
          container.removeEventListener('wheel', scroll as EventListener);
        }
      };
    }, []);
  
    return (
      <>
        <h2>Trending</h2>
        <TrendWrapper ref={scrollContainerRef}>
          {trends.map(trending => (
            <TrendItem
              key={trending.title}
              title={trending.title}
              category={trending.category}
              year={trending.year}
              rating={trending.rating}
              bookmark={trending.isBookmarked}
              imageUrl={trending.thumbnail.trending?.large}
            />
          ))}
        </TrendWrapper>
      </>
    );
  }



function TrendItem({title, category, year, rating, bookmark, imageUrl}:trand){
  const [play, setPlay] = useState<boolean>(false)  
  return(
      <>
        <TrandMovie bg={imageUrl} onMouseEnter={() => {setPlay(true)}} onMouseLeave={()=> setPlay(false)}> 
            {/* <img src={imageUrl} alt="" /> */}
            <p>{year} &#x2022; {category} &#x2022; {rating}</p>
            <h3>{title}</h3>
        {
        play 
        ?
        <PlayBackground>
          <button>
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
              <span>
                Play
              </span>
          </button>
        </PlayBackground>
        :
        null
        }
        </TrandMovie>
      </>
    )
}




const TrendWrapper = styled.div`
    width: 100%;
    height: 250px;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;  
    scroll-behavior: smooth;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }

/* Hide scrollbar for IE, Edge and Firefox */
` 


const TrandMovie = styled.div<{bg: string | undefined}>`
    width: 470px;
    height: 230px;
    background-image: url(${(props) => props.bg});
    display: inline-flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    top: 0px;
    margin-left: 20px;
    position: relative;
    z-index: 2;

    &:hover{
      z-index: 1;
    }

    @media (max-width: 375px){
      width: 240px;
      height: 140px;
    }
`


export const PlayBackground = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: absolute;
  top: 0px;
  background-color: rgba(0,0,0, 0.5);

  button{
    width: 117px;
    height: 48px; 
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 15px;
    margin: auto;
  }



  &:hover{
    z-index: 2;
  }

  @media (max-width: 375px){
      width: 100%;
      height: 100%;
    }
`