import Button from "../components/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__tag">
            Premium Coffee • Fresh Bakery • Cozy Ambience
          </span>

          <h1>
            Your Neighborhood Café for
            <span> Great Coffee & Fresh Bakes</span>
          </h1>

          <p>
            Brew & Bloom brings together handcrafted coffee, freshly baked
            delights, and a welcoming atmosphere designed for relaxed visits,
            casual meetings, and everyday moments.
          </p>

          <div className="hero__buttons">
            <Button href="#menu">
              Explore Menu
            </Button>

            <Button href="#contact" variant="secondary">
              Visit Us
            </Button>
          </div>

          <div className="hero__stats">
            <div>
              <h3>Fresh</h3>
              <p>Prepared Daily</p>
            </div>

            <div>
              <h3>Variety</h3>
              <p>Across Multiple Categories</p>
            </div>

            <div>
              <h3>7 Days</h3>
              <p>Open Throughout the Week</p>
            </div>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-card">
            ☕
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;