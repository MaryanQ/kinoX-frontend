import React, { useState } from "react";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import MoviesContext from "../context/MoviesContext";
import { Movie } from "../constants/models/Movies";
import { movies as mockMovies } from "../constants/movies";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [movies, setMovies] = useState<Movie[]>(mockMovies);

  return (
    <Layout>
      <MoviesContext.Provider value={{ movies, setMovies }}>
        <Component {...pageProps} />
      </MoviesContext.Provider>
    </Layout>
  );
}

export default MyApp;
