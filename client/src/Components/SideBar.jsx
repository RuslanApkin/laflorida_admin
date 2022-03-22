import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="bg-gray-100 h-screen fixed lg:w-60 left-0 top-0">
      <nav className="flex flex-col">
        {/* <NavLink>Заголовок 1</NavLink>
        <NavLink>Заголовок 2</NavLink>
        <NavLink>Заголовок 3</NavLink>
        <NavLink>Заголовок 4</NavLink> */}
      </nav>
    </div>
  );
};
