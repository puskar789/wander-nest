import { useState } from "react";
import toast from "react-hot-toast";

const useGetOtp = () => {
  const [loading, setLoading] = useState(false);

  const getOtp = async (email, setOpenOtpPage) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/otp/get-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("OTP sent to " + email);
    } catch (error) {
      toast.error(error.message);
      setOpenOtpPage(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getOtp };
};

export default useGetOtp;
