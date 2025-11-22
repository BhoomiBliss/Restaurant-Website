// src/components/Footer.jsx
import React from "react";
import { useLocation } from "react-router-dom"; // to detect current route
import logo from "../assets/images/logo.jpg";
import "./Footer.css";

const Footer = () => {
  const location = useLocation(); // gives current path
  const currentPath = location.pathname;

  // Function to determine if a link is active
  const isActive = (path) => currentPath === path;

  return (
    <footer>
      <div className="logo-last">
        <div>
          <img src={logo} alt="Jyothi Logo" className="footer-logo" />
          <div><h1>JYOTHI</h1></div>
          <div><span>stay connected</span></div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-contact">
          <p className="grid">CONNECT WITH US</p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+123456789">+1 234 567 89</a></p>
        </div>

        <div className="footer-links">
          <p className="grid">QUICK LINKS</p>
          <ul>
            <li>
              <a href="/" className={isActive("/") ? "active" : ""}>Home</a>
            </li>
            <li>
              <a href="/about" className={isActive("/about") ? "active" : ""}>Our Story</a>
            </li>
            <li>
              <a href="/menu" className={isActive("/menu") ? "active" : ""}>Menu</a>
            </li>
            <li>
              <a href="/gallery" className={isActive("/gallery") ? "active" : ""}>Gallery</a>
            </li>
            <li>
              <a href="/events" className={isActive("/events") ? "active" : ""}>Events</a>
            </li>
            <li>
              <a href="/sitemap" className={isActive("/sitemap") ? "active" : ""}>Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <p className="grid"><strong>FOLLOW US</strong></p>
          <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 The Indian Hotels Company Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
