import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import { useState, setState } from "react";

function Navbar() {
  const [navbarReveal, setNavbarReveal] = useState(false);
  const showNavbar = () => {
    setNavbarReveal(true);
  };

  const hideNavbar = () => {
    if (navbarReveal == true) {
      setNavbarReveal(false);
    }
  };
  return (
    <>
      <div className="navbar" onClick={hideNavbar}>
        <div className="navbar-container">
          <div className="logo">Shriti Fernando</div>
          <div className="hamburger-lines" onClick={showNavbar}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {navbarReveal ? (
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">My story</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/news">News</Link>
              <Link to="/workshops">Workshops</Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Navbar;
