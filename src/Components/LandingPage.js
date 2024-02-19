import React from "react";
import "../Css/LandingPage.css";
// import foodLogo from "../Assets/landingPageLogo.png";
// import foodLogo from "../Assets/food2.jpg";
// import foodLogo from "../Assets/food3.jpg";
import foodLogo from "../Assets/food1.png";

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
