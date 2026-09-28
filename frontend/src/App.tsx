import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollyNavigation from './components/ScrollyNavigation';
import Footer from './components/Footer';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [introState, setIntroState] = useState<'fullscreen' | 'transitioning' | 'completed'>('fullscreen');

  return (
    <Router>
      <div className="bg-obsidian min-h-screen text-cream selection:bg-indigo-100 selection:text-indigo-900 flex flex-col justify-between">
        {/* Custom Interactive Cursor */}
        <CustomCursor />

        {/* Instant Scroll Reset on Route Transition */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <ScrollyNavigation introState={introState} />

        {/* Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage introState={introState} setIntroState={setIntroState} />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
