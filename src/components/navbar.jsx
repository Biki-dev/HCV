import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">HC Verma Quiz</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Chapters</a></li>
          <li><a href="#">Leaderboard</a></li>
        </ul>
        <button className="login-btn">Login/Signup</button>
      </nav>
    </header>
  );
};

export default Navbar;