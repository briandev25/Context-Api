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
      <MovieList />
      <AddMovie />
      </MoviesProvider>
    </div>
  );
}

export default App;
