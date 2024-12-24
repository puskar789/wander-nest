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
  const containerRef = useRef();

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, mapRef, containerRef }}
    >
      {children}
    </AuthContext.Provider>
  );
};
