import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useGlobal from "../zustand/useGlobal";

const useUpdateStatus = () => {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthContext();
  const { setUsers } = useGlobal();

  const updateStatus = async (
    isAdmin,
    active,
    userId,
    setRowId,
    setSuccess
  ) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/updatestatus/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authUser.token}`,
          },
          body: JSON.stringify({ isAdmin, active }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(`Status of user ${data.result._id} updated successfully`);
      setRowId(null);
      setSuccess(true);
      setUsers(data.result.users);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateStatus };
};

export default useUpdateStatus;
