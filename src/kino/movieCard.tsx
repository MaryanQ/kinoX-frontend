import React from "react";
import { Link } from "react-router-dom";
import "./movies.css";

interface Movie {
  id: number;
  Title: string;
  Poster: string;
  Rated: string;
}

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
  item: { id, Title, Poster, Rated },
}) => {
  return (
    <>
      <div className="movie-card">
        <div className="MovieBox">
          <div className="img">
            <img src={Poster} alt="" />
          </div>
          <div className="text">
            <h3>{Title}</h3>
            <span>{Rated}</span> <br />
            <Link to={`/movies/${id}`}>
              {" "}
              {/* Assuming the route is correct */}
              <button className="primary-btn">
                <i className="fa fa-ticket"></i> BOOK NU
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
