import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/default-poster.png'; // fallback image

  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={movie.title || 'No Title'}
      />
      <h3>{movie.title || 'Untitled'}</h3>
      <p>{movie.overview || 'No overview available.'}</p>
    </div>
  );
};

export default MovieCard;
