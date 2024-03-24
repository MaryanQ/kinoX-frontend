import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {
// faMapMarker,
// faEnvelope,
// faPhone,
//} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-omos" id="footer-sprite">
          <h4>Om os</h4>
          <p>
            Welcome to ANM Cinemaxx, where the magic of movies comes to life!
            Situated in the heart of Copenhagen/Aarhus, ANM Cinemaxx offers an
            unparalleled cinematic experience for movie enthusiasts of all ages.
            With state-of-the-art facilities, comfortable seating, and a wide
            selection of the latest blockbusters, indie gems, and timeless
            classics, we're your ultimate destination for entertainment.
          </p>
          <div className="footer-socials">
            <li>
              <a href="#">{/* Add your social media link here */}</a>
            </li>
            <li>
              <a href="#">{/* Add your social media link here */}</a>
            </li>
          </div>
        </div>
        <div className="footer-kontaktos" id="footer-sprite">
          <h4>Kontakt os</h4>
          <ul>
            <li>
              <span></span>
              <p>
                <a href="#">123 Main Street, Springfield, Anytown, Country</a>
              </p>
            </li>
            <li>
              <span></span>
              <p>
                <a href="#">123@hotmail.com</a>
              </p>
            </li>
            <li>
              <span></span>
              <p>
                <a href="#">+45 00 00 00 00 </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-menu" id="footer-sprite">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">PROGRAMS</Link>
            </li>
            <li>
              <Link to="/programs/about-us">KOMMENDE FILM</Link>
            </li>
            <li>
              <Link to="/programs/teachers">OM OS</Link>
            </li>
            <li>
              <Link to="/programs/contactUs">KONTAKT OS</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>{" "}
        </div>
      </div>
    </section>
  );
};

export default Footer;
