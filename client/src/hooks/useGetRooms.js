import { useState } from "react";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";

const useGetRooms = () => {
  const [loading, setLoading] = useState(false);
  const { setRooms } = useGlobal();

  const getRooms = async () => {
    setLoading(true);
    try {
      const res = await fetch("api/room/get");

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      setRooms(data.result);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getRooms };
};

export default useGetRooms;
