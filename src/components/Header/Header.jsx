import React, { useRef } from 'react';
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu';
import Clock from '../Clock/Clock';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header() {
  const menuRef = useRef(null);

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
    // This calls the toggleMenu function inside the StaggeredMenu component
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
            className="menu-toggle-button"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* The menu panel is now controlled via the ref */}
      <StaggeredMenu
        ref={menuRef}
        items={menuItems}
        socialItems={socialItems}
      />
    </>
  );
}

export default Header;

