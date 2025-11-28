import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd }) {
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(false);

  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  const handleAddToCart = () => {
    onAdd({ ...product, qty });
    toast.success("🛒 Added to Cart!", {
      position: "bottom-center",
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    onAdd({ ...product, qty });
    window.location.href = "/cart"; // later if you create Checkout page, change this
  };

  return (
    <div className="card h-100 shadow-sm product-card">

      {/* --- Image --- */}
      <div className="ratio ratio-4x3">
        <img
          src={product.image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
          alt={product.title}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="fw-semibold">{product.title}</h6>

        {/* PRICE + DISCOUNT */}
        <div className="mt-1">
          <span className="fw-bold text-dark">₹{product.price}</span>
          {product.mrp && (
            <small className="text-muted ms-2 text-decoration-line-through">
              ₹{product.mrp}
            </small>
          )}
          {discount > 0 && (
            <span className="badge bg-success ms-2">{discount}% Off</span>
          )}
        </div>

        {/* QUANTITY */}
        <div className="d-flex align-items-center gap-2 mt-2">
          <button className="qty-btn" onClick={() => setQty((q) => q > 1 ? q - 1 : 1)}>
            -
          </button>
          <span className="fw-bold">{qty}</span>
          <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-warning w-100" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="btn btn-dark w-100" onClick={handleBuyNow}>
            Buy Now
          </button>

          <button
            className={`wishlist-btn ${wish ? "active" : ""}`}
            onClick={() => setWish(!wish)}
          >
            {wish ? <FaHeart /> : <FaHeartBroken />}
          </button>
        </div>

      </div>
    </div>
  );
}
