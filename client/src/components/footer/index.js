import React from 'react';
import './app.css';

export default function Footer() {

  return (
    <div className="footer">
        <div className='row'>
            <div className='columnLeft'>
                <h4>About Us</h4>
                <p>ConSol USA is a for-profit company with a mission of positive financial and human impact.  Some call us a social enterprise, but we aim to lead a new category of ecosystem builder.</p>
                <p>Diverse Tech Talent | Local Outsourcing | Profit with Social Impact</p>
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
  );
}