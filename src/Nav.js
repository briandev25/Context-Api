import React, {useContext} from 'react';
import { MovieContext } from './MoviesContext'
import './Nav.css'

function Nav() {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <div className='nav'>
            <h3>Movies</h3>
            <h3>No of Movies:{movies.length}</h3>
        </div>
    )
}

export default Nav;
