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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolorem aspernatur distinctio sint quo officia culpa necessitatibus!
            Dolorem quas eveniet, rerum quos iste, aliquam illo temporibus nam
            hic deserunt est.
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
