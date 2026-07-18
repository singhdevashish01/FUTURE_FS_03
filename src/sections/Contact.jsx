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
import Reveal from "../components/Reveal";

import "./Contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] =
    useState(initialFormData);

  const [formErrors, setFormErrors] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

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
      errors.name =
        "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      errors.email =
        "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message =
        "Please enter your message.";
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
    <section
      className="contact"
      id="contact"
    >
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="section-label">
              Contact & Location
            </span>

            <h2 className="section-title">
              Plan your visit or send us an enquiry
            </h2>

            <p className="section-description">
              Contact Brew & Bloom for menu enquiries,
              group seating, availability, or general
              assistance.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact__layout">
            <div className="contact__information">
              <div className="contact__card contact__card--primary">
                <span className="contact__card-label">
                  Visit Brew & Bloom
                </span>

                <h3>
                  A modern neighbourhood café experience in Delhi
                </h3>

                <p>
                  Brew & Bloom brings together
                  handcrafted coffee, fresh bakery
                  favourites, and a comfortable
                  environment designed for relaxed
                  everyday moments.
                </p>

                <div className="contact__actions">
                  <Button
                    href="#contact-form"
                    variant="light"
                  >
                    <FiMail />
                    Send an Enquiry
                  </Button>

                  <a
                    className="contact__whatsapp"
                    href="#contact-form"
                  >
                    <FiMessageCircle />
                    Message Us
                  </a>
                </div>
              </div>

              <div className="contact__details-grid">
                <article className="contact__detail-card">
                  <div className="contact__detail-icon">
                    <FiMapPin />
                  </div>

                  <div>
                    <h3>Location</h3>
                    <p>Delhi, India</p>
                  </div>
                </article>

                <article className="contact__detail-card">
                  <div className="contact__detail-icon">
                    <FiPhone />
                  </div>

                  <div>
                    <h3>Contact</h3>
                    <p>+91 XXXXX XXXXX</p>
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

                  <h3>
                    Serving Customers Across Delhi
                  </h3>

                  <p>
                    A modern café concept focused on
                    quality coffee, fresh bakery
                    offerings, and a welcoming customer
                    experience.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Delhi%2C%20India"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore Location
                  </a>
                </div>
              </div>
            </div>

            <div
              className="contact__form-wrapper"
              id="contact-form"
            >
              <div className="contact__form-heading">
                <span>
                  Send an Enquiry
                </span>

                <h3>
                  How can we help?
                </h3>

                <p>
                  Complete the form below to
                  demonstrate the enquiry workflow
                  of the website.
                </p>
              </div>

              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact__field">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={
                      Boolean(formErrors.name)
                    }
                  />

                  {formErrors.name && (
                    <span className="contact__error">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={
                      Boolean(formErrors.email)
                    }
                  />

                  {formErrors.email && (
                    <span className="contact__error">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us how we can assist you"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={
                      Boolean(formErrors.message)
                    }
                  />

                  {formErrors.message && (
                    <span className="contact__error">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="contact__submit"
                >
                  <FiSend />
                  Send Enquiry
                </Button>

                {submitted && (
                  <div
                    className="contact__success"
                    role="status"
                    aria-live="polite"
                  >
                    Thank you. Your enquiry has been
                    recorded for this demonstration.
                  </div>
                )}

                <p className="contact__form-note">
                  This is a demonstration enquiry form
                  created for the project presentation.
                  No personal information is stored or
                  transmitted.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;