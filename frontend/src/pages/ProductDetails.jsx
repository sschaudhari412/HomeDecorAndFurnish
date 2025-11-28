import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => String(p.id) === String(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <h3 className="text-center p-5">Loading...</h3>;

  const updateQty = (change) => {
    if (qty + change >= 1) setQty(qty + change);
  };

  const handleAddToCart = () => {
    addItem({ ...product, qty });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        
        {/* Left Image Section */}
        <div className="col-md-6">
          <img src={product.image} className="img-fluid rounded shadow-sm" alt={product.title} />
        </div>

        {/* Right Details Section */}
        <div className="col-md-6">
          <h3 className="fw-bold">{product.title}</h3>
          <div className="mt-2">
            <h4 className="text-danger fw-bold">₹{product.price}</h4>
            {product.mrp && (
              <p className="text-muted text-decoration-line-through mb-1">₹{product.mrp}</p>
            )}
            {product.discount && (
              <span className="badge bg-success">{product.discount}</span>
            )}
          </div>

          {/* Quantity */}
          <div className="d-flex align-items-center my-3">
            <strong className="me-3">Quantity:</strong>
            <button className="btn btn-outline-dark" onClick={() => updateQty(-1)}>-</button>
            <span className="px-3">{qty}</span>
            <button className="btn btn-outline-dark" onClick={() => updateQty(1)}>+</button>
          </div>

          {/* Buttons */}
          <button className="btn btn-warning w-100 mb-2" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>

          <button
            className="btn w-100 mb-2"
            style={{
              backgroundColor: wishlist ? "#ff0055" : "#eaeaea",
              color: wishlist ? "white" : "black",
              border: "1px solid #ccc"
            }}
            onClick={() => setWishlist(!wishlist)}
          >
            ❤️ {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
          </button>

          <button className="btn btn-dark w-100" onClick={handleBuyNow}>
            ⚡ Buy It Now
          </button>
        </div>
      </div>

      {/* Product Features Table */}
      <div className="mt-5">
        <h4>Product Details</h4>
        <table className="table">
          <tbody>
            <tr><th>Brand</th><td>{product.brand || "Furniverse"}</td></tr>
            <tr><th>Category</th><td>{product.category}</td></tr>
            <tr><th>Material</th><td>Premium Furniture Material</td></tr>
            <tr><th>Style</th><td>Contemporary</td></tr>
            <tr><th>Finish</th><td>Polished / Matte</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
