import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import "./Navbar.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-main">Brew & Bloom</span>
          <span className="navbar__brand-subtitle">Café & Bakery</span>
        </a>

        <nav
          className={`navbar__navigation ${
            menuOpen ? "navbar__navigation--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#contact" onClick={closeMenu}>
            Visit Us
          </Button>
        </nav>

        <button
          type="button"
          className="navbar__menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((currentState) => !currentState)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;