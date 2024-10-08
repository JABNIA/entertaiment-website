import React, {useState} from "react"
import styled from "styled-components"
import {Logo} from "./Login"
import useUserContext from "./Context"



export default function Menu(){
    const context = useUserContext()

    function handleHomeClick(){
        context.home.setHome(true)
        context.movies.setMovies(false)
        context.tvSeries.setTvSeries(false)
        context.bookmarks.setBookmarks(false)
    }
    function handleMoviesClick(){
        context.home.setHome(false)
        context.movies.setMovies(true)
        context.tvSeries.setTvSeries(false)
        context.bookmarks.setBookmarks(false)
    }
    function handleTvClick(){
        context.home.setHome(false)
        context.movies.setMovies(false)
        context.tvSeries.setTvSeries(true)
        context.bookmarks.setBookmarks(false)
    }
    function handleBookmarkClick(){
        context.home.setHome(false)
        context.movies.setMovies(false)
        context.tvSeries.setTvSeries(false)
        context.bookmarks.setBookmarks(true)
    }



    return <>
        <MenuWrapper>
            <div className="icons-container">
                <div>
                    <MenuLogo src="./assets/logo.svg"/>
                </div>
                <div className="icon-wrapper"> 
                    <Icon active={context.home.home} onClick={handleHomeClick}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"/></svg>
                    </Icon>
                    <Icon active = {context.movies.movies} onClick={handleMoviesClick}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" /></svg>
                    </Icon>
                    <Icon active = {context.tvSeries.tvSeries}  onClick={handleTvClick}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" /></svg>
                    </Icon>
                    <Icon active = {context.bookmarks.bookmarks} onClick={handleBookmarkClick}>
                    <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/></svg>
                    </Icon>
                </div>
            </div>
            <div className="avatar">
                <img src="./assets/image-avatar.png" alt="Avatar" />
            </div>
        </MenuWrapper>
    </>
}


const MenuWrapper = styled.div`
    width: 96px;
    height: 960px;
    background-color: #161D2F;
    margin: 30px;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    border-radius: 25px;
    gap: 480px;
    
    .icons-container{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
    svg:hover{
        fill: #FC4747;
    }
    .avatar{
        width: 40px;
        height: 40px;
        margin: auto;
    }

    .avatar > img {
        width: 100%;
        height: 100%;
        
    }

    @media (max-width: 768px){
    width: 90%;
    height: 72px;
    align-content: space-between;
    flex-direction: row;
    border-radius: 25px;
    gap: 25%;
    
    .icons-container{
        width: 60%;
        margin-left: 20px;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 15%;
    }
    svg:hover{
        fill: #FC4747;
    }
    .avatar{
        width: 40px;
        height: 40px;
        margin: auto;
    }

    .avatar > img {
        width: 100%;
        height: 100%;
        
    }
    .icon-wrapper{
        display: flex;
        gap: 30px
    }
    }
    @media (max-width: 375px){
        width: 100%;
        height: 72px;
        align-content: space-between;
        flex-direction: row;
        border-radius: 25px;
        gap: 0px;
        .icons-container{
            width: 60%;
            margin-left: 10px;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
    }
    .icon-wrapper{
        display: flex;
        gap: 20px
    }
    }
    `

const Icon = styled.div<{active:boolean}>`
    display: block;
    width: 20px;
    height: 20px;
    margin: 40px auto;
    cursor: pointer;
    
    svg{
        fill: ${(props) => props.active ? "#FFF": "#5A698F"}
    }
`

const MenuLogo = styled(Logo)`
    margin: 40px auto;
`