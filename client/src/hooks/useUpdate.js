import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const update = async (newName, newPhotoURL) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/update`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authUser.token}`,
          },
          body: JSON.stringify({ newName, newPhotoURL }),
        }
      );

      const data = await res.json();
      // console.log(data);
      if (!data.success) {
        throw new Error(data.message);
      }

      const { name, photoURL, token } = data.result;
      // console.log(name, photoURL, token);
      const updatedUser = { ...authUser, name, photoURL, token };
      toast.success("Updated successfully");
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, update };
};

export default useUpdate;
