import React, { useState } from "react";
import BookingForm from "./BookingForm"; // Assuming BookingForm is in the same directory

const ParentComponent: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleOpenBookingForm = () => {
    setShowBookingForm(true);
  };

  return (
    <div>
      <button onClick={handleOpenBookingForm}>Open Booking Form</button>
      {showBookingForm && <BookingForm onClose={handleCloseBookingForm} />}
    </div>
  );
};

export default ParentComponent;
