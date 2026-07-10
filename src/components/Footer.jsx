import { FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <h2>Brew & Bloom</h2>
          <p>
            Fresh coffee, handcrafted bakes, and a welcoming neighbourhood
            experience.
          </p>
        </div>

        <div className="footer__links">
          <h3>Explore</h3>

          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__contact">
          <h3>Contact</h3>

          <a href="tel:+919876543210">
            <FiPhone />
            +91 98765 43210
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMapPin />
            Delhi, India
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {currentYear} Brew & Bloom Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;