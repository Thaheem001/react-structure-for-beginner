import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config";

const Nav = () => {
  const data = [
    { title: "Home", path: ROUTES.HOME },
    { title: "About", path: ROUTES.ABOUT },
    { title: "Contact Us", path: ROUTES.CONTACT },
  ];

  return (
    <div>
      <ul className="flex gap-5">
        {data.map(({ title, path }, index) => {
          return (
            <li key={"nav-link-item" + index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
                to={path}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
