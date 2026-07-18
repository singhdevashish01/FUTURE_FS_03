import {
  FiCoffee,
  FiHeart,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

import interiorImage from "../assets/images/interior.jpg";
import "./About.css";

const highlights = [
  {
    icon: <FiCoffee />,
    title: "Thoughtfully Crafted",
    description:
      "Coffee, beverages, and fresh bakery favourites prepared with consistency and care.",
  },
  {
    icon: <FiHeart />,
    title: "Warm by Design",
    description:
      "An inviting atmosphere created around comfort, conversation, and everyday moments.",
  },
  {
    icon: <FiUsers />,
    title: "Made for Everyone",
    description:
      "A flexible café space suited for solo visits, casual meetings, friends, and families.",
  },
  {
    icon: <FiMapPin />,
    title: "Delhi Based",
    description:
      "A neighbourhood café concept positioned around accessibility and convenience.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__main">
          <div className="about__visual">
            <div className="about__image-frame">
              <img
                src={interiorImage}
                alt="Warm modern café interior with natural light"
              />
            </div>

            <div className="about__experience-card">
              <span>Designed Around</span>
              <strong>Comfort</strong>
              <p>A relaxed space for everyday moments.</p>
            </div>
          </div>

          <div className="about__content">
            <span className="section-label">Our Story</span>

            <h2 className="section-title">
              More than a coffee stop. A place designed to feel familiar.
            </h2>

            <p>
              Brew & Bloom is built around a simple idea: good coffee and fresh
              food feel better when the environment around them feels equally
              thoughtful.
            </p>

            <p>
              The café concept combines warm interiors, approachable service,
              and carefully presented offerings to create a space suitable for
              quick visits, quiet work, and conversations that last a little
              longer.
            </p>

            <div className="about__quote">
              <span>“</span>

              <p>
                A neighbourhood café should feel effortless to visit and easy
                to return to.
              </p>
            </div>
          </div>
        </div>

        <div className="about__highlights">
          {highlights.map((item) => (
            <article className="about__highlight-card" key={item.title}>
              <div className="about__highlight-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;