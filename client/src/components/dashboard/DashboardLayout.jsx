import React from "react";
import NavBar from "./NavBar";
import SideList from "./SideList";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Protected from "../Protected";

const DashboardLayout = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-white min-h-screen flex">
      {authUser && <SideList />}
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 m-6">
          {authUser ? <Outlet /> : <Protected />}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
