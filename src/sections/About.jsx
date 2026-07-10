import {
  FiCoffee,
  FiHeart,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

import "./About.css";

const highlights = [
  {
    icon: <FiCoffee />,
    title: "Handcrafted Quality",
    description:
      "Every beverage and bakery item is prepared with carefully selected ingredients and consistent attention to quality.",
  },
  {
    icon: <FiHeart />,
    title: "Made with Care",
    description:
      "From fresh bakes to signature coffee, every order is prepared to create a warm and memorable customer experience.",
  },
  {
    icon: <FiUsers />,
    title: "Community Focused",
    description:
      "We are designed to be more than a café—a welcoming neighbourhood space for conversations, work, and celebrations.",
  },
  {
    icon: <FiMapPin />,
    title: "Conveniently Located",
    description:
      "Our accessible location, clear timings, and direct contact options make planning a visit simple and convenient.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__main">
          <div className="about__visual">
            <div className="about__visual-large">
              <span className="about__visual-icon">☕</span>

              <div className="about__visual-content">
                <strong>Freshly Brewed</strong>
                <span>Every cup, every day</span>
              </div>
            </div>

            <div className="about__experience-card">
              <strong>5+</strong>
              <span>Years of serving our community</span>
            </div>

            <div className="about__quality-card">
              <span>Fresh</span>
              <strong>Daily</strong>
            </div>
          </div>

          <div className="about__content">
            <span className="section-label">Our Story</span>

            <h2 className="section-title">
              A welcoming café built around flavour, comfort, and community
            </h2>

            <p>
              Brew & Bloom Café was created to offer a comfortable local space where customers can enjoy thoughtfully prepared coffee, fresh bakery products, and meaningful moments.
            </p>

            <p>
              Our focus is simple: maintain consistent quality, provide attentive service, and create an environment that feels suitable for a quick coffee break, a casual meeting, or time with friends and family.
            </p>

            <div className="about__quote">
              <span>“</span>

              <p>
                We believe a good café should offer more than a menu. It should give people a reason to return.
              </p>
            </div>
          </div>
        </div>

        <div className="about__highlights">
          {highlights.map((item) => (
            <article className="about__highlight-card" key={item.title}>
              <div className="about__highlight-icon">{item.icon}</div>

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