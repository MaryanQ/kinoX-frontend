import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"; // Aliased Swiper as SwiperComponent
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import movie1 from "../images/movie1.jpeg";
import movie2 from "../images/movie2.jpeg";
import movie3 from "../images/movie3.jpeg";

const MySwiper: React.FC = () => {
  // Renamed the component to MySwiper
  return (
    <>
      <div className="swiper-container">
        <SwiperComponent
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 10000 }} // Autoplay with a delay of 3000ms (3 seconds)
        >
          <SwiperSlide>
            <img
              src={movie1}
              alt=""
              style={{ width: "70vw", height: "90vh" }} // Set width to 100% and height to auto
            />
            <div className="text-box">
              <Link to="/halls" className="btn">
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
              <Link to="/halls" className="btn">
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
              <Link to="/halls" className="btn">
                Køb billet
              </Link>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </SwiperComponent>
      </div>
    </>
  );
};

export default MySwiper;
