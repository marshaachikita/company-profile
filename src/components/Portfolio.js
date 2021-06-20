import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-kiri'>
        <div className='portfolio-kiri-wrapper'>
          <h6>PORTFOLIO</h6>
          <h4>Projects We Successfully Developed</h4>
          <p> At Vortex we have together put a team of highly skilled developers whose objective is to offer web
              based business solutions built on strong data oriented foundation. We aim to display data from a variety
              of different programs in dashboards and tables, providing you with invaluable continuity and flexibility.
          </p>
          <div className='portfolio-btn'>
            <button class='btn'>
              <a class='btn-links'href='/portfolio-detail'>
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='portfolio-kanan' />
    </div>
  );
}

export default Portfolio;