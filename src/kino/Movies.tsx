import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies, Movie } from "../services/apiFacade";
import "./movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        console.log("Movies data:", moviesData); // Log the moviesData to inspect its structure
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
        {movies.map((movie) => {
          console.log("Movie:", movie);
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{`${movie.Title} `}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
