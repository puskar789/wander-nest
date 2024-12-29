import React, { useEffect, useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidBuildingHouse } from "react-icons/bi";
import useGlobal from "../../zustand/useGlobal";
import useGetUsers from "../../hooks/useGetUsers";
import UserCard from "../../components/dashboard/UserCard";
import RoomCard from "../../components/dashboard/RoomCard";

const DashboardHome = () => {
  const { users, rooms } = useGlobal();
  const { getUsers } = useGetUsers();
  const [newUsers, setNewUsers] = useState([]);
  const [newRooms, setNewRooms] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers();
    };

    fetchUsers();
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
      <div className="max-h-52 text-center p-8 rounded-md shadow-lg border-2">
        <h1 className="text-3xl text-black">Total Users</h1>
        <MdPeopleAlt className="inline-block text-8xl" />
        <span className="text-black text-3xl">25</span>
      </div>
      <div className="max-h-52 text-center p-8 rounded-md shadow-lg border-2">
        <h1 className="text-black text-3xl">Total Rooms</h1>
        <BiSolidBuildingHouse className="inline-block text-8xl" />
        <span className="text-black text-3xl">25</span>
      </div>
      <div className="row-span-3 rounded-md shadow-lg border-2">
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
