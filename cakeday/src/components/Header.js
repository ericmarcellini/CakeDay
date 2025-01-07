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
      {/* <img className='logo' src={logo} alt="Logo" /> */}
      <header className="header">
        
      <nav className="navbar">
      <ul className="nav-left">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="nav-logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-right">
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
        {/* <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button> */}
      </header>
    </React.Fragment>
  );
};

export default Header;
