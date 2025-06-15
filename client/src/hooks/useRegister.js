import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { setOpenModal } = useGlobal();

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();
      // console.log(data);
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("User registered successfully");
      setOpenModal(false);
      localStorage.setItem("currentUser", JSON.stringify(data.result));
      setAuthUser(data.result);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;
