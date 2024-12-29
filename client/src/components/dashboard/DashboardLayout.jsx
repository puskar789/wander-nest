import React from "react";
import NavBar from "./NavBar";
import SideList from "./SideList";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-white min-h-screen flex">
      <SideList />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 m-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
