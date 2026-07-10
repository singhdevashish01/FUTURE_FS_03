import {
  FiClock,
  FiCoffee,
  FiHeart,
  FiShield,
  FiSmile,
  FiStar,
} from "react-icons/fi";

import "./WhyChooseUs.css";

const benefits = [
  {
    icon: <FiCoffee />,
    title: "Consistent Quality",
    description:
      "Every drink and food item follows a clear preparation standard to maintain taste, freshness, and presentation.",
  },
  {
    icon: <FiClock />,
    title: "Freshly Prepared",
    description:
      "Bakery items and café favourites are prepared in small batches to keep the menu fresh throughout the day.",
  },
  {
    icon: <FiSmile />,
    title: "Comfortable Experience",
    description:
      "The café is designed for casual meetings, individual work, family visits, and relaxed conversations.",
  },
  {
    icon: <FiShield />,
    title: "Hygiene Focused",
    description:
      "Clean preparation areas, responsible handling practices, and regular maintenance support a dependable experience.",
  },
  {
    icon: <FiHeart />,
    title: "Personal Service",
    description:
      "Customers receive attentive support for menu choices, seating requirements, and special requests.",
  },
  {
    icon: <FiStar />,
    title: "Customer Trusted",
    description:
      "Positive feedback, repeat visits, and word-of-mouth recommendations reflect the value delivered consistently.",
  },
];

const standards = [
  "Fresh ingredients sourced carefully",
  "Clear menu and transparent pricing",
  "Comfortable seating and clean interiors",
  "Direct phone and WhatsApp support",
];

function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us__intro">
          <div className="why-us__content">
            <span className="section-label">Why Choose Us</span>

            <h2 className="section-title">
              A dependable local café experience designed around customer comfort
            </h2>

            <p className="section-description">
              Brew & Bloom combines product quality, thoughtful service, and a welcoming environment to make every visit convenient and enjoyable.
            </p>

            <ul className="why-us__standards">
              {standards.map((standard) => (
                <li key={standard}>
                  <span>✓</span>
                  {standard}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-us__summary">
            <div className="why-us__summary-main">
              <span className="why-us__summary-label">
                Customer Experience
              </span>

              <strong>4.8</strong>

              <div className="why-us__stars" aria-label="4.8 out of 5 stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>
                Based on customer feedback, repeat visits, and local recommendations.
              </p>
            </div>

            <div className="why-us__summary-grid">
              <div>
                <strong>500+</strong>
                <span>Customers Served</span>
              </div>

              <div>
                <strong>30+</strong>
                <span>Menu Options</span>
              </div>

              <div>
                <strong>7 Days</strong>
                <span>Open Weekly</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Years of Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us__grid">
          {benefits.map((benefit) => (
            <article className="why-us__card" key={benefit.title}>
              <div className="why-us__icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;