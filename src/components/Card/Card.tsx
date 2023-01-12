import { FC } from "react";
import "./Card.styles.css";

interface Dish {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Card: FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={dish.image} alt={dish.title} />
      <div className="card-header">
        <h2 className="card-title">{dish.title}</h2>
        <h2 className="card-price">{`$${dish.price}`}</h2>
      </div>
      <p className="card-description">{dish.description}</p>
      <button className="card-button">Order a delivery</button>
    </div>
  );
};

export default Card;
