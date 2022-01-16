import React,{useState,useContext} from 'react';
import {MovieContext} from './MoviesContext'
import Movie from './Movie';
function MovieList() {
    const [movies,setMovies] =useContext(MovieContext);
    return (
        <div>
           {movies.map(movie =>(
             <Movie name={movie.name} price={movie.price} key={movie.id} />  
           ))} 
        </div>
    )
}

export default MovieList;
