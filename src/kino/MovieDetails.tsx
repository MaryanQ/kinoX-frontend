import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/apiFacade";

export const MovieDetails = () => {
  const [movies, setMovies] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h2>Movies</h2>
      <p>Explore our list of movies.</p>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
