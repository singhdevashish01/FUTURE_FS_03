import {
  FiCoffee,
  FiHome,
  FiHeart,
  FiImage,
  FiSun,
  FiUsers,
} from "react-icons/fi";

import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Signature Coffee",
    description: "Handcrafted beverages prepared with care.",
    icon: <FiCoffee />,
    className: "gallery__item--large",
  },
  {
    id: 2,
    title: "Warm Interiors",
    description: "A comfortable space for work and conversations.",
    icon: <FiHome />,
    className: "",
  },
  {
    id: 3,
    title: "Fresh Bakery",
    description: "Daily bakes with balanced flavour and texture.",
    icon: <FiHeart />,
    className: "",
  },
  {
    id: 4,
    title: "Morning Moments",
    description: "A calm start with fresh coffee and breakfast.",
    icon: <FiSun />,
    className: "",
  },
  {
    id: 5,
    title: "Community Space",
    description: "Designed for friends, families, and local visitors.",
    icon: <FiUsers />,
    className: "gallery__item--wide",
  },
  {
    id: 6,
    title: "Everyday Experience",
    description: "Simple details that make each visit memorable.",
    icon: <FiImage />,
    className: "",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Gallery</span>

          <h2 className="section-title">
            A closer look at the Brew & Bloom experience
          </h2>

          <p className="section-description">
            From handcrafted beverages to welcoming interiors, every detail is designed to create a comfortable and memorable café experience.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`gallery__item ${item.className}`}
            >
              <div className={`gallery__background gallery__background--${index + 1}`}>
                <div className="gallery__overlay">
                  <div className="gallery__icon">{item.icon}</div>

                  <div className="gallery__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery__note">
          <span>Real Business Ready</span>

          <p>
            These visual placeholders can be replaced with original café photographs before the final client presentation and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;