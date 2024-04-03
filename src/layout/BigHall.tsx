import { useState } from "react";
import { Seat } from "../services/apiFacade";
import BuyTickets from "../kino/buyTicket";

const Hall1 = () => {
  const numRows = 25;
  const numSeatsPerRow = 16;

  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleSeatClick = (selectedSeat: Seat) => {
    const index = selectedSeats.findIndex(
      (seat) => seat.id === selectedSeat.id
    );

    if (index === -1) {
      setSelectedSeats([...selectedSeats, selectedSeat]);
    } else {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat.id !== selectedSeat.id)
      );
    }
  };

  const calculateTotalPayment = (): number => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const totalPrice = calculateTotalPayment(); // Calculate total price

  return (
    <div className="theater">
      <div className="theater-container">
        <div className="info row-text">
          <p>
            <span className="seat color-box cowboy-color"></span> Cowboy seat
            10% off
          </p>
          <p>
            <span className="seat color-box sofa-color"></span> Sofa seat
          </p>
          <p>
            <span className="seat color-box available-color"></span> Available
            seat
          </p>
          <p>
            <span className="seat color-box yourSeat-color"></span> Your seat
          </p>
        </div>
        <div className="movie-info">
          <h2>
            {selectedSeats.length > 0
              ? selectedSeats[0].movieScreening.movieTitle
              : "Select a seat"}
          </h2>
          <p>
            Start Time:{" "}
            {selectedSeats.length > 0
              ? selectedSeats[0].movieScreening.startTime.toLocaleString()
              : "-"}
          </p>
        </div>
        <BuyTickets
          totalPrice={totalPrice}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />

        {/* Pass totalPrice to BuyTickets */}
      </div>

      <div>
        {/* Rest of your component */}
        <div className="screen"></div>
        <small className="screen-direction">screen this way</small>
        {/* Cowboy Rows */}
        {[...Array(2)].map((_, rowIndex) => (
          <div className="row cowboy-row" key={`cowboy-row-${rowIndex}`}>
            {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
              <div
                className="seat cowboy-color"
                key={`cowboy-seat-${rowIndex}-${seatIndex}`}
                onClick={() =>
                  handleSeatClick({
                    id: rowIndex * numSeatsPerRow + seatIndex,
                    type: "Cowboy",
                    price: 20,
                    capacity: 1,
                    movieScreening: {
                      id: 1,
                      movieTitle: "Movie Title",
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"),
                      ticketPrice: 10,
                      availableSeats: 100,
                      bookedSeats: 0,
                      language: "English",
                      seats: [],
                    },
                  })
                }
              ></div>
            ))}
          </div>
        ))}

        {/* Regular Rows */}
        {[...Array(numRows - 4)].map((_, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
              <div
                className="seat"
                key={`seat-${rowIndex}-${seatIndex}`}
                onClick={() =>
                  handleSeatClick({
                    id: rowIndex * numSeatsPerRow + seatIndex,
                    type: "Regular",
                    price: 16,
                    capacity: 1,
                    movieScreening: {
                      id: 1,
                      movieTitle: "Movie Title",
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"),
                      ticketPrice: 10,
                      availableSeats: 100,
                      bookedSeats: 0,
                      language: "English",
                      seats: [],
                    },
                  })
                }
              ></div>
            ))}
          </div>
        ))}

        {/* Sofa Rows */}
        {[...Array(2)].map((_, rowIndex) => (
          <div className="row sofa-row" key={`sofa-row-${rowIndex}`}>
            {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
              <div
                className="seat sofa-color"
                key={`sofa-seat-${rowIndex}-${seatIndex}`}
                onClick={() =>
                  handleSeatClick({
                    id: rowIndex * numSeatsPerRow + seatIndex,
                    type: "Sofa",
                    price: 25,
                    capacity: 1,
                    movieScreening: {
                      id: 1,
                      movieTitle: "Movie Title",
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"),
                      ticketPrice: 10,
                      availableSeats: 100,
                      bookedSeats: 0,
                      language: "English",
                      seats: [],
                    },
                  })
                }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hall1;
