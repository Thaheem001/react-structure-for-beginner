import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../config";
import Layout from "../../layout";

const Private = () => {
  const isAuthenticate = localStorage.getItem("isAuthenticate") ?? false;

  return (
    <>
      {isAuthenticate ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to={ROUTES.AUTH.SIGN_IN} />
      )}
    </>
  );
};

export default Private;
