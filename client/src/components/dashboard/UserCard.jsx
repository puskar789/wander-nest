import React from "react";

const UserCard = ({ user, idx }) => {
  const dateObject = new Date(user.createdAt);

  const date = dateObject.toISOString().split("T")[0];
  const time = dateObject.toISOString().split("T")[1].split(".")[0];

  return (
    <div className="flex justify-center items-center px-16 py-2 gap-2">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full">
          <img src={user.photoURL} alt="user" />
        </div>
      </div>
      <div className={`py-4 ${idx != 3 ? "border-b-2" : ""}`}>
        <h3 className="text-black font-semibold">{user.name}</h3>
        <h3>{"Time Created: " + date + ", " + time}</h3>
      </div>
    </div>
  );
};

export default UserCard;
