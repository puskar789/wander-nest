import { useState } from "react";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";

const useGetRooms = () => {
  const [loading, setLoading] = useState(false);
  const { setRooms, setFilteredRooms } = useGlobal();

  const getRooms = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/room/get`
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      setRooms(data.result);
      setFilteredRooms(data.result);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getRooms };
};

export default useGetRooms;
