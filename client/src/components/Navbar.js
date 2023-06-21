import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import { useState, setState } from "react";
import { isMobile } from "react-device-detect";

function Navbar() {
  const [navbarReveal, setNavbarReveal] = useState(false);
  const [dropdownReveal, setDropdownReveal] = useState(false);

  const showNavbar = () => {
    setNavbarReveal(true);
  };

  const hideNavbar = () => {
    if (navbarReveal == true) {
      setNavbarReveal(false);
    }
  };

  const showDropdown = () => {
    if (dropdownReveal == false) {
      setDropdownReveal(true);
    }
  };

  const hideDropdown = () => {
    if (dropdownReveal == true) {
      setDropdownReveal(false);
    }
  };

  const toggleDropdown = () => {
    if (dropdownReveal == true) {
      setDropdownReveal(false);
    } else {
      setDropdownReveal(true);
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="navbar">
            <div className="navbar-container">
              <div className="hamburger-lines" onClick={showNavbar}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              {navbarReveal ? (
                <>
                  <div className="links">
                    <div className="close-navbar" onClick={hideNavbar}>
                      X
                    </div>
                    <Link onClick={hideNavbar} to="/">
                      home
                    </Link>
                    <div
                      onClick={toggleDropdown}
                      className="mobile-portfolio-dropdown-container"
                    >
                      <div className="dropdown-portfolio-title">portfolio</div>
                      <div className="down-arrow">⌄</div>
                    </div>
                    {dropdownReveal ? (
                      <>
                        <Link onClick={hideNavbar}>abstract</Link>
                        <Link onClick={hideNavbar}>landscape/seascape</Link>
                        <Link onClick={hideNavbar}>abstract</Link>
                      </>
                    ) : null}
                    <Link onClick={hideNavbar} to="/about">
                      my story
                    </Link>
                    <Link onClick={hideNavbar} to="/contact">
                      contact
                    </Link>
                    <Link onClick={hideNavbar} to="/news">
                      news
                    </Link>
                    <Link onClick={hideNavbar} to="/workshops">
                      workshops
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="pc-navbar-container">
            <div className="pc-logo">shriti fernando</div>
            <div className="pc-links">
              <Link to="/">home</Link>
              <Link to="/portfolio">
                <div onMouseEnter={showDropdown} onClick={hideDropdown}>
                  portoflio
                </div>

                {dropdownReveal ? (
                  <>
                    <div onMouseLeave={hideDropdown} className="dropdown">
                      <div>
                        <Link onClick={hideDropdown}>abstract</Link>
                      </div>
                      <div>
                        <Link onClick={hideDropdown}>landscape/seascape</Link>
                      </div>
                      <div>
                        <Link onClick={hideDropdown}>abstract</Link>
                      </div>
                    </div>
                  </>
                ) : null}
              </Link>
              <Link to="/about">my story</Link>
              <Link to="/contact">contact</Link>
              <Link to="/news">news</Link>
              <Link to="/workshops">workshops</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
