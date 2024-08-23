import React, {useState} from "react"
import styled from "styled-components"
import useUserContext from "./Context"

export default function Search() {
    const [search, setSearch] = useState<boolean>(false)
    const context = useUserContext()    
    return(
        <Wrapper>
            <div>
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
            </div>
            <div style={{width: "100%"}}>
                <SearchBar placeholder="Search for movies or TV series" onChange={(event) => context.movieName.setMovieName(event.target.value)}/>
            </div>
        </Wrapper>
    )
}


const SearchBar = styled.input`
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: 0px;
    outline: 0px;
    font-family: Outfit;
    font-size: 24px;
    font-weight: 200;
    line-height: 30.24px;
    text-align: left;
    color: #FFF;

    &:focus{
        border-bottom: 1px solid #5A698F;
        caret-color: red;
    }

    &:focus::placeholder{
        color: transparent
    }
    @media (max-width: 768px){
        font-family: Outfit;
        font-size: 20px;
        font-weight: 200;
        line-height: 30.24px;
        text-align: left;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    @media (max-width: 768px){
        max-width: 381px;
    }
`
