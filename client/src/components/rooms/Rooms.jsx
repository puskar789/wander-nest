import React from "react";
import useGlobal from "../../zustand/useGlobal";
import Room from "./Room";

const Rooms = () => {
  const { filteredRooms } = useGlobal();
  return (
    <div className="m-8 w-full grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {filteredRooms.map((room) => (
        <Room room={room} key={room._id} />
      ))}
    </div>
  );
};

export default Rooms;
