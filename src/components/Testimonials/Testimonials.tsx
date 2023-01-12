import { Rating } from "components";
import { useMemo } from "react";
import "./Testimonials.styles.css";

const persons = [
  {
    rating: "⭐⭐⭐⭐⭐",
    image: "",
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat.",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    image: "",
    name: "Samir Hamid",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat.",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    image: "",
    name: "Lionel White",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat.",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    image: "",
    name: "Jacqueline Francois",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat.",
  },
];

const Testimonials = () => {
  const ratings = useMemo(() => {
    return persons.map((person) => <Rating person={person} />);
  }, []);

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-grid">{ratings}</div>
    </div>
  );
};

export default Testimonials;
