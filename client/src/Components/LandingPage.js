import React from "react";
import "../Css/LandingPage.css";
import foodLogo from "../Assets/landingPageLogo.png";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="foodLogo-Container">
        <img className="foodLogo" src={foodLogo} alt="" />
      </div>
      <div>Welcome to ChatBite!!!</div>
    </div>
  );
};

export default LandingPage;
