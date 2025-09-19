// src/App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header'; // Import the new Header

function App() {
  return (
    <ThemeProvider>
      <div className="app-background">
        <DotGrid
          dotSize={2}
          gap={30}
          baseColor="var(--text-secondary)" /* Use theme variable */
          activeColor="var(--accent)"       /* Use theme variable */
          proximity={120}
          shockRadius={200}
          shockStrength={0.3}
          resistance={800}
          returnDuration={0.7}
        />
      </div>

      <Header />

      <main className="app-content">
        {/* Your sections will go here */}
        <section id="home" style={{ height: '100vh', paddingTop: '100px' }}>
          <h2>Home</h2>
        </section>
        <section id="about" style={{ height: '100vh' }}>
          <h2>About</h2>
        </section>
        <section id="projects" style={{ height: '100vh' }}>
          <h2>Projects</h2>
        </section>
        <section id="contact" style={{ height: '100vh' }}>
          <h2>Contact</h2>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;