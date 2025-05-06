import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MathJax } from "better-react-mathjax";
import './question.css';

const Question = () => {
  const { chapterId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapterName, setChapterName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    fetch(`https://hcv-1.onrender.com/api/questions/${chapterId}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setQuestions(data);
        if (data.length > 0) {
          setChapterName(data[0].chapter);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [chapterId]);

  useEffect(() => {
    setShowSolution(!!selectedOptions[currentIndex]);
  }, [currentIndex, selectedOptions]);

  const handleOptionClick = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentIndex] = option;
    setSelectedOptions(updatedOptions);
    setShowSolution(true);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
  };

  if (loading) return <p id="load">Loading questions...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (questions.length === 0) return <p id="notfound">No questions found.</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div className="breadcrumb">{chapterName || `Chapter ${chapterId}`} Questions</div>

      <div className="question-section">
        {currentQuestion.questionText && (
          <div className="question-text">
            <strong>Q{currentIndex + 1}:</strong>{" "}
            <MathJax dynamic>{currentQuestion.questionText}</MathJax>
          </div>
        )}

        {currentQuestion.questionImage && typeof currentQuestion.questionImage === 'string' && (
          <img
            src={currentQuestion.questionImage}
            alt={`Question ${currentIndex + 1}`}
            style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
          />
        )}

        <div className="options">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className={`option-btn
                ${showSolution && opt === currentQuestion.correctAnswer ? 'correct' : ''}
                ${showSolution && selectedOptions[currentIndex] === opt && opt !== currentQuestion.correctAnswer ? 'wrong' : ''}
              `}
              onClick={() => handleOptionClick(opt)}
              disabled={showSolution}
            >
              <MathJax dynamic>{opt}</MathJax>
            </button>
          ))}
        </div>

        {showSolution && (
          <div className="solution-box">
            <h4>Solution:</h4>
            <MathJax dynamic>{currentQuestion.solutionText || 'No solution provided.'}</MathJax>
          </div>
        )}

        <div className="buttons">
          {currentIndex > 0 && (
            <button className="prev-btn" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentIndex < questions.length - 1 ? (
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          ) : (
            <p>You have reached the last question.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;