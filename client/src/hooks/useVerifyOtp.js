import { useState } from "react";
import toast from "react-hot-toast";

const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);

  const verifyOtp = async (email, otp, setOpenOtpPage) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/otp/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);
      return data.success; // so that if verification is successful we can register the user
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setOpenOtpPage(false);
    }
  };

  return { loading, verifyOtp };
};

export default useVerifyOtp;
