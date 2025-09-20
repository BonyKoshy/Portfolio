import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur'; // 1. Import the new component

// This is the main content component that can access the theme context
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

      {/* 2. Add the GradualBlur component here */}
      <div
        style={{
          position: 'fixed',
          top: 0, // Align with the top of the viewport
          left: 0,
          right: 0,
          zIndex: 999, // Lower than header (1000), higher than content (1)
          pointerEvents: 'none', // Allow clicks to pass through
        }}
      >
        <GradualBlur
          target="page"
          position="top"
          height="6rem"
          strength={4}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>

      <main className="app-content">
        <section id="home" className="content-section">
          <h2>Home</h2>
        </section>
        <section id="about" className="content-section">
          <h2>About</h2>
        </section>
        <section id="projects" className="content-section">
          <h2>Projects</h2>
        </section>
        <section id="contact" className="content-section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

// The root App component just provides the theme context to its children.
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;