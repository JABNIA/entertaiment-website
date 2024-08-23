import React, {createContext, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Login from './components/Login';
import entertaimentData from "./data.json";
import useUserContext, {GlobalContext} from "./components/Context"
import Menu from './components/Menu';
import Search from "./components/Search"
import Trending from './components/Trending';
import Recomended from './components/Recomended';


type user = {
  email: string,
  password: string,
}

export type movie = {
  title: string;
  thumbnail: {
      trending?: {
          small: string;
          large: string;
      };
      regular: {
          small: string;
          medium: string;
          large: string;
      };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type GlobalType = {
  users: user[],
  email: {
    mail: string,
    setMail: React.Dispatch<React.SetStateAction<string>>
  },
  password: {
    pass: string,
    setPass: React.Dispatch<React.SetStateAction<string>>
  },
  authorisation: {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
  },
  moviesData: movie[],
  home: {
    home: boolean
    setHome: React.Dispatch<React.SetStateAction<boolean>>
  },
  movies: {
    movies: boolean
    setMovies: React.Dispatch<React.SetStateAction<boolean>>
  }, 
  tvSeries: {
    tvSeries: boolean
    setTvSeries: React.Dispatch<React.SetStateAction<boolean>>
  }, 
  bookmarks: {
    bookmarks: boolean
    setBookmarks: React.Dispatch<React.SetStateAction<boolean>>
  },
  movieName: {
    movieName: string
    setMovieName: React.Dispatch<React.SetStateAction<string>>
  }
}

const moviesList:movie[] = entertaimentData
const users: user[] = [
  {
    email: "vaxojabnia@gmail.com",
    password: "jabnia123"
  },
]

const Global = createGlobalStyle`

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }
  
  body{
    width: 98vw;
    height: 100vh;
    background-color: #10141F;
    color: #FFF;
    font-family: Outfit;
  }
`



function App() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [authorised, setAuthorised] = useState<boolean>(false)
  const [home, setHome] = useState<boolean>(true)
  const [movies, setMovies] = useState<boolean>(false)
  const [tvSeries, setTvSeries] = useState<boolean>(false)
  const [bookmarks, setBookmarks] = useState<boolean>(false)
  const [movieName, setMovieName] = useState<string>("")


const data = {
  users: users,
  email: {mail:email, setMail:setEmail},
  password: {pass: password, setPass:setPassword},
  authorisation: {auth: authorised, setAuth: setAuthorised},
  moviesData: moviesList,
  home: {home: home, setHome:setHome},
  movies: {movies:movies, setMovies:setMovies},
  tvSeries: {tvSeries:tvSeries, setTvSeries:setTvSeries},
  bookmarks: {bookmarks:bookmarks, setBookmarks: setBookmarks},
  movieName: {movieName: movieName, setMovieName: setMovieName}
}


if (authorised){
  return(
    <>
    <GlobalContext.Provider value={data}>

    <Global />
    <AppWrapper>
      
      <div>
        <Menu /> 
      </div>
      
      <div style={{width: "90%"}}>
        <Search />
        <Trending />
        <Recomended />
      </div>

    </AppWrapper>
    </GlobalContext.Provider>
    </>
  )
}else{
  return (
    <>
    <GlobalContext.Provider value={data}>
      <Global />
      <Login />
    </GlobalContext.Provider>
    </>
  );

}
}


const AppWrapper = styled.div`
  display: flex;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export default App;
