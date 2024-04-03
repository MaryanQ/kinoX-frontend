import { Routes, Route } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";
import Login from "./security/Login";
import Logout from "./security/Logout";
import AboutUs from "./kino/ContactUs";
import Home from "./kino/Home";
import Halls from "./kino/halls";
import { Movies } from "./kino/Movies";
import MovieDetails from "./kino/MovieDetails";
import Booking from "./kino/Booking";
import RequireAuth from "./security/RequireAuth";
import HomeAdmin from "./administrator/HomeAdmin";
import ContactUs from "./kino/ContactUs";

function App() {
  const auth = useAuth();
  auth.isLoggedIn;
  auth.isLoggedInAs;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="booking" element={<Booking />} />
        <Route path="/halls" element={<Halls />} />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <HomeAdmin />
            </RequireAuth>
          }
        />
        <Route path="/programs/contactUs" element={<ContactUs />} />
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
