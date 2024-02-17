import React from "react";
import "../Css/RestoCard.css";
import restoImg from "../Assets/resto_img.jpg";

const RestoCard = () => {
  return (
    <div className="resto-card-container">
      <div className="resto-img-container">
        <img className="resto-img" src={restoImg} alt="" />
      </div>
      <div className="resto-details">
        <div>Resto Name</div>
        <div>Resto Address</div>
        <div>Rating: 3.8</div>
        <button className="menu-btn">Menu</button>
      </div>
    </div>
  );
};

export default RestoCard;
