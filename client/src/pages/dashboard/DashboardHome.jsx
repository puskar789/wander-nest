import React, { useEffect, useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidBuildingHouse } from "react-icons/bi";
import useGlobal from "../../zustand/useGlobal";
import useGetUsers from "../../hooks/useGetUsers";
import UserCard from "../../components/dashboard/UserCard";
import RoomCard from "../../components/dashboard/RoomCard";
import PieRoomsCost from "../../components/dashboard/PieRoomsCost";
import { Area } from "recharts";
import AreaRoomsUsers from "../../components/dashboard/AreaRoomsUsers";
import useGetRooms from "../../hooks/useGetRooms";

const DashboardHome = () => {
  const { users, rooms } = useGlobal();
  const { getUsers } = useGetUsers();
  const [newUsers, setNewUsers] = useState([]);
  const [newRooms, setNewRooms] = useState([]);
  const { getRooms } = useGetRooms();

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers();
    };

    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      await getRooms();
    };

    if (rooms.length === 0) {
      fetchRooms();
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const newUsers = users.slice(0, Math.min(users.length, 4));
      setNewUsers(newUsers);
    }
  }, [users]);

  useEffect(() => {
    if (rooms.length > 0) {
      const newRooms = rooms.slice(0, Math.min(rooms.length, 4));
      setNewRooms(newRooms);
    }
  }, [rooms]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6">
      <div className="text-center rounded-md shadow-lg border-2 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-black">Total Users</h1>
        <div>
          <MdPeopleAlt className="inline-block text-9xl" />
          <span className="text-black text-5xl">{users.length}</span>
        </div>
      </div>
      <div className="text-center rounded-md shadow-lg border-2 flex flex-col justify-center items-center">
        <h1 className="text-black text-5xl">Total Rooms</h1>
        <div>
          <BiSolidBuildingHouse className="inline-block text-9xl" />
          <span className="text-black text-5xl">{rooms.length}</span>
        </div>
      </div>
      <div className="rounded-md shadow-lg border-2 col-span-2">
        <PieRoomsCost />
      </div>
      <div className="rounded-md shadow-lg border-2 col-span-2">
        <AreaRoomsUsers />
      </div>
      <div className="row-span-3 rounded-md shadow-lg border-2 row-start-1 col-start-3">
        <h1 className="mt-4 mb-2 text-center text-black font-semibold text-xl">
          Recently Added Users
        </h1>
        {newUsers.length > 0 &&
          newUsers.map((user, idx) => (
            <UserCard key={idx} user={user} idx={idx} />
          ))}
        <div className="mx-6 my-8 h-[1px] bg-slate-300"></div>
        <h1 className="my-2 text-center text-black font-semibold text-xl">
          Recently Added Rooms
        </h1>
        {newRooms.length > 0 &&
          newRooms.map((room, idx) => (
            <RoomCard key={idx} room={room} idx={idx} />
          ))}
      </div>
    </div>
  );
};

export default DashboardHome;
