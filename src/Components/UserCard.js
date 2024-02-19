import React from "react";
import "../Css/UserCard.css";
import UserImg from "../Assets/userlogo.jpg";

const UserCard = () => {
  return (
    <div className="User-card-container">
      <div className="User-img-container">
        <img className="User-img" src={UserImg} alt="" />
      </div>
      <div className="User-details">
        <div>User Name</div>
        <div>User Address</div>
        {/* <button className="menu-btn">Menu</button> */}
        <div>Address</div>
        <div>Fav Cuisine</div>
      </div>
    </div>
  );
};

export default UserCard;
