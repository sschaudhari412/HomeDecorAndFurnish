import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <div className="container py-5 d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-1 text-dark ms-1">
          Home<span className="text-warning">Town</span>
        </Link>

        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center px-1">
          <input
            type="text"
            className="form-control border-0"
            placeholder="What are you looking for?"
          />
          <FaSearch className="text-dark ms-2" />
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-4">
          <FaUser size={22} className="text-dark icon-hover" />

          <div className="position-relative icon-hover">
            <FaHeart size={22} className="text-dark" />
            <span className="badge-notify">0</span>
          </div>

          <FaShoppingCart size={22} className="text-dark icon-hover" />
        </div>
      </div>

   {/* Category Menu with Dropdowns */}
<nav className="category-menu py-2">
  <div className="container d-flex gap-4 justify-content-center">

    {/* Furniture */}
    <div className="dropdown">
      <Link className="menu-link dropdown-toggle" data-bs-toggle="dropdown">
        Furniture
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/products/sofa">Sofas</Link></li>
        <li><Link className="dropdown-item" to="/products/bed">Beds</Link></li>
        <li><Link className="dropdown-item" to="/products/chair">Chairs</Link></li>
        <li><Link className="dropdown-item" to="/products/table">Tables</Link></li>
      </ul>
    </div>

    {/* Kitchen & Dining */}
    <div className="dropdown">
      <Link className="menu-link dropdown-toggle" data-bs-toggle="dropdown">
        Kitchen & Dining
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/products/diningtable">Dining Tables</Link></li>
        <li><Link className="dropdown-item" to="/products/cookware">Cookware</Link></li>
        <li><Link className="dropdown-item" to="/products/dinnerware">Dinnerware</Link></li>
        <li><Link className="dropdown-item" to="/products/barstool">Bar Stools</Link></li>
      </ul>
    </div>

    {/* Home Decor */}
    <div className="dropdown">
      <Link className="menu-link dropdown-toggle" data-bs-toggle="dropdown">
        Home Decor
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/products/lamps">Lamps</Link></li>
        <li><Link className="dropdown-item" to="/products/clock">Wall Clocks</Link></li>
        <li><Link className="dropdown-item" to="/products/vase">Vases</Link></li>
        <li><Link className="dropdown-item" to="/products/rugs">Rugs</Link></li>
      </ul>
    </div>

  {/*Home Furnishing */}
    <div className="dropdown">
      <Link className="menu-link dropdown-toggle" data-bs-toggle="dropdown">
       Home Furnishing
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/products/sofa">Curtains & Blinds</Link></li>
        <li><Link className="dropdown-item" to="/products/bed">Bedsheets & Bedding</Link></li>
        <li><Link className="dropdown-item" to="/products/chair">Cushions & Throws</Link></li>
        <li><Link className="dropdown-item" to="/products/table">Floor Coverings</Link></li>
      </ul>
    </div>
    {/* Interiors */}
    <div className="dropdown">
      <Link className="menu-link dropdown-toggle" data-bs-toggle="dropdown">
        Interiors
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/products/falseceiling">False Ceiling</Link></li>
        <li><Link className="dropdown-item" to="/products/modular">Modular Kitchen</Link></li>
        <li><Link className="dropdown-item" to="/products/wardrobe">Wardrobes</Link></li>
        <li><Link className="dropdown-item" to="/products/office">Office Interiors</Link></li>
      </ul>
    </div>

  </div>
</nav>
    </header>
  );
}
