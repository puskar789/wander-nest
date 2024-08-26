import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../../context/AuthContext";

const GoogleOneTapLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [disable, setDisable] = useState(false);

  const handleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);

    // console.log(token);

    const { sub: id, email, name, picture: photoURL } = decodedToken;
    setAuthUser({ id, email, name, photoURL, token, google: true });

    localStorage.setItem(
      "currentUser",
      JSON.stringify({ id, email, name, photoURL, token, google: true })
    );
  };

  const handleGoogleLogin = () => {
    setDisable(true);

    try {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });

      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error("Try to clear the cookies or try again later!");
        }

        if (
          notification.isSkippedMoment() ||
          notification.isDismissedMoment()
        ) {
          setDisable(false);
        }
      });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <button
      className="flex gap-2 bg-white border border-blue-500 px-4 py-2 text-blue-500 font-semibold text-sm rounded-lg shadow-lg hover:bg-gray-100 active:border-2"
      disabled={disable}
      onClick={handleGoogleLogin}
    >
      <FaGoogle className="text-xl" />
      LOGIN WITH GOOGLE
    </button>
  );
};

export default GoogleOneTapLogin;
