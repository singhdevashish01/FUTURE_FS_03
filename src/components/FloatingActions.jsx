import {
  FiArrowUp,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import "./FloatingActions.css";

function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions">
      <a
        href="#contact"
        className="floating-actions__button"
        aria-label="Go to contact section"
        title="Contact"
      >
        <FiMail />
      </a>

      <a
        href="#contact"
        className="floating-actions__button"
        aria-label="View location"
        title="Location"
      >
        <FiMapPin />
      </a>

      <button
        type="button"
        className="floating-actions__button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default FloatingActions;