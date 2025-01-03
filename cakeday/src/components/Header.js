import React, { useState } from 'react';
import './Header.css';
import logo from './images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <React.Fragment>
      <img className='logo' src={logo} alt="Logo" />
      <header className="header">
        
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
    </React.Fragment>
  );
};

export default Header;
