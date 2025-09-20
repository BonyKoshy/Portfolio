// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur';
import Hero from './components/Hero/Hero';
import About from './components/About/About'; // Import the new About component
import SectionTitle from './components/SectionTitle/SectionTitle'; // 1. Import the new component

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

  useEffect(() => {
    const updateDotColors = () => {
      const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
      const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      setDotColors({ base, active });
    };
    updateDotColors();
  }, [theme]);

  return (
    <>
      <div className="app-background">
        {dotColors.base && dotColors.active && (
          <DotGrid
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

      <main className="app-content">
        <Hero />

        <About />


        {/* --- CHANGE: Use the new SectionTitle component --- */}
        <section id="about" className="content-section">
          <SectionTitle title="About" />
          {/* You can add the rest of your "About" content here */}
        </section>
        <section id="projects" className="content-section">
          <SectionTitle title="Projects" />
          {/* You can add the rest of your "Projects" content here */}
        </section>
        <section id="contact" className="content-section">
          <SectionTitle title="Contact" />
          {/* You can add the rest of your "Contact" content here */}
        </section>
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