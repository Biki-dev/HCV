import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
     <footer className="footer">
  <div className="links">
    <Link to="/about" className="a">about</Link>
    <Link to="/contect" className="a">contect</Link>
    <Link to="/terms" className="a">terms</Link>
  </div>
  <p>&copy; 2025 HC Verma Quiz. All rights reserved.</p>
</footer>

  );
};

export default Footer;