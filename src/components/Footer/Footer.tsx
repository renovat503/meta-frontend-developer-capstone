import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer-background">
      <div className="footer-container">
        <img src="/logo.svg" alt="Little Lemon logo" />
        <div className="footer-content">
          <div>
            <h5>Doormat Navigation</h5>
            <ul>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Reservations</p>
              <p>Order Online</p>
              <p>Login</p>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <p>96 Chicago Street, Chicago US</p>
              <p>+212 678 789 067</p>
              <p>adrian@little.lemon.com</p>
            </ul>
          </div>
          <div>
            <h5>Social Media Links</h5>
            <ul>
              <p>facebook</p>
              <p>twitter</p>
              <p>instagram</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
