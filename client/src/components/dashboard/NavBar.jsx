/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="h-16 flex-1 flex gap-3 bg-blue-600 px-10 py-4 shadow-xl">
      <Link className="font-semibold cursor-pointer" to="/">
        <IoMdHome className="text-white text-3xl" />
      </Link>
      <h1 className="text-white font-semibold text-xl">Dashboard</h1>
    </div>
  );
};

export default NavBar;
