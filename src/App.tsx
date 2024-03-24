import { Routes, Route } from "react-router-dom";
//import { useAuth } from "./security/AuthProvider";
import Login from "./security/Login";
import Logout from "./security/Logout";
import AboutUs from "./kino/aboutUs";

import Home from "./kino/Home";
import { Halls } from "./kino/halls";
//import { Cinemas } from "./kino/cinema";
import { Movies } from "./kino/Movies";
import MovieDetails from "./kino/MovieDetails";
import Booking from "./kino/Booking";
import { ShowTime } from "./kino/ShowTime";
import BookingForm from "./Form/BookingForm";

function App() {
  //const auth = useAuth();

  // Define handleClose function to handle closing the modal or form
  const handleClose = () => {
    // Implement logic to close the modal or form
    console.log("Modal closed");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="booking" element={<Booking />} />
        {/* Pass handleClose function as onClose prop to BookingForm */}
        <Route
          path="/booking/:movieId"
          element={<BookingForm onClose={handleClose} />}
        />

        <Route path="/halls" element={<Halls />} />
        <Route path="/showtimes" element={<ShowTime />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
