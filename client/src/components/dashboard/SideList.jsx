import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import {
  MdPeopleAlt,
  MdBed,
  MdDashboard,
  MdMarkChatUnread,
  MdOutlineLogout,
} from "react-icons/md";
import { TbBellRingingFilled } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const SideList = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [openSideList, setOpenSideList] = useState(false);

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleOpenClose = () => {
    setOpenSideList(!openSideList);
  };

  return (
    <div className="min-w-20 shadow-xl flex flex-col justify-center items-center gap-1 text-3xl">
      <button
        className={
          `w-full h-16 flex items-center bg-blue-600` +
          `${openSideList ? " justify-end" : " justify-center"} `
        }
        onClick={handleOpenClose}
      >
        {openSideList ? (
          <IoIosArrowBack className="mr-4 text-white text-2xl" />
        ) : (
          <FiAlignJustify className="text-white" />
        )}
      </button>
      <button className="w-full p-3 flex justify-center items-center focus:bg-indigo-100 active:bg-gray-200">
        <MdDashboard />
        {openSideList && (
          <span className="ml-6 w-40 text-left text-lg">Main</span>
        )}
      </button>
      <button className="w-full p-3 flex justify-center items-center focus:bg-indigo-100 active:bg-gray-200">
        <MdPeopleAlt />
        {openSideList && (
          <span className="ml-6 w-40 text-left text-lg">Users</span>
        )}
      </button>
      <button className="w-full p-3 flex justify-center items-center focus:bg-indigo-100 active:bg-gray-200">
        <MdBed />
        {openSideList && (
          <span className="ml-6 w-40 text-left text-lg">Rooms</span>
        )}
      </button>
      <button className="w-full p-3 flex justify-center items-center focus:bg-indigo-100 active:bg-gray-200">
        <TbBellRingingFilled />
        {openSideList && (
          <span className="ml-6 w-40 text-left text-lg">Requests</span>
        )}
      </button>
      <button className="w-full p-3 flex justify-center items-center focus:bg-indigo-100 active:bg-gray-200">
        <MdMarkChatUnread />
        {openSideList && (
          <span className="ml-6 w-40 text-left text-lg">Messages</span>
        )}
      </button>
      <div className="bg-slate-300 w-full h-[1px]"></div>
      <div className="flex-1 mt-4 text-center">
        <div className="flex justify-center items-start">
          <img
            className={
              `rounded-full` + `${openSideList ? " w-28 h-28" : " w-11 h-11"}`
            }
            src={authUser?.photoURL}
            alt="profile"
          />
        </div>
        <span className="text-base block">
          {openSideList && authUser?.name}
        </span>
        <span className="text-base block">
          {authUser?.isAdmin ? "Admin" : "User"}
        </span>
        <span className="text-base block">
          {openSideList && authUser?.email}
        </span>
        <div
          className="mt-4 flex justify-center cursor-pointer"
          onClick={handleLogout}
        >
          <MdOutlineLogout className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SideList;
