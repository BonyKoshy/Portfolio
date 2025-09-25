// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Component Imports
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import CertificatesList from './components/CertificatesList/CertificatesList';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy';


function AppContent() {

  useEffect(() => {
    console.log("%cHello, curious developer!", "color: #4597ff; font-size: 20px; font-weight: bold;");
    console.log("%cThanks for checking out my portfolio's code. Feel free to connect with me on LinkedIn!", "color: #4597ff; font-size: 18px; font-weight: italics;");
  }, []);

  const { theme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

  useEffect(() => {
    
    const updateDotColors = () => {
      setTimeout(() => {
        const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        setDotColors({ base, active });
      }, 100);
    };
    updateDotColors();
  }, [theme]);

  return (
    <>
      <div className="app-background">
        {dotColors.base && dotColors.active && (
          <DotGrid
            key={theme}
            dotSize={2}
            gap={30}
            baseColor={dotColors.base}
            activeColor={dotColors.active}
            proximity={120}
            shockRadius={200}
            shockStrength={0.3}
            resistance={800}
            returnDuration={0.7}
          />
        )}
      </div>

      <Header />

      <GradualBlur
        preset="header"
        target="page"
        strength={3}
        height="120px"
        zIndex={999}
      />

      <main>
        <div className="content-wrapper">
            <Hero />
            <About />
            <CertificatesList />
            <Projects />
        </div>

        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;