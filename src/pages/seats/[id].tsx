import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { Movie, Seats } from "../../constants/models/Movies";
import styles from "./Seats.module.scss";
import MoviesContext from "../../context/MoviesContext";

const Seats = () => {
  const { movies } = useContext(MoviesContext);
  const [seatDetails, setSeatDetails] = useState<Seats>({});
  const { id, seats }: any = useParams(); // Assuming you're using useParams to get the movie ID
  const movie = movies.find((mov) => mov.id === parseInt(id));

  useEffect(() => {
    if (!seats) {
      clearSelectedSeats();
    }
  }, []);

  const clearSelectedSeats = () => {
    let newMovieSeatDetails = { ...seatDetails };
    for (let key in seatDetails) {
      seatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          seatDetails[key][seatIndex] = 0;
        }
      });
    }
    setSeatDetails(newMovieSeatDetails);
  };

  const onSeatClick = (seatValue: number, rowIndex: number, key: string) => {
    if (seatDetails) {
      if (seatValue === 1 || seatValue === 3) {
        return;
      } else if (seatValue === 0) {
        seatDetails[key][rowIndex] = 2;
      } else {
        seatDetails[key][rowIndex] = 0;
      }
    }
    setSeatDetails({ ...seatDetails });
  };

  const getClassNameForSeats = (seatValue: number) => {
    let dynamicClass;
    if (seatValue === 0) {
      dynamicClass = styles.seatNotBooked;
    } else if (seatValue === 1) {
      dynamicClass = styles.seatBooked;
    } else if (seatValue === 2) {
      dynamicClass = styles.seatSelected;
    } else {
      dynamicClass = styles.seatBlocked;
    }
    return `${styles.seats} ${dynamicClass}`;
  };

  const RenderSeats = () => {
    let seatArray = [];
    for (let key in seatDetails) {
      let colValue = seatDetails[key].map((seatValue, rowIndex) => (
        <span key={`${key}.${rowIndex}`} className={styles.seatsHolder}>
          {rowIndex === 0 && <span className={styles.colName}>{key}</span>}
          <span
            className={getClassNameForSeats(seatValue)}
            onClick={() => onSeatClick(seatValue, rowIndex, key)}
          >
            {rowIndex + 1}
          </span>
          {seatDetails && rowIndex === seatDetails[key].length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </span>
      ));
      seatArray.push(colValue);
    }
    return <div className={styles.seatsLeafContainer}>{seatArray}</div>;
  };

  const RenderPaymentButton = () => {
    let selectedSeats: string[] = [];
    for (let key in seatDetails) {
      seatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          selectedSeats.push(`${key}${seatIndex + 1}`);
        }
      });
    }
    if (selectedSeats.length) {
      return (
        <Link
          to={`/payment?movieId=${movie?.id}&seatDetails=${JSON.stringify(
            seatDetails
          )}`}
        >
          <div className={styles.paymentButtonContainer}>
            <Button
              variant="contained"
              href="#contained-buttons"
              className={styles.paymentButton}
            >
              Pay Rs.{selectedSeats.length * (movie?.ticketCost || 0)}
            </Button>
          </div>
        </Link>
      );
    } else {
      return <></>;
    }
  };

  if (!movie) return <div>loading...</div>;
  return (
    <>
      <div className={styles.seatsContainer}>
        <h1>{movie.name}</h1>
        {seatDetails && <RenderSeats />}
        <RenderPaymentButton />
      </div>
    </>
  );
};

export default Seats;
