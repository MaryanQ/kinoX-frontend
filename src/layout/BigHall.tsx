import { useState } from "react";
import { Seat } from "../services/apiFacade";
import BuyTickets from "../kino/buyTicket";

const Hall1 = () => {
  const numRows = 25;
  const numSeatsPerRow = 16;

  // Initialize state to track selected seats
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  // Function to handle seat click event
  const handleSeatClick = (selectedSeat: Seat) => {
    // Check if the selected seat is already in the selectedSeats array
    const index = selectedSeats.findIndex(
      (seat) => seat.id === selectedSeat.id
    );

    if (index === -1) {
      // If the seat is not already selected, add it to the selectedSeats array
      setSelectedSeats([...selectedSeats, selectedSeat]);
    } else {
      // If the seat is already selected, remove it from the selectedSeats array
      setSelectedSeats(
        selectedSeats.filter((seat) => seat.id !== selectedSeat.id)
      );
    }
  };

  // Function to calculate total payment based on selected seats
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
                    price: 120,
                    capacity: 1, // Example value for capacity
                    movieScreening: {
                      id: 1, // Replace with actual ID
                      movieTitle: "Movie Title", // Replace with actual movie title
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"), // Replace with actual end time
                      ticketPrice: 10, // Replace with actual ticket price
                      availableSeats: 100, // Replace with actual number of available seats
                      bookedSeats: 0, // Empty array for booked seats
                      language: "English", // Replace with actual language
                      seats: [], // Empty array for seats
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
                    price: 160,
                    capacity: 1, // Example value for capacity
                    movieScreening: {
                      id: 1, // Replace with actual ID
                      movieTitle: "Movie Title", // Replace with actual movie title
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"), // Replace with actual end time
                      ticketPrice: 10, // Replace with actual ticket price
                      availableSeats: 100, // Replace with actual number of available seats
                      bookedSeats: 0, // Empty array for booked seats
                      language: "English", // Replace with actual language
                      seats: [], // Empty array for seats
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
                    price: 200,
                    capacity: 1, // Example value for capacity
                    movieScreening: {
                      id: 1, // Replace with actual ID
                      movieTitle: "Movie Title", // Replace with actual movie title
                      startTime: new Date("2024-03-25T18:00:00"),
                      endTime: new Date("2024-03-25T20:00:00"), // Replace with actual end time
                      ticketPrice: 10, // Replace with actual ticket price
                      availableSeats: 100, // Replace with actual number of available seats
                      bookedSeats: 0, // Empty array for booked seats
                      language: "English", // Replace with actual language
                      seats: [], // Empty array for seats
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
