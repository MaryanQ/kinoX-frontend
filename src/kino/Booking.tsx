import React, { useState, useEffect } from "react";
import { getBookings, Booking as BookingType } from "../services/apiFacade";

const Booking: React.FC = () => {
  const [bookings, setBookings] = useState<BookingType[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const bookingsData = await getBookings();
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleBookingClick = (bookingId: number) => {
    const selectedBooking = bookings.find(
      (booking) => booking.id === bookingId
    );
    if (selectedBooking) {
      console.log("Initiating booking process for:", selectedBooking);
    }
  };

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} onClick={() => handleBookingClick(booking.id)}>
            {booking.customerName} - {booking.seatId} - {booking.movieId} -{" "}
            {booking.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
