import { useState } from "react";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";
import { useAuthContext } from "../context/AuthContext";

const useDeleteRoom = () => {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const { setRooms, setFilteredRooms } = useGlobal();

  const deleteRoom = async (roomId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/room/delete/${roomId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authUser.token}`,
          },
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Room " + roomId + " deleted successfully");
      setRooms(data.result);
      setFilteredRooms(data.result);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteRoom };
};

export default useDeleteRoom;
