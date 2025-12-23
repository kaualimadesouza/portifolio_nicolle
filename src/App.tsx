import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
