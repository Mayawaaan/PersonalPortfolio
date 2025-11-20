import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Certifications from './components/Certifications';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import ProjectDetail from './pages/ProjectDetail';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const HomePage = () => (
  <>
    <div id='home' className='relative'>
      <HeroSection />
    </div>
    <div id='about'>
      <About />
    </div>
    <div id='certifications'>
      <Certifications />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    <div id='contact'>
      <Contact />
    </div>
  </>
);

const AppContent = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTopButton />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Preloader will be visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader key="preloader" /> : <AppContent key="app-content" />}
      </AnimatePresence>
    </Router>
  )
}

export default App