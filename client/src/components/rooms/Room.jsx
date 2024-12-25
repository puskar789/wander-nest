import React from "react";

const Room = ({ room }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
      <img src={room.images[0]} alt="room" className="w-full h-auto" />
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
  );
};

export default Room;
