import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="site logo" width={40} height={30} />
          <span className="logo-text">Book My Ticket</span>
        </div>
      </Link>
      <Link to="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Navbar;
