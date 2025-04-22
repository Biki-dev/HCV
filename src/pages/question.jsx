import React, { useState } from 'react';
import './question.css';

const Question = () => {
  const [answer, setAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const handleNext = () => {
    setShowSolution(true);
  };

  return (
    <div className="quiz-container">
      <div className="breadcrumb">
        <span>Chapters</span> &gt; <span>Quiz</span>
      </div>

      <div className="question-section">
        <h2>Question 1</h2>
        <p className="question-text">What is the SI unit of force?</p>
        <div className="answer-box">
          <label htmlFor="answer">Your Answer</label>
          <div className="input-wrapper">
            <input
              id="answer"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer"
            />
          </div>
        </div>

        <div className="buttons">
          <button className="next-btn" onClick={handleNext}>Next</button>
          <button className="skip-btn">Skip</button>
        </div>

        {showSolution && (
          <div className="solution-box">
            <h4>Solution:</h4>
            <p>The SI unit of force is <strong>Newton (N)</strong>.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;