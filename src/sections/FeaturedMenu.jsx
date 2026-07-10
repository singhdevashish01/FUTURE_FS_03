import { useMemo, useState } from "react";

import MenuCard from "../components/MenuCard";
import Button from "../components/Button";

import {
  menuCategories,
  menuItems,
} from "../data/menuData";

import "./FeaturedMenu.css";

function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="featured-menu" id="menu">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Our Menu</span>

          <h2 className="section-title">
            Carefully prepared favourites for every part of your day
          </h2>

          <p className="section-description">
            Explore a balanced selection of handcrafted coffee, refreshing
            beverages, fresh bakery items, breakfast options, and desserts.
          </p>
        </div>

        <div
          className="featured-menu__filters"
          aria-label="Menu categories"
        >
          {menuCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "featured-menu__filter featured-menu__filter--active"
                  : "featured-menu__filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="featured-menu__grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="featured-menu__cta">
          <div>
            <span className="featured-menu__cta-label">
              Planning a visit?
            </span>

            <h3>
              Contact us for availability, group seating, or special requests.
            </h3>
          </div>

          <Button href="#contact">
            Contact the Café
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;