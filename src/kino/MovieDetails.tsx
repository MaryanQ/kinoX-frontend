import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, Movie } from "../services/apiFacade";

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (id) {
          const movieData = await getMovieById(parseInt(id));
          console.log("Movie data:", movieData);
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

  console.log("Movie props:", movie); // Add this line to check props
  console.log("Poster URL:", movie?.poster_url); // Add this line to check poster URL

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.plot}</p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetails;
