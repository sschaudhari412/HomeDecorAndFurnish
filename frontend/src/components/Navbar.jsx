// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-white">
      <div className="container py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">

        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-1 text-dark m-0">
          Furni<span className="text-warning">verse</span>
        </Link>

        {/* Search */}
        <form className="search-bar d-flex align-items-center flex-grow-1">
          <FaSearch className="me-2" />
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Search for sofas, beds, decor & more…"
          />
        </form>

        {/* User / Wishlist / Cart */}
        <div className="d-flex align-items-center">
          <button className="icon-btn"><FaUser /></button>
          <button className="icon-btn"><FaHeart /></button>
          <button className="icon-btn"><FaShoppingCart /></button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-light border-top category-nav">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto">

              {/* FURNITURE MENU */}
              <li className="nav-item dropdown">
                <button className="nav-link menu-link dropdown-toggle btn btn-link" type="button" data-bs-toggle="dropdown">
                  Furniture
                </button>
                <ul className="dropdown-menu">

                  {/* Living Room */}
                  <li className="dropdown-header small text-muted">Living Room</li>
                  <li><Link className="dropdown-item" to="/furniture/living-room/sofas-recliners">Sofas & Recliners</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/living-room/tv-units">TV Units & Cabinets</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/living-room/center-side-tables">Center & Side Tables</Link></li>

                  <li><hr className="dropdown-divider" /></li>

                  {/* Bedroom */}
                  <li className="dropdown-header small text-muted">Bedroom</li>
                  <li><Link className="dropdown-item" to="/furniture/bedroom/beds">Beds</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/bedroom/bedside-tables">Bedside Tables</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/bedroom/wardrobes">Wardrobes</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/bedroom/dressers">Dressers</Link></li>

                  <li><hr className="dropdown-divider" /></li>

                  {/* Dining & Study */}
                  <li className="dropdown-header small text-muted">Dining & Study</li>
                  <li><Link className="dropdown-item" to="/furniture/dining-study/dining-sets">Dining Sets & Chairs</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/dining-study/study-tables">Study Tables</Link></li>
                  <li><Link className="dropdown-item" to="/furniture/dining-study/office-tables">Office Tables</Link></li>

                </ul>
              </li>

              {/* OTHER MENU HEADS (as before) */}
              <li className="nav-item">
                <Link className="nav-link menu-link" to="/kitchen-dining">Kitchen & Dining</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/home-decor">Home Decor</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/home-furnishing">Home Furnishing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/interiors">Interiors</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
