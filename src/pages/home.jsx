import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Master HC Verma Chapter-wise with Quizz format</h1>
        <p>Answer, Learn, and Level Up Your Physics</p>
        <Link to="/chapter"><button className="start-btn">Chapters</button></Link>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>30,000+ Questions</h3>
            <p>Extensive question bank for every chapter</p>
          </div>
          <div className="card">
            <h3>Chapter Quizzes</h3>
            <p>Practice by chapter for focused learning</p>
          </div>
          <div className="card">
            <h3>Instant Feedback</h3>
            <p>Know your answers right away</p>
          </div>
          <div className="card">
            <h3>Explanations</h3>
            <p>Detailed solutions for every question</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;