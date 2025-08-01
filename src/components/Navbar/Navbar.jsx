// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import GlassSurface from '../GlassSurface/GlassSurface';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <GlassSurface
        width={isMobileMenuOpen ? "100%" : "calc(100% - 40px)"}
        height={isMobileMenuOpen ? "100%" : 80}
        borderRadius={isMobileMenuOpen ? 0 : 40}
        blur={isMobileMenuOpen ? 25 : 20}
        opacity={isMobileMenuOpen ? 0.95 : 0.85}
        brightness={isMobileMenuOpen ? 50 : 80}
        displace={isMobileMenuOpen ? 10 : 5}
        distortionScale={isMobileMenuOpen ? -150 : -100}
        className="navbar-glass-surface"
      >
        <div className={`navbar-content ${isMobileMenuOpen ? 'mobile-content-expanded' : ''}`}>

          <div className="navbar-left-content">
            <DateTimeDisplay />
          </div>

          <ul className="navbar-links">
            <li><a href="#home" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>Home</a></li>
            <li><a href="#about" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>About</a></li>
            <li><a href="#skills" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>Skills</a></li>
            <li><a href="#projects" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>Projects</a></li>
            <li><a href="#contact" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>Contact</a></li>
          </ul>

          <div className="navbar-right-content">
            <DarkModeSwitch />
          </div>
        </div>
      </GlassSurface>

      {/* Hamburger Menu Toggle (fixed top-left on mobile viewport) */}
      <div className="hamburger-fixed-wrapper">
        <HamburgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </div>

    </nav>
  );
}

export default Navbar;