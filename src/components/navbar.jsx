import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
  <Link to="/" className="title">
    <span className="full-text">HC Verma Quiz</span>
    <span className="short-text">HCV</span>
  </Link>
</div>
      <div className="navbar-center">
        <Link to="/" className="a">Home</Link>
        <Link to="/chapter"className="a" >Chapters</Link>
        <Link to="/mock" className="a">Mock</Link>
      </div>
      <div className="navbar-right">
<a href="https://www.instagram.com/naru.tobik1" target="_blank" rel="noopener noreferrer">
  <button>Instagram</button>
</a>
      </div>
    </nav>
  );
};

export default Navbar;