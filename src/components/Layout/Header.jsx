import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../config";
import Nav from "./Nav";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticate");
    navigate(ROUTES.AUTH.SIGN_IN);
  };

  return (
    <header className="flex justify-around items-center bg-gray-400 p-5 sticky top-0 z-50 ">
      <div className="flex items-center gap-x-10 w-full">
        <div className="logo">
          <Link to={ROUTES.HOME}>
            <img
              src="/assets/images/logo.png"
              alt="Logo_Image"
              className="w-[60px] h-auto object-contain rounded-full "
              draggable="false"
            />
          </Link>
        </div>
        <Nav />
      </div>
      <div className="logout-action">
        <button
          className="bg-white p-2 rounded-lg whitespace-nowrap "
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
