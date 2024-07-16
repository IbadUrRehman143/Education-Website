
import React from 'react';
import './Footer.css';
import logo from '../../../assets/Images/logo2_footer.png';
import icon from '../../../assets/Images/Icon-send.svg';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-color-footer'>
      <div className='container'>
        <div className='target-flex'>
          <div className="footer-row media1">
            <div className='footer-img-g'>
              <img src={logo} alt="Logo" />
            </div>
            <div className='footer-text'>
              <h1>Quick Links</h1>
              <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Tips & Tricks</a></li>
              </ul>
            </div>
            <div className='footer-text'>
              <h1>Programs</h1>
              <ul>
                <li><a href="#">Air freight</a></li>
                <li><a href="#">Ocean freight</a></li>
                <li><a href="#">Large projects</a></li>
                <li><a href="#">Tips & Tricks</a></li>
              </ul>
            </div>
          </div>
          <div className='footer-row media'>
            <div className='footer-text resources'>
              <h1>Resources</h1>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Submit Ticket</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Tips & Tricks</a></li>
              </ul>
            </div>
            <div className='last-text-footer'>
              <h1>Newsletter</h1>
              <div className="footer-tittle">
                <p>Subscribe newsletter to get updates.</p>
              </div>
              <div className='emil-btn'>
                <input type="text" placeholder='Enter your Email' />
                <div className="forms-icon">
                  <button type="submit" name="submit" className="emal_icon">
                    <img src={icon} alt="Send Icon" />
                  </button>
                </div>
              </div>
              <div className='footer-social-link'>
                <ul>
                  <li><a href="#"><span className='icon facebook-icon'><FaFacebookSquare /></span></a></li>
                  <li><a href="#"><span className='icon twitter-icon'><FaTwitterSquare /></span></a></li>
                  <li><a href="#"><span className='icon linkedin-icon'><FaLinkedin /></span></a></li>
                  <li><a href="#"><span className='icon youtube-icon'><FaYoutubeSquare /></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='hh'></div>
        <div className="footer-copy-right">
          <p>Copyright © 2024 All rights reserved | This template is made with 💚 by <a href="https://colorlib.com">Colorlib</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
