import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="lux-footer">

      {/* Top */}
      <div className="container footer-top">
        {/* Logo + Info */}
        <div className="footer-col footer-logo">
          <img src="/assets/logoImg.png" alt="Brand Logo" />
          <p className="tagline">    Home Decor & Furniture</p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Customer Support</li>
            <li>Store Locator</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Subscribe Box */}
        <div className="footer-col footer-subscribe">
          <h4>Stay Updated</h4>
          <p>Join our newsletter for offers & trends</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>

          {/* Contact Detail Icons */}
          <div className="footer-contact">
            <p><FaPhoneAlt /> +91 80 6925 2525</p>
            <p><FaEnvelope /> support@homedecor.com</p>
            <p><FaMapMarkerAlt /> Find a store</p>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 HomeDecorAndFurnish. All rights reserved.</p>
      </div>

    </footer>
  );
}
