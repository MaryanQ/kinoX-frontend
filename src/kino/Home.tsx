import React from "react";
import Navbar from "../layout/NavbarHomePage"; // Import the Navbar component
import Footer from "../layout/Footer"; // Import the Footer component
import { IconContext } from "react-icons";
import "../styles/styles.css";
import { Movies } from "./Movies";
import MySwiper from "../layout/Swiper";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <header className="header">
          <IconContext.Provider value={{ color: "#fff" }}>
            <Navbar />
          </IconContext.Provider>
          <MySwiper />
        </header>

        <div>
          <h1 className="title-explorer">Explorer out movies</h1>
        </div>
        <section className="about-us">
          <Movies />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
