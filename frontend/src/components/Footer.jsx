import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">HomeDecor</h5>
            <p style={{ fontSize: "0.9rem" }}>
              Premium furniture & décor to make your home more beautiful ✨
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/products/livingroom">Furniture</Link></li>
              <li><Link className="text-white text-decoration-none" to="/products/decor">Decor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">📞 +91 98765 43210</p>
            <p className="mb-1">📧 support@homedecor.com</p>
            <p className="mb-1">🏠 Mumbai, India</p>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center" style={{ fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} HomeDecor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
