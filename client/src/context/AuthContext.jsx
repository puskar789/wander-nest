import { createContext, useContext, useRef, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const mapRef = useRef();

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, mapRef }}>
      {children}
    </AuthContext.Provider>
  );
};
