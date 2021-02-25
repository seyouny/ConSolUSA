import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
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
            <div className='columnMiddle'>
                <p><strong>Contact Us</strong></p>
                <p><PhoneIcon className="icon"></PhoneIcon> (302) 401-6537</p>
                <p><EmailIcon className="icon"></EmailIcon> info@consol-usa.com</p>
                <p><RoomIcon className="icon"></RoomIcon> 8 The Green, Suite #8212<br></br> 
                <span className="indent">Dover, DE 19901</span>
                </p>
            </div>
            <div className='columnRight'>
                <p><strong>Follow Us</strong></p>
                <LinkedInIcon></LinkedInIcon>
                <FacebookIcon></FacebookIcon>
                <TwitterIcon></TwitterIcon>
            </div>
        </div>
    </div>
  );
}