import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Chapter from './pages/chapter.jsx';
import Question from './pages/question.jsx'; // This stays
import Mock from './pages/mock.jsx';
import About from './pages/about.jsx';
import Contect from './pages/contect.jsx';
import Terms from './pages/terms.jsx';

function App() {
  return (
    <MathJaxContext>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/question/:chapterId" element={<Question />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
      <Footer />
    </Router>
     </MathJaxContext>
  );
}

export default App;