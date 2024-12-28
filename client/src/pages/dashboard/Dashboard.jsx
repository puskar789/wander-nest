import React from "react";
import NavBar from "../../components/dashboard/NavBar";
import SideList from "../../components/dashboard/SideList";

const Dashboard = () => {
  return (
    <div className="bg-white h-screen flex">
      <SideList />
      <NavBar />
    </div>
  );
};

export default Dashboard;
