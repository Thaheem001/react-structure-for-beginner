import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES_LIST } from "../config/route_list";
import Private from "./private/Private";
import Public from "./public/Public";
import { ROUTES } from "../config";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Public />}>
          {ROUTES_LIST.map(
            ({ path, element, isAuth = false }) =>
              !isAuth && (
                <Route
                  key={"route-link--" + path}
                  path={path}
                  element={element}
                />
              )
          )}
        </Route>

        <Route element={<Private />}>
          {ROUTES_LIST.map(
            ({ path, element, isAuth = false }) =>
              isAuth && (
                <Route
                  key={"route-link--" + path}
                  path={path}
                  element={element}
                />
              )
          )}
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
