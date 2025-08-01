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
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // When menu closes, hide overflow to prevent scroll issues
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  // Close menu if window is resized above mobile breakpoint
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
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isMobileMenuOpen]);


  return (
    <nav className={`navbar-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* This GlassSurface wraps the core desktop/expanded mobile content */}
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
        {/* Content for desktop and expanded mobile menu */}
        <div className={`navbar-content ${isMobileMenuOpen ? 'mobile-content-expanded' : ''}`}>

          {/* This content is for desktop or when mobile menu is expanded */}
          <div className="navbar-left-content">
            {/* Date and Time is ONLY for desktop, hidden by CSS on mobile */}
            <DateTimeDisplay />
          </div>

          <ul className="navbar-links">
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>

          <div className="navbar-right-content">
            <button className="navbar-resume-button">Download Resume</button> {/* This button also on desktop/expanded mobile */}
            <DarkModeSwitch /> {/* This is present on desktop and expanded mobile */}
          </div>
        </div>
      </GlassSurface>

      {/* Hamburger Menu Toggle (always fixed top-right on mobile viewport) */}
      <div className="hamburger-fixed-wrapper">
        <HamburgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </div>

    </nav>
  );
}

export default Navbar;