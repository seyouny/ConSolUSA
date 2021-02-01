import React from 'react';
import './app.css';

export default function Footer() {

  return (
    <div>
    <div className='pseudo'>
        
    </div>
    <div className="footer">
        <div className='row'>
            <div className='columnLeft'>
                <p><strong>About Us</strong></p>
                <p>This is info about us. This is info about us. This is info about us. This is info about us. This is info about us.</p>
            </div>
            <div className='column'>
                <p><strong>Contact Us</strong></p>
                <p>(302) 401-6537</p>
                <p>info@consol-usa.com</p>
                <p>8 The Green, Suite #8212<br></br> 
                Dover, DE 19901
                </p>
            </div>
            <div className='column'>
                <p><strong>Follow Us</strong></p>
                <p>LinkedIn:</p>
                <p>Facebook:</p>
                <p>Twitter:</p>
            </div>
        </div>
    </div>
    </div>
  );
}