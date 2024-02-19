import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Sidepanel from "./Components/Sidepanel";
import "./App.css";
function App() {
  const [selectedItem, setSelectedItem] = useState("LandingPage");
  const handleItemClick = (item) => {
    // Handle the item click logic here
    setSelectedItem(item);
    // console.log(item);
  };
  return (
    <div className="App">
      <Sidepanel onItemClick={handleItemClick} />
      <Dashboard selectedItem={selectedItem} />
    </div>
  );
}

export default App;
