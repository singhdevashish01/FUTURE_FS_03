import { FiStar } from "react-icons/fi";
import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div
        className="testimonial-card__rating"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <FiStar
            key={index}
            className={
              index < testimonial.rating
                ? "testimonial-card__star testimonial-card__star--filled"
                : "testimonial-card__star"
            }
          />
        ))}
      </div>

      <p className="testimonial-card__quote">
        “{testimonial.review}”
      </p>

      <div className="testimonial-card__customer">
        <div className="testimonial-card__avatar">
          {testimonial.initials}
        </div>

        <div>
          <h3>{testimonial.name}</h3>
          <span>{testimonial.details}</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;