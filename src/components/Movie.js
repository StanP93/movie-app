import React from 'react'
import classes from './Movie.module.css'
const API_IMAGE = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className={classes.movie}>
            <img src={API_IMAGE + poster_path} alt={title}/>
            <div>
                <h3>{title}</h3>
                <p>{vote_average}</p>
            </div>
        </div>
    )
}

export default Movie;
