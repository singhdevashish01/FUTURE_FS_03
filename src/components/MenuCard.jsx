import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card__visual">
        <span className="menu-card__icon" aria-hidden="true">
          {item.icon}
        </span>

        {item.badge && (
          <span className="menu-card__badge">{item.badge}</span>
        )}
      </div>

      <div className="menu-card__content">
        <div className="menu-card__heading">
          <div>
            <span className="menu-card__category">{item.category}</span>
            <h3>{item.name}</h3>
          </div>

          <span className="menu-card__price">₹{item.price}</span>
        </div>

        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default MenuCard;