import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./Context/UserContextProvider";
import Logout from "./Pages/Logout/Logout";
import LoginRequired from "./Components/LoginRequired/LoginRequired";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(UserContext);

  console.log("isAuthenticated", isAuthenticated);
  
  return (
    <>
      {isAuthenticated ? <Outlet /> : <LoginRequired />}
    </>
  );
}

export default ProtectedRoute;
