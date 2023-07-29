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
                    <div
                      className="close-navbar"
                      onClick={() => {
                        hideNavbar();
                        hideDropdown();
                      }}
                    >
                      X
                    </div>

                    {dropdownReveal ? null : (
                      <Link
                        onClick={hideNavbar}
                        className="home-top-link"
                        to="/"
                      >
                        home
                      </Link>
                    )}
                    <div
                      onClick={toggleDropdown}
                      className="mobile-portfolio-dropdown-container"
                    >
                      {dropdownReveal ? (
                        <div className="dropdown-portfolio-title reveal">
                          portfolio
                        </div>
                      ) : (
                        <div className="dropdown-portfolio-title">
                          portfolio
                        </div>
                      )}

                      {dropdownReveal ? (
                        <div className="down-arrow reveal">⌄</div>
                      ) : (
                        <div className="down-arrow">⌄</div>
                      )}
                    </div>
                    {dropdownReveal ? (
                      <>
                        <Link
                          to="/portfolio"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          all
                        </Link>
                        <Link
                          to="/abstract"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          abstract
                        </Link>
                        <Link
                          to="/seascape"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          seascape
                        </Link>
                        <Link
                          to="/landscape"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          landscape
                        </Link>
                        <Link
                          to="/nudes"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          nudes
                        </Link>
                        <Link
                          to="/dancers"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          dancers
                        </Link>
                        <Link
                          to="/cyclists"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          cyclists
                        </Link>

                        <Link
                          to="/littlepeople"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          little people
                        </Link>
                        <Link
                          to="/portrait"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          portrait
                        </Link>
                        <Link
                          to="/animals"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          animals
                        </Link>
                        <Link
                          to="/asian"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          asian
                        </Link>
                        <Link
                          to="/other"
                          onClick={() => {
                            hideNavbar();
                            toggleDropdown();
                          }}
                        >
                          other
                        </Link>
                      </>
                    ) : null}

                    {dropdownReveal ? null : (
                      <>
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
                      </>
                    )}
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
              <Link onMouseOver={hideDropdown} to="/">
                home
              </Link>
              <Link to="/portfolio">
                <div onMouseEnter={showDropdown} onClick={hideDropdown}>
                  portoflio
                </div>

                {dropdownReveal ? (
                  <>
                    <div onMouseLeave={hideDropdown} className="dropdown">
                      <div>
                        <Link to="/abstract" onClick={hideDropdown}>
                          abstract
                        </Link>
                      </div>
                      <div>
                        <Link to="/seascape" onClick={hideDropdown}>
                          seascape
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/landscape" onClick={hideDropdown}>
                          landscape
                        </Link>
                      </div>
                      <div>
                        <Link to="/nudes" onClick={hideDropdown}>
                          nudes
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/dancers" onClick={hideDropdown}>
                          dancers
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/cyclists" onClick={hideDropdown}>
                          cyclists
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/littlepeople" onClick={hideDropdown}>
                          little people
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/portrait" onClick={hideDropdown}>
                          portrait
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/animals" onClick={hideDropdown}>
                          animals
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/asian" onClick={hideDropdown}>
                          asian
                        </Link>
                      </div>{" "}
                      <div>
                        <Link to="/other" onClick={hideDropdown}>
                          other
                        </Link>
                      </div>{" "}
                    </div>
                  </>
                ) : null}
              </Link>
              <Link onMouseOver={hideDropdown} to="/about">
                my story
              </Link>
              <Link onMouseOver={hideDropdown} to="/contact">
                contact
              </Link>
              <Link onMouseOver={hideDropdown} to="/news">
                news
              </Link>
              <Link onMouseOver={hideDropdown} to="/workshops">
                workshops
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
