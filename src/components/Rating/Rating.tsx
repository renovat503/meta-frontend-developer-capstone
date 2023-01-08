import * as React from "react";
import "./Rating.styles.css";

interface Person {
  rating: string;
  image: string;
  name: string;
  testimonial: string;
}

const Rating: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div className="rating-container">
      <h1 className="rating">{person.rating}</h1>
      <div className="customer-info">
        <img className="customer-image" src={person.image} alt={person.image} />
        <h1 className="customer-name">{person.name}</h1>
      </div>
      <p className="rating-description">{person.testimonial}</p>
    </div>
  );
};

export default Rating;
