import React, { useState } from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
     <footer className="footer">
        <div className="links">
          <Link to="/about"><a>about</a></Link>
          <Link to="/contect"><a>contect</a></Link>
          <Link to="/terms"><a>terms</a></Link>
        </div>
        <p>&copy; 2024 HC Verma Quiz. All rights reserved.</p>
      </footer>

  );
};

export default Footer;