import { NavLink } from "react-router-dom";
import "./Hero.styles.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-description">
          We are a family owned <br />
          Mediterranean restaurant, <br />
          focused on traditional <br />
          recipes served with a modern <br />
          twist.
        </p>
        <NavLink to="/booking">
          <button className="hero-button">Reserve a Table</button>
        </NavLink>
      </section>
      <img className="hero-image" src="/restaurant-food.jpg" alt="Hero" />
    </div>
  );
};

export default Hero;
