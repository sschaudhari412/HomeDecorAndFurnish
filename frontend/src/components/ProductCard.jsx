// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="ratio ratio-4x3">
        <img
          src={product.image}
          className="card-img-top object-fit-cover"
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="card-title mb-1" style={{ fontSize: 14 }}>
          {product.title}
        </h6>

        <div className="mt-auto d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-bold">₹{product.price}</div>
            {product.mrp && (
              <small className="text-decoration-line-through text-muted">
                ₹{product.mrp}
              </small>
            )}
          </div>

          <button
            className="btn btn-sm btn-primary"
            onClick={() => onAdd(product)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
