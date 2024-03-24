import React from "react";
import { Link } from "react-router-dom";
import "./movies.css";

interface Movie {
  id: number;
  Title: string;
  Poster: string;
  Rated: string;
  Director: string;
  Genre: string;
  Runtime: string;
}

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
  item: { /*id*/ Title, Poster, Rated, Director, Genre, Runtime },
}) => {
  return (
    <>
      <div className="movie-card">
        <div className="MovieBox">
          <div className="img">
            <img src={Poster} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="text">
            <h1>{Title}</h1>
            <Link to={/*`/movies/${id}`*/ `/halls`}>
              <button className="btn">
                <i className="fa fa-ticket"></i> BOOK NU
              </button>
            </Link>
          </div>
          <div className="details">
            <p>Director: {Director}</p>
            <p>Rated: {Rated} </p>
            <p>Genre:{Genre} </p>
            <p>Runtime:{Runtime} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
