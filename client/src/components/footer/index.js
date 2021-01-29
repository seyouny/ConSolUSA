import React from 'react';
import './app.css';

export default function Footer() {

  return (
    <div className="footer">
        <div className='row'>
            <div className='columnLeft'>
                <p><strong>About Us</strong></p>
                <p>This is info about us. This is info about us. This is info about us. This is info about us. This is info about us.</p>
            </div>
            <div className='column'>
                <p><strong>Contact Us</strong></p>
                <p>(888) 888-8889</p>
                <p>blank@blank.com:</p>
                <p>1111 Main St,
                    Five, Five, 80800
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
  );
}