import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../config";

const Public = () => {
  const isAuthenticate = localStorage.getItem("isAuthenticate") ?? false;
  return <>{isAuthenticate ? <Navigate to={ROUTES.HOME} /> : <Outlet />}</>;
};

export default Public;
