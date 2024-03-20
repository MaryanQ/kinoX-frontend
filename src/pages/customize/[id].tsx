import { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@mui/material";

import { Movie, Seats } from "../../constants/models/Movies";
import styles from "./Customize.module.scss";
import MoviesContext from "../../context/MoviesContext";

const CustomizeRows = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const [seatDetails, setSeatDetails] = useState<Seats>({});
  const [row, setRow] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);

  useEffect(() => {
    setSeatDetails(movie?.seats || {});
    setRow(movie?.rows || 0);
    setColumn(movie?.cols || 0);
  }, [movie]);

  useEffect(() => {
    clearSelectedSeats();
    handleSubmit();
  }, [row, column]);

  const clearSelectedSeats = () => {
    const newMovieSeatDetails: Seats = {};
    for (const key in seatDetails) {
      newMovieSeatDetails[key] = seatDetails[key].map((seatValue) =>
        seatValue === 2 ? 0 : seatValue
      );
    }
    setSeatDetails(newMovieSeatDetails);
  };

  const handleSubmit = () => {
    const newSeatObject: Seats = {};
    for (let i = 0; i < column; i++) {
      const key =
        i < 26
          ? String.fromCharCode(65 + i)
          : `${String.fromCharCode(
              65 + Math.floor(i / 25)
            )}${String.fromCharCode(65 + (i % 25))}`;
      newSeatObject[key] = Array(row)
        .fill(0)
        .map((_, j) => (seatDetails[key] && seatDetails[key][j]) || 0);
    }
    setSeatDetails(newSeatObject);
  };

  const handleSaveSetup = () => {
    const movieIndex = movies.findIndex((mov) => mov.id === parseInt(id));
    if (movieIndex !== -1 && setMovies) {
      const updatedMovies = [...movies];
      updatedMovies[movieIndex] = {
        ...updatedMovies[movieIndex],
        seats: seatDetails,
      };
      setMovies(updatedMovies);
      router.push(`/details/${id}`);
    }
  };

  const RenderInputFields = () => (
    <div className={styles.inputContainer}>
      <form className={styles.inputHolder}>
        <TextField
          id="row"
          type="number"
          label="Row"
          variant="outlined"
          size="small"
          className={styles.inputField}
          value={row}
          onChange={(e) => setRow(parseInt(e.target.value) || 0)}
        />
        <TextField
          id="column"
          type="number"
          label="Column"
          variant="outlined"
          size="small"
          className={styles.inputField}
          value={column}
          onChange={(e) => setColumn(parseInt(e.target.value) || 0)}
        />
        <Button
          onClick={handleSaveSetup}
          variant="contained"
          className={styles.saveSetUpButton}
        >
          Save Setup
        </Button>
      </form>
    </div>
  );

  const onSeatClick = (seatValue: number, rowIndex: number, key: string) => {
    if (seatValue !== 1) {
      const newSeatDetails = { ...seatDetails };
      newSeatDetails[key][rowIndex] = seatValue === 0 ? 3 : 0;
      setSeatDetails(newSeatDetails);
    }
  };

  const getClassNameForSeats = (seatValue: number) => {
    let dynamicClass = styles.seatNotBooked;
    if (seatValue === 1) dynamicClass = styles.seatBooked;
    else if (seatValue === 2) dynamicClass = styles.seatSelected;
    else if (seatValue === 3) dynamicClass = styles.seatBlocked;
    return `${styles.seats} ${dynamicClass}`;
  };

  const RenderSeats = () => (
    <div className={styles.seatsLeafContainer}>
      {Object.entries(seatDetails).map(([key, seats]) => (
        <div key={key} className={styles.seatsHolder}>
          <span className={styles.colName}>{key}</span>
          {seats.map((seatValue, rowIndex) => (
            <span
              key={`${key}.${rowIndex}`}
              className={getClassNameForSeats(seatValue)}
              onClick={() => onSeatClick(seatValue, rowIndex, key)}
            >
              {rowIndex + 1}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.seatsContainer}>
      <h1>{movie?.name}</h1>
      {RenderInputFields()}
      <p className={styles.header}>
        Select Seats to be <b className={styles.headerBlockedText}>Blocked</b>
      </p>
      {seatDetails && <RenderSeats />}
    </div>
  );
};

export default CustomizeRows;
