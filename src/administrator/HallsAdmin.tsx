import React from "react";
import NavbarAdmin from "../layout/NavbarAdmin";
import Footer from "../layout/Footer";
import { IconContext } from "react-icons";
import "../styles/styles.css";

const HallsAdmin: React.FC = () => {
  return (
    <>
      <div>
        <header className="header">
          <IconContext.Provider value={{ color: "#fff" }}>
            <NavbarAdmin />
          </IconContext.Provider>
          <section className="Halls-crud">
            <h2>Halls crud</h2>
            <p>Halls crud content</p>
          </section>
        </header>

        <Footer />
      </div>
    </>
  );
};

export default HallsAdmin;
