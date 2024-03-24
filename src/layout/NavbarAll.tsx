import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "../styles/styles.css";

const NavbarAll: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      </nav>
    </IconContext.Provider>
  );
};

export default NavbarAll;
