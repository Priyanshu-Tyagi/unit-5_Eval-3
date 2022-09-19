import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequiredAuth;
