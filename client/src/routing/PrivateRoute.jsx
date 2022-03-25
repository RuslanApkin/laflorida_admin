import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { SideBar } from "../Components/SideBar";

export default function PrivateRoute({ children, page }) {
  const auth = localStorage.getItem("authToken");
  let location = useLocation();

  return auth ? (
    <div className="flex flex-row bg-gray-100 dark:bg-gray-800">
      <SideBar page={page} />
      <div className="block lg:w-52 shrink-0"></div>
      <div className="min-h-screen text-gray-700 dark:text-gray-200 sm:px-6 lg:px-8 pt-4 mx-auto w-full max-w-6xl px-4">
        {children}
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
