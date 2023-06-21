import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="hamburger-lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">My story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/news">News</Link>
            <Link to="/workshops">Workshops</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
