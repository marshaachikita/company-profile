import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-kiri'>
        <div className='hero-kiri-wrapper'>
          <p>Welcome to</p>
          <h1>VORTEX</h1>
          We provide systems that deliver accessible, high quality information and 
          analysis to enable informed decision-making.
        </div>
      </div>
      <div className='hero-kanan'/>
    </div>
  );
}

export default HeroSection;