import React,{ useState,useContext } from 'react';
import {MovieContext} from './MoviesContext'
function AddMovie() {
const [movies,setMovies] = useContext(MovieContext);
const [name,setName] =useState('');
const [price,setPrice] = useState('');

const updateName =(e) =>{
   
    setName(e.target.value);
}
const updatePrice =(e) =>{
    
    setPrice(e.target.value);
}
const addMovieToList = (e) =>{
    e.preventDefault();
    setMovies(prevMovies =>[...prevMovies,{name,price}]);
}
    return (
        <div>
            <form onSubmit={addMovieToList}>
                <input type='text' name ="name" value={name} onChange={updateName} />
                <input type='text' name ="price" value={price} onChange={updatePrice} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie;
