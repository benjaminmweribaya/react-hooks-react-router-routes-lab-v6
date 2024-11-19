import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
      </header>
      <main>
        <div>
          {(movie.genres || []).map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Movie;
