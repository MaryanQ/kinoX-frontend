import { Routes, Route } from "react-router-dom";
import RequireAuth from "./security/RequireAuth";
import { useAuth } from "./security/AuthProvider";
import Login from "./security/Login";
import Logout from "./security/Logout";
import AboutUs from "./kino/aboutUs";
import BuyTickets from "./kino/buyTicket";
import Home from "./kino/Home";
import "./kino/movies.css";

import { Cinemas } from "./kino/cinema";
import MovieForm from "./kino/MovieForm";
import { MovieDetails } from "./kino/MovieDetails";

function App() {
  const auth = useAuth();
  auth.isLoggedIn;
  auth.isLoggedInAs;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="buyTickets" element={<BuyTickets />} />
      <Route path="/cinemas" element={<Cinemas />} />
      <Route path="/movies" element={<MovieDetails />} />{" "}
      {/* This is the route for MovieDetails */}
      <Route
        path="/movies/add"
        element={
          <RequireAuth>
            <MovieForm />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
}

export default App;
