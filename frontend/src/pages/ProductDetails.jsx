// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products.find((p) => String(p.id) === String(id)));
  }, [id]);

  if (!product) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid rounded" />
        </div>

        <div className="col-md-6">
          <h3>{product.title}</h3>
          <h4 className="text-primary">₹{product.price}</h4>

          <button
            className="btn btn-primary mt-3"
            onClick={() =>
              addItem({
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.image
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
