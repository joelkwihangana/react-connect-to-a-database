// src/App.jsx
import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function fetchMoviesHandler() {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/") // Note: Corrected URL
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date, // Corrected property name
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? (
          <h2>Please wait while we are generating movies</h2>
        ) : (
          <MoviesList movies={movies} />
        )}
      </section>
    </React.Fragment>
  );
};

export default App;
