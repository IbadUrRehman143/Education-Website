import React, { useState } from 'react';
import "./Header.css";
import { FaBars, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "../../../assets/Images/logo.png";
import Timer from "../Timer/Timer"

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [verticalNav, setVerticalNav] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNav = () => {
    setVerticalNav(!verticalNav)
  }

  return (
    <div className="header-area">
      <div className="header-top">
        <div className="container header-top-flex">
          <p><span>Ends tomorrow : </span> Join Teachable for $4,800 in bonus content</p>
          <Timer />
          <a href="">Learn More</a>
        </div>
      </div>
      <div className={`container ${!verticalNav ? "nav" : "vertical-nav"}`}>
        <div className='nav-logo'>
          <a href="index.html">
            <img src={Image} alt="" />
          </a>
        </div>
        <div className='nav-link'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li
              className='dropdown'
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="/blog">Blog</a>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="/blog">Blog</a>
                  <a href="/blog">Blog-Details</a>
                  <a href="/blog">Elements</a>
                </div>
              )}
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='call-btn'>
          <a href="">Call Us :
            <span>  0 (78) 675 3674</span>
          </a>
        </div>
        <div className='social-link'>
          <ul>
            <li><a href="#"><span className='icon facebook-icon'><FaFacebookSquare /></span></a></li>
            <li><a href="#"><span className='icon twitter-icon'><FaTwitterSquare /></span></a></li>
            <li><a href="#"><span className='icon linkedin-icon'><FaLinkedin /></span></a></li>
            <li><a href="#"><span className='icon youtube-icon'><FaYoutubeSquare /></span></a></li>
            <li><a href="#"><span className='icon email-icon'><AiOutlineMail /></span></a></li>
          </ul>
          <span className='menu-icon' onClick={toggleNav}><FaBars /></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
