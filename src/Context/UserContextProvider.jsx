import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const UserContext = React.createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isAuthenticated, setIsAuthenticated] = useState(user ? true : false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
