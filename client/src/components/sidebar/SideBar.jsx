import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useAuthContext } from "../../context/AuthContext";
import SliderInput from "./SliderInput";

const SideBar = () => {
  const { containerRef } = useAuthContext();
  return (
    <div className="flex-1 drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <FiAlignJustify className="text-white text-4xl" />
        </label>
      </div>
      <div className="drawer-side w-full">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-80 p-4">
          <span className="text-black text-lg font-semibold">
            Apply Search or Filter:
          </span>
          <div className="mt-8" ref={containerRef}></div>
          <SliderInput />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
