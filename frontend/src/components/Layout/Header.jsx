import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="mobile-header">
      <div className="menu-icon" onClick={toggleSidebar}>
        {/* Three dots icon */}
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <h1 className="header-title">Dashboard</h1>
    </header>
  );
};

export default Header;