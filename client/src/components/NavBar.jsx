/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./Login";
import { useAuthContext } from "../context/AuthContext";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { Popover } from "flowbite-react";
import useGlobal from "../zustand/useGlobal";
import Profile from "./Profile";
import SideBar from "./sidebar/SideBar";
import toast from "react-hot-toast";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const { setOpenModal } = useGlobal();
  // const handleLogin = () => {
  //   setAuthUser({
  //     name: "John",
  //     photoURL,
  //   });
  // };

  const handleLogout = () => {
    setOpenModal(false);
    setAuthUser(null);
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully");
  };

  const content = (
    <div className="w-36 text-gray-500 dark:text-gray-400 shadow-2xl">
      <div className="flex flex-col p-4 gap-4">
        {!authUser?.google && <Profile />}
        <div className="flex gap-3 cursor-pointer">
          <MdDashboard className="text-2xl" />
          <Link className="font-semibold outline-none" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-3 cursor-pointer" onClick={handleLogout}>
          <MdOutlineLogout className="text-2xl" />
          <h3 className="font-semibold">Logout</h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-blue-600 flex justify-between px-16 py-4 shadow-xl">
        <div className="flex justify-center items-center gap-4">
          <SideBar />
          <h1 className="text-white font-semibold text-xl">
            Welcome To Wander Nest
          </h1>
        </div>
        {!authUser && (
          <div className="flex gap-2 cursor-pointer p-1">
            <Login />
          </div>
        )}
        {authUser && (
          <div className="flex gap-4">
            <button>
              <IoMdMail className="text-white text-3xl" />
            </button>
            <button>
              <IoIosNotifications className="text-white text-3xl" />
            </button>
            <Popover content={content} placement="bottom">
              <img
                className="w-8 h-8 rounded-full"
                src={authUser.photoURL}
                alt="profile"
              />
            </Popover>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
