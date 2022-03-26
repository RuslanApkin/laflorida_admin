import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TruckIcon,
  CollectionIcon,
  ShoppingCartIcon,
  CubeIcon,
  PlusIcon,
  ColorSwatchIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { classNames } from "./shared/Utils";

const navTabs = [
  { name: "Карточки", url: "/cards" },
  { name: "Заказы", url: "/orders" },
  { name: "Категории", url: "/categories" },
  { name: "Товары", url: "/list" },
  { name: "Добавить", url: "/add" },
];

export const SideBar = ({ page }) => {
  const dark = <SunIcon className="h-6 w-6" />;
  const light = <MoonIcon className="h-6 w-6" />;
  const colorTheme =
    localStorage.getItem("color-theme") === "dark" ? dark : light;
  const [theme, setTheme] = useState(colorTheme);

  return (
    <div className="bg-white h-screen hidden fixed lg:block lg:w-52 left-0 top-0 px-4 border border-gray-300  text-lg text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900">
      <div className="py-3 border-b border-gray-300 mb-2 flex flex-row gap-2 items-center justify-center select-none">
        <CubeIcon className="h-14" />
        <h1 className="leading-snug font-semibold basis-0">LaFlorida Admin</h1>
      </div>
      <nav className="flex flex-col gap-1">
        {navTabs.map((navTab) => (
          <NavLink
            to={navTab.url}
            className={classNames(
              "py-3 px-5 rounded-md flex flex-row items-center gap-2",
              page === navTab.name
                ? "bg-gray-100 shadow-md hover:text-gray-500 dark:bg-gray-600 dark:hover:text-gray-400"
                : "hover:text-gray-400"
            )}
          >
            <span className="h-6 w-6">
              {
                {
                  Карточки: <ColorSwatchIcon />,
                  Заказы: <TruckIcon />,
                  Категории: <CollectionIcon />,
                  Товары: <ShoppingCartIcon />,
                  Добавить: <PlusIcon />,
                }[navTab.name]
              }
            </span>
            {navTab.name}
          </NavLink>
        ))}
      </nav>
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5 ml-2 mt-4 flex flex-row justify-center items-center gap-1"
        onClick={() => {
          if (localStorage.getItem("color-theme") === "dark") {
            localStorage.setItem("color-theme", "light");
            document.documentElement.classList.remove("dark");
            setTheme(light);
          } else {
            localStorage.setItem("color-theme", "dark");
            document.documentElement.classList.add("dark");
            setTheme(dark);
          }
        }}
      >
        {theme} Тема
      </button>
    </div>
  );
};
