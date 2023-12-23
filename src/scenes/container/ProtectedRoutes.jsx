import React from "react";

// React Router
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isUserAuthenticated = localStorage.getItem("submitted") === "true";

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
