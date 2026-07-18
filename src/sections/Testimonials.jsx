import {
  FiCoffee,
  FiMessageCircle,
  FiSmile,
  FiUsers,
} from "react-icons/fi";

import TestimonialCard from "../components/TestimonialCard";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sample Customer",
    initials: "SC",
    details: "Demonstration Review",
    rating: 5,
    review:
      "A calm café environment with a clear menu, comfortable seating, and a simple overall customer experience.",
  },
  {
    id: 2,
    name: "Sample Visitor",
    initials: "SV",
    details: "Demonstration Review",
    rating: 5,
    review:
      "The concept focuses well on convenience, freshness, and an easy-to-understand presentation of food and beverages.",
  },
  {
    id: 3,
    name: "Sample Guest",
    initials: "SG",
    details: "Demonstration Review",
    rating: 5,
    review:
      "The website makes it easy to understand the café offerings, opening hours, location, and enquiry options before visiting.",
  },
];

const trustMetrics = [
  {
    icon: <FiCoffee />,
    value: "Fresh",
    label: "Prepared Daily",
  },
  {
    icon: <FiUsers />,
    value: "Comfort",
    label: "Welcoming Space",
  },
  {
    icon: <FiMessageCircle />,
    value: "Direct",
    label: "Enquiry Support",
  },
  {
    icon: <FiSmile />,
    value: "Simple",
    label: "Customer Experience",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Customer Experience</span>

          <h2 className="section-title">
            Designed to create a clear and welcoming customer journey
          </h2>

          <p className="section-description">
            The website presents sample customer perspectives to demonstrate how
            social proof and trust-building content can support a local café.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        <div className="testimonials__metrics">
          {trustMetrics.map((metric) => (
            <div className="testimonials__metric" key={metric.label}>
              <div className="testimonials__metric-icon">
                {metric.icon}
              </div>

              <div>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="testimonials__disclaimer">
          Sample testimonials are included for project presentation purposes
          only and should be replaced with verified customer reviews before
          production use.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;