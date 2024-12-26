import React, { useState } from "react";
import Room from "./Room";
import { IoMdClose } from "react-icons/io";
import useGlobal from "../../zustand/useGlobal";

const RoomCard = ({ room }) => {
  const { selectedRoom, setSelectedRoom } = useGlobal();

  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        <img
          src={room.images[0]}
          alt="room"
          className="w-full h-auto"
          onClick={() => setSelectedRoom(room)}
        />
        <div className="absolute top-0 w-full flex justify-between items-center bg-gradient-to-b from-black/75 to-transparent px-4 py-2">
          <span className="text-white font-semibold">
            {room.price === 0 ? "Free Stay" : `$${room.price}`}
          </span>
          <div className="tooltip" data-tip={room.userName}>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={room.userPhoto} alt="user" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-between items-center bg-black/50 px-4 py-2">
          <span className="text-white font-semibold">{room.title}</span>
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform transform ${
          room._id === selectedRoom?._id ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        <button
          onClick={() => setSelectedRoom(null)}
          className="absolute top-2 right-4 p-2 rounded-full"
        >
          <IoMdClose className="text-3xl" />
        </button>
        <Room room={room} />
      </div>
    </>
  );
};

export default RoomCard;
