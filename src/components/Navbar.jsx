import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiMapPin,
} from "react-icons/fi";

import "./Navbar.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navigationLinks
        .map((link) =>
          document.querySelector(link.href)
        )
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="container navbar__container">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Brew and Bloom home"
        >
          <span className="navbar__brand-mark">
            B
          </span>

          <span className="navbar__brand-copy">
            <strong>Brew & Bloom</strong>
            <small>Café & Bakery</small>
          </span>
        </a>

        <nav
          className={`navbar__navigation ${
            menuOpen
              ? "navbar__navigation--open"
              : ""
          }`}
          aria-label="Primary navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => {
              const sectionId =
                link.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={
                      isActive
                        ? "navbar__link--active"
                        : ""
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="navbar__visit"
            onClick={closeMenu}
          >
            <FiMapPin />
            Visit Us
          </a>
        </nav>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-expanded={menuOpen}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;