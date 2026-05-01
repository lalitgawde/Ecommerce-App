import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./Context/UserContextProvider";
import Logout from "./Pages/Logout/Logout";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <>
      {isAuthenticated ? <Outlet /> : <Navigate to="/admin/logout" replace />}
    </>
  );
}

export default ProtectedRoute;
