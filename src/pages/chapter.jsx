import React, { useState } from "react";
import { Link } from "react-router-dom";
import './chapter.css';

const chapters = [
  // Class 11
  { id: 1, name: 'Physical World' },
  { id: 2, name: 'Units & Measurement' },
  { id: 3, name: 'Straight Line' },
  { id: 4, name: 'Motion in a Plane' },
  { id: 5, name: 'Laws of Motion' },
  { id: 6, name: 'WPE' },
  { id: 7, name: 'Rotational Motion' },
  { id: 8, name: 'Gravitation' },
  { id: 9, name: 'Properties of Solids' },
  { id: 10, name: 'Properties of Fluids' },
  { id: 11, name: 'Properties of Matter' },
  { id: 12, name: 'Thermo' },
  { id: 13, name: 'KTG' },
  { id: 14, name: 'Oscillations' },
  { id: 15, name: 'Waves' },

  // Class 12
  { id: 16, name: 'Electric Charges and Fields' },
  { id: 17, name: 'Potential and Capacitance' },
  { id: 18, name: 'Current Electricity' },
  { id: 19, name: 'Moving Charges and Magnetism' },
  { id: 20, name: 'Magnetism and Matter' },
  { id: 21, name: 'EMI' },
  { id: 22, name: 'AC' },
  { id: 23, name: 'EMW' },
  { id: 24, name: 'Ray Optics' },
  { id: 25, name: 'Wave Optics' },
  { id: 26, name: 'Dual Nature' },
  { id: 27, name: 'Atoms' },
  { id: 28, name: 'Nuclei' },
  { id: 29, name: 'Semi conductor' }
];

const Chapter = () => {
  return (
    <div className="chapter-container">
      <h1 className="chapter-title">Choose a Chapter to Begin</h1>
      <div className="chapter-grid">
        {chapters.map((chapter) => (
          <div className="chapter-card" key={chapter.id}>
            <div className="chapter-icon"></div>
            <h3 className="chapter-name">{chapter.name}</h3>
            <p className="chapter-number">Chapter {chapter.id}</p>
          <Link to="/question"><button className="start-quiz-btn">Start Quiz</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;