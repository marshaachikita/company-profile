import React from 'react';
import '../App.css';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-container'>
      <h6> GET IN TOUCH </h6>
      <p> We invite you to email us and provide feedback on our service, 
          offer suggestions or just say hello.
      </p>
      <br/>
      <div className='contact-kiri'>
        <div className='contact-kiri-wrapper'>
          <div className='table-wrapper'>
            <table>
              <tr>
                <td className='table-wrapper-tdleft'>
                  <img src={require('../images/mail.png').default} />
                </td>
                <td className='table-wrapper-tdright'>
                   EMAIL<br/>
                   vortex.info@mail.com
                </td>
              </tr>
              <tr>
                <td className='table-wrapper-tdleft'>
                    <img src={require('../images/phone.png').default} />
                  </td>
                  <td className='table-wrapper-tdright'>
                    PHONE<br/>
                    +62 862 1236 462
                </td>
              </tr>
              <tr>
                <td className='table-wrapper-tdleft'>
                    <img src={require('../images/loc.png').default} />
                  </td>
                  <td className='table-wrapper-tdright'>
                    ADDRES<br/>
                    Master Street
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className='contact-kanan' >
          <div className='form-wrapper'>
            <form>
                <input type='text' placeholder='Your Name'/>
                <input type='email' placeholder='Email' />
                <textarea type='text' placeholder='Message'/>
                <input type='submit' value='Submit'/>
            </form>
          </div>
      </div>
    </div>
  );
}

export default ContactUs;