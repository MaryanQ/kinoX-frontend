import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "../styles/styles.css";
import Theaters from "./theaters";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav
        id="navbar"
        className={isScrolled ? "nav-links sticky" : "nav-links"}
      >
        <div className="logo-container">
          <Link to="/" className="logo">
            ANM Cinemaxx Deluxe
          </Link>
        </div>
        <Link to="#" className="menu-bars" id="open-menu">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div
          className={sidebar ? "nav-links active" : "nav-links"}
          id="navLinks"
        >
          <Theaters />

          <ul onClick={showSidebar}>
            <Link to="#" className="menu-bars close-menu">
              <AiIcons.AiOutlineClose />
            </Link>
            <li>
              <Link to="/">PROGRAMS</Link>
            </li>
            <li>
              <Link to="/programs/contactUs">KONTAKT OS</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
