import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, Movie } from "../services/apiFacade";

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams<{ id: string }>(); // Assuming you're using React Router

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (id) {
          const movieData = await getMovieById(parseInt(id));
          setMovie(movieData);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetails;
