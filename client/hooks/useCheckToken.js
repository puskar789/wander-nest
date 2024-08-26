import { useEffect } from "react";
import { useAuthContext } from "../src/context/AuthContext";
import { jwtDecode } from "jwt-decode";

const useCheckToken = () => {
  const { authUser, setAuthUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const decodedToken = jwtDecode(authUser.token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        setAuthUser(null);
      }
    }
  }, [authUser, setAuthUser]);
};

export default useCheckToken;
