import {
  FiAward,
  FiMessageCircle,
  FiRefreshCw,
  FiUsers,
} from "react-icons/fi";

import TestimonialCard from "../components/TestimonialCard";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    initials: "AM",
    details: "Regular Customer",
    rating: 5,
    review:
      "The atmosphere is calm, the coffee is consistently good, and the staff are attentive without being intrusive. It has become my preferred place for casual meetings.",
  },
  {
    id: 2,
    name: "Riya Sharma",
    initials: "RS",
    details: "Local Resident",
    rating: 5,
    review:
      "The bakery items always feel fresh, and the menu has enough variety without being confusing. The service is quick and the space is very comfortable.",
  },
  {
    id: 3,
    name: "Kunal Verma",
    initials: "KV",
    details: "Weekend Visitor",
    rating: 5,
    review:
      "A reliable neighbourhood café with good coffee, clean interiors, and clear pricing. The staff also helped us arrange seating for a small group.",
  },
];

const trustMetrics = [
  {
    icon: <FiUsers />,
    value: "500+",
    label: "Customers Served",
  },
  {
    icon: <FiRefreshCw />,
    value: "68%",
    label: "Repeat Visitors",
  },
  {
    icon: <FiMessageCircle />,
    value: "4.8/5",
    label: "Average Rating",
  },
  {
    icon: <FiAward />,
    value: "5+ Years",
    label: "Local Experience",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Customer Reviews</span>

          <h2 className="section-title">
            Trusted by customers who value quality and comfort
          </h2>

          <p className="section-description">
            Positive customer experiences help build confidence and make it
            easier for new visitors to choose Brew & Bloom.
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
          Demonstration content shown for project presentation. Replace with
          verified customer reviews and business statistics before production
          use.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;