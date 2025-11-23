import React from "react";
import "./OfferSection.css";

function OfferSection() {
  return (
    <section className="offer-section container-fluid p-0">
      <img
        src="/assets/PopularCategories/offimg.jpg"
        alt="Offer Banner"
        className="offer-img"
      />

      <div className="offer-overlay">
        <h2>
          Extra <span>5%</span> offer
        </h2>
        <p>On your first purchase</p>

        <div className="offer-tag">
          <span>Use coupon code</span>
          <div className="coupon">WELCOMEHT5</div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
