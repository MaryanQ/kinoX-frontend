import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Kino
      </Link>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/movies" className="nav-link">
            Program
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cinemas" className="nav-link">
            Om Os
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/buyTickets" className="nav-link">
            Køb billet
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
