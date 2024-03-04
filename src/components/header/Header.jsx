import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import CartBadge from "../CartBadge";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header sticky z-50 top-0 px-2 py-3 bg-gray-200">
      <nav className="flex justify-around">
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none mr-2"
        >
          <svg
            className="w-8 h-8 text-gray-800 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div>
          <h1 className="pl-2 text-rose-600 font-semibold text-xl">
            ShopSphere
          </h1>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } px-4 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white`
            }
          >
            Home
          </NavLink>

          {/* Dropdown button */}
          <div className="dropdown dropdown-btn inline-block px-4">
            <button className="inline-flex hover:text-rose-600 font-medium">
              fashion
              {/* Dropdown arrow */}
              <svg
                className="w-4 h-4 ml-2 -mr-1 inline-flex self-center hover:rotate-180 transition delay-150 duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown items */}
            <div className="dropdown-content rounded bg-gray-200 border-4 py-1 px-3 shadow-lg mt-2 ring-1 ring-black ring-opacity-5">
              <Link
                to="/men's section"
                className="block py-2 px-2 text-sm hover:text-rose-600 font-medium active:bg-pink-700 focus:ring-pink-300 active:text-white rounded"
              >
                Men
              </Link>
              <Link
                to="/women's section"
                className="inline-block py-2 px-2 text-sm hover:text-rose-600 font-medium active:bg-pink-700 focus:ring-pink-300 active:text-white rounded"
              >
                Women
              </Link>
            </div>
          </div>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } px-4 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white pl-3`
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="/jewelery"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } px-4 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white`
            }
          >
            Jewelery
          </NavLink>
        </div>

        <div className="navbar-rt-side flex items-center">
          <CartBadge
            link="/cart"
            className="hover:text-green-500 active:color-green-600 active:text-white"
          />
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-200 flex flex-col items-start">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-gray-800 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } pr-3 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white`
            }
          >
            Home
          </NavLink>

          {/* Dropdown button */}
          <div className="dropdown dropdown-btn inline-block">
            <button className="inline-flex px-3 hover:text-rose-600 font-medium">
              fashion
              {/* Dropdown arrow */}
              <svg
                className="w-4 h-4 ml-2 -mr-1 inline-flex self-center hover:rotate-180 transition delay-150 duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown items */}
            <div className="dropdown-content rounded bg-gray-200 border-4 py-1 px-3 shadow-lg mt-2 ring-1 ring-black ring-opacity-5">
              <Link
                to="/men's section"
                className="block py-2 px-2 text-sm hover:text-rose-600 font-medium active:bg-pink-700 focus:ring-pink-300 active:text-white rounded"
              >
                Men
              </Link>
              <Link
                to="/women's section"
                className="inline-block py-2 px-2 text-sm hover:text-rose-600 font-medium active:bg-pink-700 focus:ring-pink-300 active:text-white rounded"
              >
                Women
              </Link>
            </div>
          </div>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } pr-3 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white`
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="/jewelery"
            className={({ isActive }) =>
              `${
                isActive ? "text-rose-600" : "text-black"
              } pr-3 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white`
            }
          >
            Jewelery
          </NavLink>
        </div>
      )}
    </div>
  );
}
