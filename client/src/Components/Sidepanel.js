import React from "react";
import "../Css/Sidepanel.css";

const Sidepanel = () => {
  return (
    <div className="Sidepanel-container">
    <div className="sp-head">ChatBite Admin Panel</div>
      <div className="sp-item">Restaurants</div>
      <div className="sp-item">Users</div>
      <div className="sp-item">Orders</div>
    </div>
  );
};

export default Sidepanel;
