import "./About.styles.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Little Lemon is a charming neighborhood bistro that serves simple food
          <br />
          and classic cocktails in a lively but casual environment.
          <br />
          The restaurant features a locally sourced menu with daily specials.
        </p>
      </section>
      <div className="about-images">
        <img
          className="about-image-a"
          src="/mario-adrian-a.jpg"
          alt="Mario & Adrian"
        />
        <img
          className="about-image-b"
          src="/mario-adrian-b.jpg"
          alt="Mario & Adrian"
        />
      </div>
    </div>
  );
};

export default About;
