import Button from "../components/Button";
import heroCafe from "../assets/images/hero-cafe.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            Crafted Coffee • Fresh Bakes • Relaxed Moments
          </span>

          <h1>
            A café experience made for
            <span> slow mornings and good conversations.</span>
          </h1>

          <p className="hero__description">
            Brew & Bloom brings together handcrafted coffee, fresh bakery
            favourites, and a warm neighbourhood atmosphere designed for
            everyday moments worth enjoying.
          </p>

          <div className="hero__buttons">
            <Button href="#menu">
              Explore Our Menu
            </Button>

            <Button href="#contact" variant="secondary">
              Plan Your Visit
            </Button>
          </div>

          <div className="hero__features">
            <div>
              <span>01</span>
              <p>
                <strong>Freshly Prepared</strong>
                Coffee and bakery favourites made with care.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>Comfortable Space</strong>
                Designed for work, meetings, and relaxed visits.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <strong>Open All Week</strong>
                A convenient café experience throughout the week.
              </p>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              src={heroCafe}
              alt="Warm and welcoming Brew & Bloom café interior"
              className="hero__main-image"
            />

            <div className="hero__floating-card hero__floating-card--top">
              <span>Fresh Daily</span>
              <strong>Made for the moment</strong>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <span>Delhi, India</span>
              <strong>Your neighbourhood café</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Discover more</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;