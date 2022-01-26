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
  const getSorted = (type) => {
    const moviesArr = [...movies];
    if(type === 'vote') {
      moviesArr.sort((a,b)=>a.vote_average<b.vote_average?1:-1);
      setMovies(moviesArr)  
    } else {
      moviesArr.sort((a,b)=>a.title>b.title?1:-1);
      setMovies(moviesArr)
    }
}
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit} style={{position:'relative'}}>
      <button onClick={()=>getSorted('vote')} style={{left: '20%'}}>Sort by vote</button>
      <button onClick={()=>getSorted('name')} style={{left: '10%'}}>Sort by name</button>
        <div className="Header">
          <input className='search' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>  
      </form>
      <div className="Content">
        {movies.length == 0 ? <h1>Enter a valid value!</h1>:movies.map((movie)=>(
          <Movie {...movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
