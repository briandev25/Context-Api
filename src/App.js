import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import {MoviesProvider} from './MoviesContext';
function App() {
  return (
    <div className="App">
      <MoviesProvider>
      <Nav />
      <AddMovie />
      <MovieList />
      </MoviesProvider>
    </div>
  );
}

export default App;
