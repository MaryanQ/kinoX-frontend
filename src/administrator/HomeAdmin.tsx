import React from "react";
import NavbarAdmin from "../layout/NavbarAdmin"; // Import the Navbar component
import Footer from "../layout/Footer"; // Import the Footer component
import { IconContext } from "react-icons";
import "../styles/styles.css";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <header className="header">
          <IconContext.Provider value={{ color: "#fff" }}>
            <NavbarAdmin />
          </IconContext.Provider>
          <section className="button-sec">
            <a href="/CinemaAdmin" className="Cinemas-btn">
              Cinemas
            </a>
            <a href="/HallsAdmin" className="Halls-btn">
              Halls
            </a>
          </section>
        </header>

        <Footer />
      </div>
    </>
  );
};

export default Home;
