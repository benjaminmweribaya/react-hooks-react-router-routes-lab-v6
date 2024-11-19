import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title }) {

  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;