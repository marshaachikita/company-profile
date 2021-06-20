import React from 'react';
import '../App.css';
import './Features.css';

function Features() {
  return (
    <div className='features-container'>
        <h6>OUR FEATURES</h6>
        <div className='column'>
            <div class="hexagon">
                <div class="hex-wrapper">
                    <div class="hex-border bg-color">
                        <p>
                            Client/ Server Software<br/><br/><br/>
                            Solve your admin and data management with bespoke desktop and server applications.
                            We make a specifically designned system to fit your business practices.

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='column'> 
            <div class="hexagon">
                <div class="hex-wrapper">
                    <div class="hex-border bg-color">
                        <p>
                            Free Consultacny<br/><br/><br/>
                            Sometimes you need a bit of outside help to look of things with
                            fresh eyes. Contact us today to schedule a phone call with one of our team.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
        <div className='column'> 
            <div class="hexagon">
                <div class="hex-wrapper">
                    <div class="hex-border bg-color">
                        <p>
                            Big Data<br/><br/><br/>
                            Tell us your problem and our experts thrive on producing systems
                            that display your data in a way that makes your business better.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features;