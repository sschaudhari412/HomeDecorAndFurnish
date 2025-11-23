import React from "react";
import { Link } from "react-router-dom";
import "./TrendingProducts.css";

const trending = [
  {
    id: 1,
    title: "Modern Sofa",
    price: "11,990",
    img: "/assets/Trending/trendySofa.jpg"
  },
  {
    id: 2,
    title: "Luxury Bed",
    price: "19,500",
    img: "/assets/Trending/bedT.jpg"
  },
  {
    id: 3,
    title: "Stylish Chair",
    price: "4,999",
    img: "/assets/Trending/chairT.jpg"
  },
  {
    id: 4,
    title: "Decorative Lamp",
    price: "7,899",
    img: "/assets/Trending/lampImg.jpg"
  }
];

export default function TrendingProducts() {
  return (
    <section className="container trending-products mt-5">
      <h2 className="section-title text-center mb-4">
        Trending <span className="highlight">Products</span> 🔥
      </h2>

      <div className="row">
        {trending.map((item) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={item.id}>
            <div className="product-card">
              <img src={item.img} alt={item.title} className="product-img" />

              <div className="product-info">
                <h6 className="product-title">{item.title}</h6>
                <p className="product-price">₹ {item.price}</p>

                <Link
                  to={`/product/${item.id}`}
                  className="btn btn-dark btn-sm w-100"
                >
                  View Details
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
