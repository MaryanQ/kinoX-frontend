import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useGetMovies } from "../services/movies";
import { Movie } from "../constants/models/Movies";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { movies, isLoading, isError } = useGetMovies();

  const RenderMoviesList = () => {
    if (movies) {
      return movies.map((movie: Movie) => (
        <Grid item xs={4} key={movie.id}>
          <Link to={`/details/${movie.id}`} className={styles.card}>
            <div>
              <div className={styles.movieTitle}>{movie.name}</div>
              <div className={styles.movieLanguage}>{movie.language}</div>
            </div>
          </Link>
        </Grid>
      ));
    } else if (isLoading) {
      return <div>Loading Movies...</div>;
    } else {
      return <div>No Movies To Watch...</div>;
    }
  };

  return (
    <>
      <div className={styles.moviesContainer}>
        <h1 className={styles.title}>Recommended Movies</h1>
        <Grid container spacing={2}>
          <RenderMoviesList />
        </Grid>
      </div>
    </>
  );
};

export default Home;
