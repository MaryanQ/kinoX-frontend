import React from "react";
import { Movie } from "../constants/models/Movies";
import { movies } from "../constants/movies";

interface MovieContextModal {
  movies: Movie[];
  setMovies?: (movies: Movie[]) => void;
}

const MovieContext = React.createContext<MovieContextModal>({ movies });

export default MovieContext;
