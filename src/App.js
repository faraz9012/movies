import { useState, useEffect } from 'react';
import MovieCard  from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=3fee686b';

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  } 

  useEffect(() => {
    searchMovies('Superman');
  }, []);
  return (
      <div className='App'>
        <h1>Search Movies App on React</h1>

        <div className='search'>
          <input 
            placeholder='Search for...'
            value="Spiderman"
            onChange={()=>{}}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={()=>{}}
            />
        </div>

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
