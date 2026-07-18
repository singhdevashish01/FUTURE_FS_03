import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card__visual">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />

        {item.badge && (
          <span className="menu-card__badge">{item.badge}</span>
        )}

        {item.vegetarian && (
          <span
            className="menu-card__veg"
            title="Vegetarian"
            aria-label="Vegetarian"
          >
            ●
          </span>
        )}
      </div>

      <div className="menu-card__content">
        <div className="menu-card__top">
          <span className="menu-card__category">
            {item.category}
          </span>

          <span className="menu-card__price">
            ₹{item.price}
          </span>
        </div>

        <h3>{item.name}</h3>

        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default MenuCard;