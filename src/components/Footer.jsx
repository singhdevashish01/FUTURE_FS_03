import {
  FiInstagram,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Brew & Bloom
            </a>

            <p>
              Handcrafted coffee, fresh bakes, and a welcoming café
              experience designed for everyday moments.
            </p>
          </div>

          <div className="footer__column">
            <h3>Explore</h3>

            <a href="#about">Our Story</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__column">
            <h3>Visit</h3>

            <span>
              <FiMapPin />
              Delhi, India
            </span>

            <span>
              <FiMail />
              hello@brewandbloom.in
            </span>
          </div>

          <div className="footer__column">
            <h3>Follow</h3>

            <a
              href="#home"
              aria-label="Instagram placeholder"
            >
              <FiInstagram />
              Instagram
            </a>

            <p className="footer__placeholder-note">
              Social links are placeholders for project demonstration.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Brew & Bloom. All rights reserved.
          </p>

          <p>
            Local Business Website Project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;