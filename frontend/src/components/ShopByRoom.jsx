import React from "react";
import "./ShopByRoom.css";

const rooms = [
  {
    title: "Living room",
    img: "/assets/ShopByRoom/livroom.jpg",
  },
  {
    title: "Bedroom",
    img: "/assets/ShopByRoom/bedroom.jpg",
  },
  {
    title: "BathRoom Furniture",
    img: "/assets/ShopByRoom/bathroom.jpg",
  },
  {
    title: "Dining & Kitchen Furniture",
    img: "/assets/ShopByRoom/kdroom.jpg",
  },
   {
    title: "Office Furniture",
    img: "/assets/ShopByRoom/officeroom.jpg",
  },
  {
    title: "Outdoor Furniture",
    img: "/assets/ShopByRoom/out.jpg",
  },
 
];

export default function ShopByRoom() {
  return (
    <section className="shop-room container text-center my-5">
      <h2 className="shop-room-title mb-5">
        Shop by <span>Room</span>
      </h2>

      <div className="row justify-content-center">
        {rooms.map((room, index) => (
          <div className="col-12 col-md-4 mb-5" key={index}>
            <div className="room-card">
              <img src={room.img} className="room-img" alt={room.title} />
            </div>
            <h3 className="room-title mt-3">{room.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
