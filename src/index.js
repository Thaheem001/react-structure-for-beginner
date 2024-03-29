import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    </>
);
