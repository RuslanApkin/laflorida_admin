import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = localStorage.getItem("authToken");
  let location = useLocation();

  return auth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
