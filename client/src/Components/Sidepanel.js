import React from "react";
import "../Css/Sidepanel.css";

const Sidepanel = ({ onItemClick }) => {
  return (
    <div className="Sidepanel-container">
      <div className="sp-head" onClick={() => onItemClick("LandingPage")}>
        ChatBite Admin Panel
      </div>
      <div className="sp-item" onClick={() => onItemClick("Restaurants")}>
        Restaurants
      </div>
      <div className="sp-item" onClick={() => onItemClick("Users")}>
        Users
      </div>
      <div className="sp-item" onClick={() => onItemClick("Orders")}>
        Orders
      </div>
    </div>
  );
};

export default Sidepanel;
