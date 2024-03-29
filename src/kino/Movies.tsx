import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies, Movie } from "../services/apiFacade";
import "./movies.css";
import MovieCard from "./movieCard";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        console.log("Movies data:", moviesData); // Log fetched movies data
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  console.log("Movies:", movies); // Log movies state

  return (
    <>
      <ul className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="moviecard">
            <MovieCard item={movie} /> {/* Use the MovieCard component */}
            {<Link to={`/movies/${movie.id}`}>{`${movie.title} `}</Link>}
          </div>
        ))}
      </ul>
    </>
  );
};
