import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left"><Link to="/" className="tital">HC Verma Quiz</Link></div>
      <div className="navbar-center">
        <Link to="/"><a>Home</a></Link>
        <Link to="/chapter"><a>Chapters</a></Link>
        <Link to="/mock"><a>Mock</a></Link>
      </div>
      <div className="navbar-right">
        <button>Instagram</button>
      </div>
    </nav>
  );
};

export default Navbar;