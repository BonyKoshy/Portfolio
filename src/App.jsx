// src/App.jsx
import React from 'react';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import StaggeredMenu from './components/StaggeredMenu/StaggeredMenu'; // Import the menu

// Define your menu and social items
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com/in/bonykoshy' },
  { label: 'GitHub', link: 'https://github.com/BonyKoshy' }
];

function App() {
  return (
    <>
      <div className="app-background">
        <DotGrid
          dotSize={2}
          gap={25}
          baseColor="#000000ff"
          activeColor="#ffffffff"
          proximity={100}
          shockRadius={200}
          shockStrength={0.2}
          resistance={1000}
          returnDuration={0.5}
        />
      </div>

      <div style={{ height: '100vh', background: '#1a1a1a' }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000000ff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
    </>
  );
}

export default App;