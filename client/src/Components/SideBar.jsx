import React from "react";
import { NavLink } from "react-router-dom";
import {
  TruckIcon,
  CollectionIcon,
  ShoppingCartIcon,
  CubeIcon,
  PlusIcon,
} from "@heroicons/react/outline";

export const SideBar = ({ page }) => {
  return (
    <div className="bg-white h-screen hidden fixed lg:block lg:w-52 left-0 top-0 px-4 border border-gray-300  text-lg text-gray-700">
      <div className="py-3 border-b border-gray-300 mb-2 flex flex-row gap-2 items-center">
        <CubeIcon className="h-14" />
        <h1 className="leading-snug">LaFlorida Admin</h1>
      </div>
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          className="shadow-md py-3 px-5 bg-gray-100 rounded-md flex flex-row items-center gap-2"
        >
          <CollectionIcon className="h-6" />
          Карточки
        </NavLink>
        <NavLink
          to="/"
          className="hover:shadow-md hover:bg-gray-100 py-3 px-5 rounded-md flex flex-row items-center gap-2"
        >
          <ShoppingCartIcon className="h-6" />
          Товары
        </NavLink>
        <NavLink
          to="/"
          className="hover:shadow-md hover:bg-gray-100 py-3 px-5 rounded-md flex flex-row items-center gap-2"
        >
          <TruckIcon className="h-6" />
          Заказы
        </NavLink>
        <NavLink
          to="/"
          className="hover:shadow-md hover:bg-gray-100 py-3 px-5 rounded-md flex flex-row items-center gap-2"
        >
          <PlusIcon className="h-6" />
          Добавить
        </NavLink>
      </nav>
    </div>
  );
};
