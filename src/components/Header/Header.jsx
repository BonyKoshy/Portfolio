import React, { useRef, useState } from 'react';
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu';
import Clock from '../Clock/Clock';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header() {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com/in/bonykoshy' },
    { label: 'GitHub', link: 'https://github.com/BonyKoshy' },
  ];

  const handleMenuToggle = () => {
    menuRef.current?.toggleMenu();
  };

  return (
    <>
      <header className="main-header">
        <div className="header-left">
          <Clock />
        </div>
        <div className="header-right">
          <ThemeToggle />
          <button
            className={`menu-toggle-button ${isMenuOpen ? 'is-open' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
      </header>

      <StaggeredMenu
        ref={menuRef}
        items={menuItems}
        socialItems={socialItems}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Header;