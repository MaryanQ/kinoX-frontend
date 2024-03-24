import React from "react";
import Navbar from "../layout/NavbarHomePage"; // Import the Navbar component
import Footer from "../layout/Footer"; // Import the Footer component
import { Link } from "react-router-dom";
import Navbar from "../layout/NavbarHomePage";
import Footer from "../layout/Footer";
import { IconContext } from "react-icons";
import { Swiper, SwiperSlide } from "swiper/react"; // Modified import for Swiper
import "../styles/styles.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import movie1 from "../images/movie1.jpeg";
import movie2 from "../images/movie2.jpeg";
import movie3 from "../images/movie3.jpeg";
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
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper: any) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 10000 }}
            >
              <SwiperSlide>
                <img
                  src={movie1}
                  alt=""
                  style={{ width: "70vw", height: "90vh" }} // Set width to 100% and height to auto
                />
                <div className="text-box">
                  <Link to="#" className="btn trailer">
                    Trailer
                  </Link>
                  <Link to="#" className="btn">
                    Køb billet{" "}
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={movie2}
                  alt=""
                  style={{ width: "70vw", height: "90vh" }} // Set width to 100% and height to auto
                />{" "}
                <div className="text-box">
                  <Link to="#" className="btn trailer">
                    Trailer
                  </Link>
                  <Link to="#" className="btn">
                    Køb billet{" "}
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={movie3}
                  alt=""
                  style={{ width: "70vw", height: "90vh" }} // Set width to 100% and height to auto
                />{" "}
                <div className="text-box">
                  <Link to="#" className="btn trailer">
                    Trailer
                  </Link>
                  <Link to="#" className="btn">
                    Køb billet
                  </Link>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </div>
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
