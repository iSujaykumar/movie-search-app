import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="App">
      <img src="/logo192.png" alt="Logo" style={{ width: '80px', marginBottom: '1rem' }} />

      <h1>Movie Search App</h1>
      <form onSubmit={fetchMovies}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>Search For The Movie , Anime , Series You Want</p>
        )}
      </div>
    </div>
  );
};

export default App;
