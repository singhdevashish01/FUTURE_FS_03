import {
  FiArrowUp,
  FiMessageCircle,
  FiPhone,
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
    <div
      className="floating-actions"
      aria-label="Quick contact options"
    >
      <a
        href="#contact"
        className="floating-actions__button"
        aria-label="Call Brew and Bloom Café"
        title="Call the café"
      >
        <FiPhone />
      </a>

      <a
        href="https://wa.me/919876543210?text=Hello%20Brew%20%26%20Bloom%2C%20I%20would%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noreferrer"
        className="floating-actions__button floating-actions__button--whatsapp"
        aria-label="Contact Brew and Bloom Café on WhatsApp"
        title="WhatsApp the café"
      >
        <FiMessageCircle />
      </a>

      <button
        type="button"
        className="floating-actions__button"
        aria-label="Scroll to the top of the page"
        title="Back to top"
        onClick={scrollToTop}
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default FloatingActions;