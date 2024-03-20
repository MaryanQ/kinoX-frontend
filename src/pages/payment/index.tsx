// Payment.tsx

import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { Movie, Seats } from "../../constants/models/Movies";
import styles from "./Payment.module.scss";
import MoviesContext from "../../context/MoviesContext";

const Tickets = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const history = useHistory();
  const { movieId } = useParams<{ movieId: string }>();
  const location = useLocation();
  const { seatDetails } = location.state as { seatDetails: Seats };
  const [seconds, setSeconds] = useState(5);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  let movieSeatDetails: Seats = {};
  let bookingChargePerTicket = 20,
    ticketCost: number,
    bookingFee: number,
    totalCost: number;

  const movie = movies.find((mov) => mov.id === parseInt(movieId));
  if (seatDetails) {
    movieSeatDetails = seatDetails;
  }

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimerCompleted(true);
    }
  }, [seconds]);

  const computeSelectedSeats = () => {
    let selectedSeats: string[] = [];
    for (let key in movieSeatDetails) {
      movieSeatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          selectedSeats.push(`${key}${seatIndex + 1}`);
        }
      });
    }
    return selectedSeats;
  };

  const RenderSeatDetails = ({
    selectedSeats,
  }: {
    selectedSeats: string[];
  }) => {
    ticketCost = selectedSeats.length * (movie?.ticketCost || 0);
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>
          {selectedSeats.join(", ")} ({selectedSeats.length} Tickets)
        </div>
        <div className={styles.seatCost}>Rs.{ticketCost}</div>
      </div>
    );
  };

  const RenderBookingCharge = ({
    selectedSeats,
  }: {
    selectedSeats: string[];
  }) => {
    bookingFee = selectedSeats.length * bookingChargePerTicket;
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>Booking Charge</div>
        <div className={styles.seatCost}>Rs.{bookingFee}</div>
      </div>
    );
  };

  const RenderTotalCharge = ({
    selectedSeats,
  }: {
    selectedSeats: string[];
  }) => {
    totalCost = ticketCost + bookingFee;
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>Total</div>
        <div className={styles.seatCost}>Rs.{totalCost}</div>
      </div>
    );
  };

  const modifiedSeatValue = () => {
    let newMovieSeatDetails = { ...movieSeatDetails };
    for (let key in movieSeatDetails) {
      movieSeatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          movieSeatDetails[key][seatIndex] = 1;
        }
      });
    }
    return newMovieSeatDetails;
  };

  const onConfirmButtonClick = async () => {
    let movieIndex = movies.findIndex((mov) => mov.id === parseInt(movieId));
    if (movieIndex !== -1 && setMovies) {
      movies[movieIndex].seats = modifiedSeatValue();
      setMovies(movies);
      history.push("/");
    }
  };

  const RenderConfirmButton = () => {
    return (
      <div className={styles.paymentButtonContainer}>
        <Button
          variant="contained"
          disabled={isTimerCompleted}
          className={styles.paymentButton}
          onClick={onConfirmButtonClick}
        >
          {isTimerCompleted
            ? "Confirm Booking"
            : `Confirm Booking (${seconds})`}
        </Button>
      </div>
    );
  };

  const RenderCard = () => {
    let selectedSeats: string[] = computeSelectedSeats();

    if (!movie) return <div>loading...</div>;
    return (
      <div className={styles.card}>
        <div className={styles.cardTitleContainer}>
          <Link to={`/seats/${movie?.id}`}>
            <ArrowBackIcon />
          </Link>
          <div className={styles.cardTitle}>BOOKING SUMMARY</div>
        </div>
        <p className={styles.movieName}>{movie.name}</p>
        <RenderSeatDetails selectedSeats={selectedSeats} />
        <RenderBookingCharge selectedSeats={selectedSeats} />
        <hr className={styles.hrStyle} />
        <RenderTotalCharge selectedSeats={selectedSeats} />
        <RenderConfirmButton />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Payment Page</title>
      </Head>
      <div className={styles.container}>
        <RenderCard />
      </div>
    </>
  );
};

export default Tickets;
