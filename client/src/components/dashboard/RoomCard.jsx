import React from "react";

const timeAgo = (time) => {
  const createdDate = new Date(time);
  const now = new Date();

  const diffInSeconds = Math.floor((now - createdDate) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} days ago`;
  }
};

const RoomCard = ({ room, idx }) => {
  return (
    <div className="flex justify-center items-center px-16 py-2 gap-2">
      <div className="avatar">
        <div className="w-12 h-12 rounded-lg">
          <img src={room.images[0]} alt="room" />
        </div>
      </div>
      <div className={`py-4 ${idx != 3 ? "border-b-2" : ""}`}>
        <h3 className="text-black font-semibold">{room.title}</h3>
        <h3>{"Added: " + timeAgo(room.createdAt)}</h3>
      </div>
    </div>
  );
};

export default RoomCard;
