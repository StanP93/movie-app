import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import './index.css'

const API_HEAD = 'https://api.themoviedb.org/3/discover/movie?api_key=21f0d68db25663ca746bd45f66988281&language=en-US&sort_by=popularity.desc'

const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=21f0d68db25663ca746bd45f66988281&query='
  
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect (() => {
    getMovies(API_HEAD)
  }, [])

  const getMovies = (api) =>{
    fetch(api)
      .then((res)=>res.json())
      .then((data)=> {
        setMovies(data.results);
      });  
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(search) {
      getMovies(API_SEARCH+search);
      };
    setSearch('')
    }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div className="Header">
          <input className='search' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>  
      </form>
      <div className="Content">
        {movies.map((movie)=>(
          <Movie {...movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
