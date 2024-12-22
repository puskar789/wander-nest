import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import useGlobal from "../zustand/useGlobal";

const Protected = () => {
  const { setOpenModal } = useGlobal();

  return (
    <div className="mx-10 my-6 border-2 border-red-600 w-full h-1/2">
      <div className="m-4 flex gap-2">
        <MdErrorOutline className="text-red-600 text-2xl" />
        <span className="text-red-600 font-bold">Forbidden Access</span>
      </div>
      <div className="flex gap-4 m-4 px-8">
        <span className="text-gray-600 font-semibold">
          Please login or register to access this page
        </span>
        <button
          className="flex gap-1 px-2 py-1 border border-blue-500 text-blue-500 font-semibold shadow-md rounded-md hover:bg-slate-100 active:border-2 "
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <IoIosLock className="text-xl" />
          <span className="text-sm">LOGIN</span>
        </button>
      </div>
    </div>
  );
};

export default Protected;
