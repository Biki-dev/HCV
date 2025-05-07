import React from "react";
import { Link } from "react-router-dom";
import './chapter.css';

const chapters = [
  // Class 11
  { id: 1, name: 'INTRODUCTION TO PHYSICS' },
  { id: 2, name: 'PHYSICS AND MATHEMATICS' },
  { id: 3, name: 'Forces' },
  { id: 4, name: 'Work, Energy and Power' },
  { id: 5, name: 'Motion of System of Particles and Rigid Body' },
  { id: 6, name: 'Gravitation' },
  { id: 7, name: 'Properties of Bulk Matter' },
  { id: 8, name: 'Thermodynamics' },
  { id: 9, name: 'Behaviour of Perfect Gas and Kinetic Theory' },
  { id: 10, name: 'Oscillations' },
  { id: 11, name: 'Waves' },

  // Class 12
  { id: 12, name: 'Electrostatics' },
  { id: 13, name: 'Current Electricity' },
  { id: 14, name: 'Magnetic Effects of Current and Magnetism' },
  { id: 15, name: 'Electromagnetic Induction and Alternating Currents' },
  { id: 16, name: 'Electromagnetic Waves' },
  { id: 17, name: 'Optics' },
  { id: 18, name: 'Dual Nature of Matter and Radiation' },
  { id: 19, name: 'Atoms and Nuclei' },
  { id: 20, name: 'Electronic Devices' }
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
         <Link to={`/question/${chapter.id}`}>
  <button className="start-quiz-btn">Start Quiz</button>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;