import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";

const useAddRoom = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();
  const {
    setImages,
    setTitle,
    setDescription,
    setPrice,
    setRadio,
    setLng,
    setLat,
  } = useGlobal();

  const addRoom = async (
    lng,
    lat,
    price,
    title,
    description,
    images,
    handleTabChange
  ) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/room/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authUser?.token}`,
          },
          body: JSON.stringify({ lng, lat, price, title, description, images }),
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Room added successfully");
      setImages([]);
      setTitle("");
      setDescription("");
      setPrice("");
      setRadio(false);
      setLng(0);
      setLat(0);
      handleTabChange(0);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addRoom };
};

export default useAddRoom;
