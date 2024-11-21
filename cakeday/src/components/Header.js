import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">sugarbayPH</h1>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#inquire">Inquire</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
