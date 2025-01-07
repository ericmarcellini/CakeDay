import React from 'react';
import './App.css';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import About from './components/About.js';
import ImageGallery from './components/ImageGallery.js';
import ContactForm from './components/ContactForm.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ImageGallery />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;