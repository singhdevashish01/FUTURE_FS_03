import { useState } from "react";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import Button from "../components/Button";
import "./Contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message.";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialFormData);
    setFormErrors({});
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Contact & Location</span>

          <h2 className="section-title">
            Plan your visit or send us an enquiry
          </h2>

          <p className="section-description">
            Contact Brew & Bloom for menu enquiries, group seating,
            availability, or general assistance.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__information">
            <div className="contact__card contact__card--primary">
              <span className="contact__card-label">
                Visit Brew & Bloom
              </span>

              <h3>
                A convenient neighbourhood café in Ghaziabad
              </h3>

              <p>
                The location and contact details below are demonstration
                information and should be replaced before final deployment.
              </p>

              <div className="contact__actions">
                <Button href="tel:+919876543210" variant="light">
                  <FiPhone />
                  Call Now
                </Button>

                <a
                  className="contact__whatsapp"
                  href="https://wa.me/919876543210?text=Hello%20Brew%20%26%20Bloom%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMessageCircle />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="contact__details-grid">
              <article className="contact__detail-card">
                <div className="contact__detail-icon">
                  <FiMapPin />
                </div>

                <div>
                  <h3>Address</h3>
                  <p>
                    Raj Nagar, Ghaziabad,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </article>

              <article className="contact__detail-card">
                <div className="contact__detail-icon">
                  <FiPhone />
                </div>

                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>
              </article>

              <article className="contact__detail-card">
                <div className="contact__detail-icon">
                  <FiMail />
                </div>

                <div>
                  <h3>Email</h3>
                  <a href="mailto:hello@brewandbloom.in">
                    hello@brewandbloom.in
                  </a>
                </div>
              </article>

              <article className="contact__detail-card">
                <div className="contact__detail-icon">
                  <FiClock />
                </div>

                <div>
                  <h3>Opening Hours</h3>
                  <p>
                    Monday to Sunday
                    <br />
                    8:00 AM to 10:00 PM
                  </p>
                </div>
              </article>
            </div>

            <div className="contact__map">
              <div className="contact__map-content">
                <FiMapPin />

                <h3>Google Maps Location</h3>

                <p>
                  Replace this placeholder with the verified business map
                  embed before final delivery.
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper">
            <div className="contact__form-heading">
              <span>Send an Enquiry</span>

              <h3>How can we help?</h3>

              <p>
                Complete the form and the café team will respond to your
                enquiry.
              </p>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {formErrors.name && (
                  <span className="contact__error">
                    {formErrors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />

                {formErrors.email && (
                  <span className="contact__error">
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can assist you"
                  value={formData.message}
                  onChange={handleChange}
                />

                {formErrors.message && (
                  <span className="contact__error">
                    {formErrors.message}
                  </span>
                )}
              </div>

              <Button type="submit" className="contact__submit">
                <FiSend />
                Send Enquiry
              </Button>

              {submitted && (
                <div
                  className="contact__success"
                  role="status"
                  aria-live="polite"
                >
                  Your enquiry has been recorded successfully. This is a
                  frontend demonstration form.
                </div>
              )}

              <p className="contact__form-note">
                Connect this form to Web3Forms, Formspree, or a backend API
                before production use.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;