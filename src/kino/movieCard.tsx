import React from "react";
import { Link } from "react-router-dom";
import "./movies.css";

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  director: string;
  plot: string;
  poster_url: string;
}

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
  item: { id, title, poster_url, plot },
}) => {
  return (
    <>
      <div className="movie-card">
        <div className="MovieBox">
          <div className="img">
            <img src={poster_url} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="text">
            <h3>{title}</h3>
            <span>{plot}</span> <br />
            <Link to={`/movies/${id}`}>
              {" "}
              {/* Assuming the route is correct */}
              <button className="primary-btn">
                <i className="fa fa-ticket"></i> BOOK NU
              </button>
            </Link>
          </div>
          <div className="details">
            <p>Title: {title}</p>
            <p>poster: {poster_url} </p>
            <p>Plot:{plot} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
