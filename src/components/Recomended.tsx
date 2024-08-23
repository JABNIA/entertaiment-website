import React, {useState} from "react"
import styled from "styled-components"
import useUserContext from "./Context"
import {movie} from "../App"
import { PlayBackground } from "./Trending"

type singleMovie = {
    singleMovieData: movie
    setMovieList: React.Dispatch<React.SetStateAction<movie[]>>
}

type movieComponentProps = {
    movie: singleMovie,
    setMoviesList: React.Dispatch<React.SetStateAction<movie[]>>
}


export default function Recomended(){
    const context = useUserContext()
    const [moviesList, setMoviesList] = useState<movie[]>(context.moviesData)


    if(context.home.home){
        return (
            <>
            <h2>Recomended for you</h2>
            <RecomendationsWrapper>
                {moviesList.map(
                    (movie) => 
                    movie.title.toLocaleLowerCase().includes(context.movieName.movieName)
                    ?
                    <Movie 
                    singleMovieData={movie}
                    setMovieList = {setMoviesList}

                    />
                       :
                       null
                       )}
            </RecomendationsWrapper>
            </>
        )
    }else if(context.movies.movies){
        const onlyMovies = moviesList.filter(movie => movie.category === "Movie")
        return (
        <>
        <h2>Movies</h2>
        <RecomendationsWrapper>
            {onlyMovies.map(
                (movie) => 
                movie.title.toLocaleLowerCase().includes(context.movieName.movieName)
                ?
                <Movie 
                singleMovieData={movie}
                setMovieList = {setMoviesList}
                />
                   :
                   null
                   )}
        </RecomendationsWrapper>
        </>
    )
    }else if(context.tvSeries.tvSeries){
        const onlyTvSeries = moviesList.filter(movie => movie.category === "TV Series")
        return (
        <>
        <h2>Tv Series</h2>
        <RecomendationsWrapper>
            {
            onlyTvSeries.map(
                (movie) => 
                movie.title.toLocaleLowerCase().includes(context.movieName.movieName)
                ?
                <Movie 
                singleMovieData={movie}
                setMovieList = {setMoviesList}

                   />
                   :
                    null
                )}
        </RecomendationsWrapper>
        </>
    )
    }else if(context.bookmarks.bookmarks){
        const onlyBookmarkMovies = moviesList.filter(movie => movie.isBookmarked === true && movie.category === "Movie")
        const onlyBookmarkTv = moviesList.filter(movie => movie.isBookmarked === true && movie.category === "TV Series")
        
        return (
        <>
        <h2 style={{marginTop: "100px"}}>Bookmarked Movies</h2>
        <RecomendationsWrapper >
            {onlyBookmarkMovies.map(
                (movie) => 
                movie.title.toLocaleLowerCase().includes(context.movieName.movieName)
                ?
                <Movie 
                singleMovieData={movie}
                setMovieList = {setMoviesList}
                   />
                   :
                   null
                   )}
        </RecomendationsWrapper>
        <h2 style={{marginTop: "150px"}}>Bookmarked TV series</h2>
        <RecomendationsWrapper >
            {onlyBookmarkTv.map(
                (movie) => 
                movie.title.toLocaleLowerCase().includes(context.movieName.movieName)
                ?
                <Movie 
                singleMovieData={movie}
                setMovieList = {setMoviesList}
                   />
                   :
                   null
                   )}
        </RecomendationsWrapper>
    
        </>
    )
    }else{
        return null
    }
}


function Movie({singleMovieData, setMovieList}:singleMovie){
    const moviesItem = singleMovieData
    const [play, setPlay] = useState<boolean>(false)

    return (
    <SingleMovieItem onMouseEnter={() => {setPlay(true)}} onMouseLeave={()=> setPlay(false)}>
        <Bookmark onClick={() => {
            setMovieList(prevItems => prevItems.map(item => item.title === moviesItem.title ? {...item, isBookmarked: !item.isBookmarked} : item))
            // setMark(!mark)
        }
        }>
            <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg" 
            style={{fill: moviesItem.isBookmarked ? "#FFF": "transparent", stroke: "#FFF", strokeWidth: "3px"}}>
                <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/></svg>
        </Bookmark>
        <MovieCover 
        src={moviesItem.thumbnail.regular.medium} 
        alt={moviesItem.title} 
        />
        <p>{moviesItem.year} &#x2022; 
        {moviesItem.category} &#x2022; 
        {moviesItem.rating}</p>
        <h4>{moviesItem.title}</h4>
        {
        play 
        ?
        <MoviesPlayBackground>
          <button>
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
              <span>
                Play
              </span>
          </button>
        </MoviesPlayBackground>
        :
        null
        }
    </SingleMovieItem>
    )
}


const RecomendationsWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 40px 0px 0px 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    @media (max-width: 768px){
        gap: 10px
}
@media (max-width: 375px){
        gap:10px;
        margin: auto;
    }
`

const MovieCover = styled.img`
    width: 280px;
    height: 174px;  
    border-radius: 10px;
    @media (max-width: 768px){
        width: 100%;
        height: auto;
    }
`

const SingleMovieItem = styled.div`
    width: 280px;
    height: auto;
    position: relative;
    p{
        font-family: Outfit;
        font-size: 13px;
        font-weight: 200;
        line-height: 16.38px;
        text-align: left;
        margin: 5px 0px;
    }
    @media (max-width: 768px){
        margin: auto;
        margin-bottom: 60px;
        width:220px;
        height: 140px;
    }
    @media (max-width: 375px){
        margin: auto;
        width: 164px;
        height: 110px;
        margin-bottom: 80px;
    
      p{
        font-family: Outfit;
        font-size: 13px;
        font-weight: 200;
        line-height: 16.38px;
        text-align: left;
        margin: 5px 0px;
    }
    }
`

const Bookmark = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(0,0,0, 0.5);
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 10;
    svg{
        margin: 6px 8px;
    }

    @media (max-width: 375px){
        top: 10px;
        right: 10px;
    }
`

const MoviesPlayBackground = styled(PlayBackground)`
    width: 100%;
    height: 80%;  
    border-radius: 10px;
    button{
            margin-top: 60px;
            cursor: pointer;
        } 
    @media (max-width: 375px){
        height: 100%;
        button{
            margin-top: 30px;
        }
    }
`