import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  startTime: Date;
}

const MovieList = () => {
  const movies: Movie[] = [
    { id: 1, title: "Movie 1", startTime: new Date("2024-03-25T18:00:00") },
    { id: 2, title: "Movie 2", startTime: new Date("2024-03-25T20:00:00") },
  ];

  const handleMovieClick = () => {
    console.log("Movie clicked!");
  };

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/select-seats/${movie.id}`} onClick={handleMovieClick}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
