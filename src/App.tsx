import { Routes, Route } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";
import Login from "./security/Login";
import Logout from "./security/Logout";
import AboutUs from "./kino/aboutUs";
import BuyTickets from "./kino/buyTicket";
import Home from "./kino/Home";
import { Halls } from "./kino/halls";
import { Cinemas } from "./kino/cinema";
import Navbar from "./Layout/Navbar";
import { Movies } from "./kino/Movies";
import MovieDetails from "./kino/MovieDetails";

function App() {
  const auth = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="buyTickets" element={<BuyTickets />} />
        <Route path="/cinemas" element={<Cinemas />} />
        <Route path="/halls" element={<Halls />} />
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
