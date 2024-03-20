// Details.tsx

import { useContext } from "react";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom"; // Assuming you're using React Router for navigation
import { Movie } from "../../constants/models/Movies";
import MoviesContext from "../../context/MoviesContext";
import styles from "./Details.module.scss";

const Details = () => {
  const { movies } = useContext(MoviesContext);
  const { id }: any = useParams();
  const movie = movies.find((mov: Movie) => mov.id === parseInt(id));

  const RenderBookTicketsButton = () => {
    return (
      <Link to={`/seats/${movie?.id}`}>
        <div className={styles.paymentButtonContainer}>
          <Button variant="contained" className={styles.paymentButton}>
            Book Ticket
          </Button>
        </div>
      </Link>
    );
  };

  const RenderCustomizeRowsButton = () => {
    return (
      <Link to={`/customize/${movie?.id}`}>
        <div className={styles.paymentButtonContainer}>
          <Button variant="contained" className={styles.paymentButton}>
            Customize Row
          </Button>
        </div>
      </Link>
    );
  };

  if (!movie) return <div>loading...</div>;
  return (
    <div className={styles.seatsContainer}>
      <h1>
        {movie.name} - {movie.language}
      </h1>
      <div className={styles.language}>Ticket Cost: {movie.ticketCost}</div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonHolder}>
          <RenderBookTicketsButton />
          <RenderCustomizeRowsButton />
        </div>
      </div>
    </div>
  );
};

export default Details;
