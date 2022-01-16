import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MoviesProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:"Game of Thrones",
            price:'$10',
            id:1
        },
        {
           name:"Breaking bad",
           price:'$15',
           id:2
       },
       {
           name:"Good Doctor",
           price:'$7',
           id:3
       }
   ]);
    return (
        <div>
           <MovieContext.Provider value ={[movies,setMovies]}>
              {props.children}
           </MovieContext.Provider> 
        </div>
    )
}


