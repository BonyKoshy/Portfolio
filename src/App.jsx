// src/App.jsx
import React from 'react';
import './App.css'; // Import your main app styles
import DotGrid from './components/DotGrid/DotGrid';

function App() {
  return (
    <>
      {/* This is your new animated background */}
      <div className="app-background">
        <DotGrid
          dotSize={4}
          gap={25}
          baseColor="#c01515ff"   /* Darker color for the dots */
          activeColor="#ffffffff" /* Lighter color on interaction */
          proximity={100}
          shockRadius={200}
          shockStrength={10}
          resistance={1000}
          returnDuration={5}
        />
      </div>

      <main className="app-content">
      </main>
    </>
  );
}

export default App;