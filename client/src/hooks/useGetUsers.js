import { useState } from "react";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";
import { useAuthContext } from "../context/AuthContext";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const { setUsers } = useGlobal();
  const { authUser } = useAuthContext();
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/getusers`,
        {
          method: "GET",
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

      setUsers(data.result);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getUsers };
};

export default useGetUsers;
