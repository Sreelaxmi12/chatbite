import React, { useState } from "react";
import "../Css/Dashboard.css";
import RestoDetails from "./RestoDetails";
import LandingPage from "./LandingPage";
import RestoCard from "./RestoCard";
import UserCard from "./UserCard";
import OrderCard from "./OrderCard";

const Dashboard = ({ selectedItem }) => {
  // const [selectedItem, setSelectedItem] = useState("LandingPage");

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <div className="dashboard-container">
      {/* <RestoDetails /> */}
      {selectedItem === "LandingPage" && <LandingPage />}
      {selectedItem === "Restaurants" && <RestoCard />}
      {selectedItem === "Users" && <UserCard />}
      {selectedItem === "Orders" && <OrderCard />}
    </div>
  );
};

export default Dashboard;
