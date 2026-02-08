import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeToggle } from './components/ui';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Work = lazy(() => import('./pages/work'));
const Contact = lazy(() => import('./pages/contact'));
const ProjectDetail = lazy(() => import('./pages/project-detail'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ThemeToggle />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
