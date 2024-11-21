import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <h1 className="logo">sugarbayPH</h1>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#inquire">Inquire</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
