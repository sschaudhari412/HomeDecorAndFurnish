import React from "react";
import { Link } from "react-router-dom";
import { FaCouch, FaBed, FaChair, FaLightbulb } from "react-icons/fa";
import "./Home.css";
import HeroSlider from "../../components/HeroSlider";
import PopularCategories from "../../components/PopularCategories";
import OfferSection from "../../components/OfferSection";
import ShopByRoom from "../../components/ShopByRoom";
import TrendingProducts from "../../components/TrendingProducts";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      {/* Offer Scrolling Strip */}
      <div className="offer-strip">
        <div className="scroll-text">
          🔥 Flat 50% off on Premium Sofas! &nbsp; | &nbsp;
          🎉 Clearance Sale Live! &nbsp; | &nbsp;
          🚚 Free Delivery on Orders Above ₹999 &nbsp; | &nbsp;
          🪑 Buy 1 Get 1 on Cushions! ✨
        </div>
      </div>

      <HeroSlider />
      <PopularCategories />
      <OfferSection />
      <ShopByRoom />
      <TrendingProducts />
      <FAQ />
      < Footer />
      
    </>
  );
};

export default Home;
