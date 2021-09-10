import React from 'react';
import logo from "../logo.svg";
import youtubeLogo from "../static/images/youtube.png";
import instaLogo from "../static/images/instagram.png";
import linkedInLogo from "../static/images/linkedin.png";
import facebookLogo from "../static/images/facebook.png";
import twitterLogo from "../static/images/twitter.png";

const Footer = () => {
    return (
        <footer id="footer" className="footer mt-auto">
      <div className="footer-header">
        <a href="/">
          <img src={logo} className="brand-logo" alt="Logo" />
        </a>
        <div className="social-wrapper">
          <a
            rel="noopener noreferrer"
            className="social-platform"
            href="https://www.youtube.com/channel/UCdVmeIX3xVnQcTa5OMRz-hw"
            target="_blank"
          >
            <img alt="" src={youtubeLogo} className="img-handle" />
          </a>
          <a
            rel="noopener noreferrer"
            className="social-platform"
            href="https://www.youtube.com/channel/UCdVmeIX3xVnQcTa5OMRz-hw"
            target="_blank"
          >
            <img alt="" src={linkedInLogo} className="img-handle" />
          </a>
          <a
            rel="noopener noreferrer"
            className="social-platform"
            href="https://www.youtube.com/channel/UCdVmeIX3xVnQcTa5OMRz-hw"
            target="_blank"
          >
            <img alt="" src={instaLogo} className="img-handle" />
          </a>
          <a
            rel="noopener noreferrer"
            className="social-platform"
            href="https://www.youtube.com/channel/UCdVmeIX3xVnQcTa5OMRz-hw"
            target="_blank"
          >
            <img alt="" src={facebookLogo} className="img-handle" />
          </a>
          <a
            rel="noopener noreferrer"
            className="social-platform"
            href="https://www.youtube.com/channel/UCdVmeIX3xVnQcTa5OMRz-hw"
            target="_blank"
          >
            <img alt="" src={twitterLogo} className="img-handle" />
          </a>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-row">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-row">
          <p>About Padho Intiative</p>
        </div>
        <div className="footer-row">
          <p>Made with ❤️ by Sumit Yadav</p>
        </div>
      </div>
    </footer>
    )
  }
  
export default Footer;