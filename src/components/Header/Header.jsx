import React from 'react';
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu';
import Clock from '../Clock/Clock';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header() {
  // Define menu items inside the component that uses them
  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com/in/bonykoshy' },
    { label: 'GitHub', link: 'https://github.com/BonyKoshy' }
  ];

  return (
    <header className="main-header">
      <div className="header-left">
        <Clock />
      </div>
      <div className="header-right">
        <ThemeToggle />
        <StaggeredMenu
          items={menuItems}
          socialItems={socialItems}
          position="right"
        />
      </div>
    </header>
  );
}

export default Header;