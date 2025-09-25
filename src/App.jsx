// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';

// Component Imports
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SectionTitle from './components/SectionTitle/SectionTitle';
import CertificatesList from './components/CertificatesList/CertificatesList';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact.jsx';


function AppContent() {
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

            <section id="certificates" className="content-section">
                <SectionTitle title="Certificates" />
                <CertificatesList />
            </section>

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
      <AppContent />
    </ThemeProvider>
  );
}

export default App;