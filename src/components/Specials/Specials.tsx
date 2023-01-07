import { useMemo } from "react";
import { Card } from "components";
import "./Specials.styles.css";

const specials = [
  {
    id: "greek-salad",
    image: "/greek-salad.jpg",
    title: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: "bruchetta",
    image: "/bruchetta.svg",
    title: "Bruchetta",
    price: 5.89,
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: "lemon-dessert",
    image: "/lemon-dessert.jpg",
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from my grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  const cards = useMemo(() => {
    return specials.map((dish) => <Card key={dish.id} dish={dish} />);
  }, []);

  return (
    <section className="specials-container">
      <div className="specials-header">
        <h1 className="specials-title">This weeks specials!</h1>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="specials-grid">{cards}</div>
    </section>
  );
};

export default Specials;
