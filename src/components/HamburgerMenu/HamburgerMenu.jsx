// src/components/HamburgerMenu/HamburgerMenu.jsx
import React from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ isOpen, onClick }) {
  return (
    <button className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={onClick} aria-label={isOpen ? "Close menu" : "Open menu"}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </button>
  );
}

export default HamburgerMenu;