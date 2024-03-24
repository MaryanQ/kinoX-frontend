import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { getMovies, Movie } from "../services/apiFacade";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const moviesData = await getMovies();
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const handleBookingClick = (movieId: number) => {
    console.log("Initiating booking process for movie with ID:", movieId);
    // Navigate to the booking form page with the movie ID in the URL
    navigate(`/booking/${movieId}`);
  };

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.plot}</p>
            <Link to={`/movies/${movie.id}`}>Details</Link>
            <button onClick={() => handleBookingClick(movie.id)}>
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
