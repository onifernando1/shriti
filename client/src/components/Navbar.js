import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
        <Link to="/workshops">Workshops</Link>
      </div>
    </>
  );
}

export default Navbar;
