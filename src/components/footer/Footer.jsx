import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Prashanth
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <CiFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <TfiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Prashanth Portfolio 2023 Inc. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
