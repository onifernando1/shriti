import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/news">News</Link>
      <Link to="/workshops">Workshops</Link>
    </>
  );
}

export default Navbar;
