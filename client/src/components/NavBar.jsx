/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./Login";

import { useAuthContext } from "../context/AuthContext";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { Popover } from "flowbite-react";
import useGlobal from "../zustand/useGlobal";
import Profile from "./Profile";

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
  };

  const content = (
    <div className="w-32 text-gray-500 dark:text-gray-400 shadow-2xl">
      <div className="flex flex-col p-4 gap-4">
        {!authUser?.google && <Profile />}
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
        <div className="flex gap-4">
          <button>
            <FiAlignJustify className="text-white text-2xl" />
          </button>
          <h1 className="text-white font-semibold text-xl">You Are Welcome</h1>
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
