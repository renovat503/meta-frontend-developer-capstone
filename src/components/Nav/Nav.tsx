import { NavLink } from "react-router-dom";
import "./Nav.styles.css";

const Nav = () => {
  return (
    <nav>
      <img src="/logo.svg" alt="Little Lemon" />
      <ul>
        <li>
          <NavLink to="/">
            <a href="/">Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <a href="/about">About</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <a href="/blog">Menu</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations">
            <a href="/reservations">Reservations</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online">
            <a href="/order-online">Order Online</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <a href="/login">Login</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
