import React from 'react';
import './App.css';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;