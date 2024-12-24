import React, { useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useAuthContext } from "../../context/AuthContext";
import SliderInput from "./SliderInput";
import useGlobal from "../../zustand/useGlobal";

const SideBar = () => {
  const { containerRef } = useAuthContext();
  const { rooms, setFilteredRooms, filterLng, filterLat, filterPrice } =
    useGlobal();

  // filtering the rooms
  useEffect(() => {
    const filtered = rooms.filter((room) => {
      // only price filter
      if (filterLng === 0 && filterLat === 0 && room.price <= filterPrice) {
        return true;
      }
      if (filterLng === 0 && filterLat === 0 && room.price > filterPrice) {
        return false;
      }

      // price and location filter
      const lngDiff = Math.abs(room.lng - filterLng);
      const latDiff = Math.abs(room.lat - filterLat);

      if (lngDiff <= 1 && latDiff <= 1) {
        if (filterPrice < 50) {
          return room.price <= filterPrice;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });

    setFilteredRooms(filtered);
  }, [filterLng, filterLat, filterPrice]);

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
