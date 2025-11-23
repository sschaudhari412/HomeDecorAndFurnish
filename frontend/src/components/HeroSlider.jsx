import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";



export default function HeroSlider() {
    return (
        <div className="hero-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >

                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="slide-container">

                        <img
                            className="slide-img"
                          src="/assets/Hero/slidethree.jpg"
                            alt="Slide One"
                        />

                        <div className="slide-offer-box">
                            <h2 className="fw-bold">STEAL DEAL</h2>
                            <p className="mb-3">LIMITED TIME OFFERS<br />UNLIMITED SAVINGS!</p>
                            <button className="btn btn-light fw-bold">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="slide-container">
                       <img className="slide-img" src="/assets/Hero/slidefour.jpg" alt="Test" />

                       


                        <div className="slide-offer-box">
                            <h2 className="fw-bold">MEGA SALE</h2>
                            <p className="mb-3">UP TO 60% OFF<br />On Living Room Furniture</p>
                            <button className="btn btn-light fw-bold">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="slide-container">
                        <img
                            className="slide-img"
                            src="/assets/Hero/slideone.jpg"

                            alt="Chairs"
                        />

                        <div className="slide-offer-box">
                            <h2 className="fw-bold">BEST SELLERS</h2>
                            <p className="mb-3">Starting at ₹4,999<br />Modern Seating Options</p>
                            <button className="btn btn-light fw-bold">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
