import React from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: "Doctor Strange", description: "A Marvel superhero movie." },
  { id: 2, title: "Trolls", description: "An animated musical adventure." },
  { id: 3, title: "Pitch Perfect", description: "A musical comedy film." },
];

function Home() {
  return (
    <div>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
