import heroCafe from "../assets/images/hero-cafe.jpg";
import coffee from "../assets/images/coffee.jpg";
import bakery from "../assets/images/bakery.jpg";
import interior from "../assets/images/interior.jpg";
import breakfast from "../assets/images/breakfast.jpg";
import dessert from "../assets/images/dessert.jpg";

import Reveal from "../components/Reveal";

import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    image: heroCafe,
    title: "A Warm Welcome",
    description:
      "A café atmosphere designed for relaxed visits.",
    className: "gallery__item--large",
    alt: "Warm café interior and seating area",
  },
  {
    id: 2,
    image: coffee,
    title: "Crafted Coffee",
    description:
      "Carefully prepared drinks for every part of the day.",
    className: "",
    alt: "Freshly prepared cappuccino on a café table",
  },
  {
    id: 3,
    image: bakery,
    title: "Fresh Bakes",
    description:
      "Bakery favourites prepared for everyday indulgence.",
    className: "gallery__item--wide",
    alt: "Fresh pastries and croissants displayed in a bakery counter",
  },
  {
    id: 4,
    image: breakfast,
    title: "Slow Mornings",
    description:
      "Breakfast, coffee, and a comfortable start to the day.",
    className: "",
    alt: "Breakfast plate and coffee on a wooden café table",
  },
  {
    id: 5,
    image: dessert,
    title: "Something Sweet",
    description:
      "Desserts designed to complete the café experience.",
    className: "gallery__item--tall",
    alt: "Desserts and pastries displayed in a café counter",
  },
  {
    id: 6,
    image: interior,
    title: "Your Everyday Space",
    description:
      "A neighbourhood setting for work, meetings, and conversations.",
    className: "",
    alt: "Modern café interior with natural light and seating",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <Reveal>
          <div className="gallery__header">
            <div>
              <span className="section-label">
                Inside Brew & Bloom
              </span>

              <h2 className="section-title">
                A closer look at the experience behind every visit
              </h2>
            </div>

            <p className="section-description">
              From morning coffee to fresh bakes and
              relaxed interiors, every detail is
              designed to make the café feel familiar,
              comfortable, and easy to return to.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className={`gallery__item ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <div className="gallery__overlay">
                  <div className="gallery__content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Gallery;