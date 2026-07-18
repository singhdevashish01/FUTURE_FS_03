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
      "Bakery items and café favourites are prepared in small batches to maintain freshness throughout the day.",
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
      "Customers receive attentive support for menu choices, seating requirements, and general enquiries.",
  },
  {
    icon: <FiStar />,
    title: "Customer Focused",
    description:
      "The overall experience is designed around clarity, convenience, comfort, and consistent service.",
  },
];

const standards = [
  "Fresh ingredients selected carefully",
  "Clear menu and transparent pricing",
  "Comfortable seating and clean interiors",
  "Easy enquiry and contact options",
];

function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us__intro">
          <div className="why-us__content">
            <span className="section-label">Why Choose Us</span>

            <h2 className="section-title">
              A dependable café experience designed around comfort and quality
            </h2>

            <p className="section-description">
              Brew & Bloom combines thoughtful service, clear offerings, and a
              welcoming environment to make every visit simple and enjoyable.
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
                Our Service Approach
              </span>

              <strong>Simple</strong>

              <div className="why-us__stars" aria-hidden="true">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>
                A straightforward café experience built around freshness,
                comfort, clarity, and attentive customer service.
              </p>
            </div>

            <div className="why-us__summary-grid">
              <div>
                <strong>Fresh</strong>
                <span>Prepared Daily</span>
              </div>

              <div>
                <strong>Clear</strong>
                <span>Menu & Pricing</span>
              </div>

              <div>
                <strong>7 Days</strong>
                <span>Open Weekly</span>
              </div>

              <div>
                <strong>Direct</strong>
                <span>Enquiry Support</span>
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