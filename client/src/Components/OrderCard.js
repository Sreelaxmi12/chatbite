import React from "react";
import "../Css/OrderCard.css";
import restoImg from "../Assets/resto_img.jpg";

const OrderCard = () => {
  return (
    <div className="order-card-container">
      <div className="order-upper-card">
        <div>
          <div>Order ID: A644400078</div>
          <div>Dish Name</div>
        </div>
        <div className="order-img-container">
          <img className="order-img" src={restoImg} alt="" />
        </div>
      </div>
      <div className="order-details">
        <div>
          <div style={{ fontSize: "20px" }}>Order By: Username</div>
          <div>Resto Name</div>
          <div>Resto Address</div>
          <div>Items: Paratha(2pc), Paneer Masala</div>
          <div>Total Price: 300/-</div>
          <div>Delivery Address</div>
          <div>Rating: 3.8</div>
        </div>
        {/* <button className="menu-btn">Menu</button> */}
      </div>
    </div>
  );
};

export default OrderCard;
