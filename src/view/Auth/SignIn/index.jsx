import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("isAuthenticate", true);
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <h1>Please Sign In</h1>
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
};

export default SignIn;
