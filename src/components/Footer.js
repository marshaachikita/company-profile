import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <Link to='/' className='social-logo'>
        VORTEX
        <i class='fab fa-typo3' />
      </Link>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Portfolio</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Jobs</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Opening Hours</h2>
            <Link to='/'><pre>Monday              10AM - 7PM</pre></Link>
            <Link to='/'><pre>Tuesday              10AM - 7PM</pre></Link>
            <Link to='/'><pre>Wednesday        10AM - 7PM</pre></Link>
            <Link to='/'><pre>Thursday            10AM - 7PM</pre></Link>
            <Link to='/'><pre>Friday                 10AM - 7PM</pre></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;