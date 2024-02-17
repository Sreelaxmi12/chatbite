import React from "react";
import "../Css/Dashboard.css";
import RestoDetails from "./RestoDetails";
import LandingPage from "./LandingPage";
import RestoCard from "./RestoCard";
import UserCard from "./UserCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <LandingPage /> */}
      {/* <RestoDetails /> */}
      {/* <RestoCard /> */}
      <UserCard />
    </div>
  );
};

export default Dashboard;
