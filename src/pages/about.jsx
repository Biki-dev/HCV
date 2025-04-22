import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About This App</h1>
      <p className="about-text">
        This platform is designed to help students practice HC Verma Physics questions chapter-wise in a fun and interactive way.
      </p>
      <p className="about-text">
        You can answer questions, check your answers instantly, and view solutions for better understanding. Whether you're preparing for JEE, NEET, or just want to strengthen your Physics basics — this app is for you.
      </p>
      <p className="about-text">
        More features like Mock Tests and Performance Analysis are coming soon!
      </p>
    </div>
  );
};

export default About;