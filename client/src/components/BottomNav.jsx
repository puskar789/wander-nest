import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";

const BottomNav = ({ currentTab, handleTabChange }) => {
  return (
    <div className="shadow shadow-black bg-slate-50 flex justify-center">
      <Tabs
        aria-label="Tabs with icons"
        variant="underline"
        className="flex gap-x-24"
        onActiveTabChange={(tab) => handleTabChange(tab)}
      >
        <Tabs.Item
          active={currentTab === 0}
          title="Map"
          icon={FaMapMarkerAlt}
        ></Tabs.Item>
        <Tabs.Item
          active={currentTab === 1}
          title="Rooms"
          icon={IoBedOutline}
        ></Tabs.Item>
        <Tabs.Item
          active={currentTab === 2}
          title="Add"
          icon={MdAddLocationAlt}
        ></Tabs.Item>
      </Tabs>
    </div>
  );
};

export default BottomNav;
