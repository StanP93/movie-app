import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import './index.css'

const API_HEAD = 'https://api.themoviedb.org/3/discover/movie?api_key=21f0d68db25663ca746bd45f66988281&language=en-US&sort_by=popularity.desc'

const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=21f0d68db25663ca746bd45f66988281&query='
  
function App() {
  const [movies, setMovies] = useState([]);

  useEffect (() => {
    fetch(API_HEAD)
      .then((res)=>res.json())
      .then((data)=> {
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  return (
    <div className="App">
      {movies.map((movie)=>(
        <Movie {...movie} key={movie.id}/>
      ))}
    </div>
  );
}

export default App;
