import React, { useState } from 'react';
import './Header.css';
import logo from './images/logo.png';

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
        {/* Left navigation links */}
        <ul className="nav-left">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
        </ul>

        {/* Centered logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Right navigation links */}
        <ul className="nav-right">
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
    </React.Fragment>
  );
};

export default Header;
