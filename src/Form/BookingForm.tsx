import React, { useState } from "react";
import { submitBookingData } from "../services/submitBookingData";

const BookingForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    seatId: "",
    movieId: "",
    price: "",
    bookingTime: "",
    // Add other form fields as needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Convert seatId, movieId, and price to appropriate types
      const formattedData = {
        ...formData,
        seatId: formData.seatId.toString(),
        movieId: Number(formData.movieId),
        price: Number(formData.price), // Convert price to number
        id: 0, // Set a default value for id or leave it empty
      };

      await submitBookingData({
        ...formattedData,
        seatId: parseInt(formattedData.seatId),
      });

      // Handle successful submission (e.g., display success message, redirect user)
    } catch (error) {
      // Handle errors, e.g., display error message to the user
      console.error("Error submitting booking:", error);
      alert(
        "An error occurred while processing your booking. Please try again later."
      );
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
          </label>
          <label>
            Seat ID:
            <input
              type="text"
              name="seatId"
              value={formData.seatId}
              onChange={handleChange}
            />
          </label>
          {/* Add other form fields here */}
          <button type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
