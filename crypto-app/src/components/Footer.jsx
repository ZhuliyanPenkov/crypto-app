import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contacts" className="footer">
      <div className="container">
        <div className="col col-1">
          <h1>
            Zhu<span className="primary">Ly</span>
          </h1>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"> </span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/zhpenkov/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
