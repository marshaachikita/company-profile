import React from 'react';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='about-container'>
        <div className='about-kiri' />
        <div className='about-kanan'>
            <div className='about-kanan-wrapper'>
                <h6><pre>A  B  O  U  T      U  S</pre></h6>
                <h4>Our Company is Here to Help You</h4>
                <p> At Vortex we have together put a team of highly skilled developers whose objective is to offer web
                    based business solutions built on strong data oriented foundation. We aim to display data from a variety
                    of different programs in dashboards and tables, providing you with invaluable continuity and flexibility.
                </p>
                <p>
                    We love working with data but our team's ability does not end there. Understanding that our clients need
                    a range of different skills and services, we have ensured that we have the right people to offer flexible,
                    high quality solutions to their online needs, covering a range of important areas.
                </p>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;