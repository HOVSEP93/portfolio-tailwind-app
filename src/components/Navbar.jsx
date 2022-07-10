import React, { useState } from "react";
import Logo from "./img/logo.png";
import Moon from "./img/moon.png";

import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#">
            <img src={Logo} className="w-9 " alt="logo" />
          </a>

          <p className="text-2xl font-bold text-indigo-900 cursor-pointer hover:text-indigo-500 dark:text-white">
            YalaCode
          </p>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600  font-bold text-sm uppercase dark:text-gray-100">
          <li className="hover:text-gray-800 cursor-pointer">
            <a href="#">home page</a>
          </li>
          <li className="hover:text-gray-800 cursor-pointer">
            <a href="#about">about me</a>
          </li>
          <li className="hover:text-gray-800 cursor-pointer">
            <a href="#works">service</a>
          </li>
          <li className="hover:text-gray-800 cursor-pointer">
            <a href="#contact">contact us</a>
          </li>
        </ul>

        <img src={Moon} alt="theme" className=" md:block  w-5 cursor-pointer" />

        {!nav && (
          <MenuAlt3Icon
            className="w-5 text-gray-500 cursor-pointer hover:text-gray-800 md:hidden"
            onClick={handleClick}
          />
        )}

        <XIcon
          className={
            !nav ? "hidden" : "w-6 text-white cursor-pointer  md:hidden z-10"
          }
          onClick={handleClose}
        />

        <ul
          className={
            !nav
              ? "hidden"
              : "bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
          }
        >
          <li className="">
            <a href="#">home page</a>
          </li>
          <li className="">
            <a href="#">about me</a>
          </li>
          <li className="">
            <a href="#">service</a>
          </li>
          <li className="">
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
