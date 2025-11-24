import React from "react";
import "./PopularCategories.css";

const categories = [
    {
        name: "Sofa",
        price: "11,990/-",
        img: "/assets/PopularCategories/sofa.jpg"
    },
    {
        name: "Lamps",
        price: "11,990/-",
        img: "/assets/PopularCategories/lamps.jpg"
    },
    {
        name: "Beds",
        price: "14,999/-",
        img: "/assets/PopularCategories/beds.jpg"
    },
    {
        name: "Dining Sets",
        price: "17,900/-",
        img: "/assets/PopularCategories/dining.jpg"
    },
    {
        name: "Curtains",
        price: "999/-",
        img: "/assets/PopularCategories/curtains.jpg"
    },
    {
        name: "Decor",
        price: "11,990/-",
        img: "/assets/PopularCategories/decor.jpg"
    },
];

export default function PopularCategories() {
    return (
        <section className="container mb-5">
            <h2 className="section-title text-center mb-5">
                Popular <span>categories</span>
            </h2>

            <div className="row justify-content-center">
                {categories.map((item, index) => (
                    <div className="col-12 col-md-4 mb-4" key={index}>
                        <div className="cat-card">
                            <img src={item.img} alt={item.name} className="cat-img" />
                            <div className="cat-info">
                                <h4>{item.name}</h4>
                                <p className="price">{item.price} Onwards</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            
        </section>


    );
}
