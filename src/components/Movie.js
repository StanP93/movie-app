import React from 'react'
import classes from './Movie.module.css'
const API_IMAGE = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({title, poster_path, overview, vote_average}) => {

    const voteColors = (vote) => {
        return vote >= 8 ? `${classes.green}`: vote>=4 ? `${classes.orange}` : `${classes.red}`;
    }

    return (
        <div className={classes.movie}>
            <img src={poster_path ? API_IMAGE + poster_path:'https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'} alt={title}/>
            <div className={classes.movie_info}>
                <h3>{title}</h3>
                <span className={`${voteColors(vote_average)}`}>{vote_average}</span>
            </div>
            <div className={classes.movie_overview}>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;
