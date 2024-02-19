import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <div className="header sticky z-50 top-0 px-2 py-3 bg-gray-200">
      <nav className="navbar h-fit">
        <div>
          <h3 className="pl-2 text-rose-600 font-semibold">ShopSphere</h3>
        </div>
        <div className="">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        </div>
        <div>
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
        <div className="navbar-rt-side">
          <NavLink
            to="/login"
            className="pr-3 hover:text-rose-600 font-medium active:text-pink-500 focus:ring-white active:text-white"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-3 py-2 rounded bg-rose-600 text-white font-medium hover:bg-rose-700 active:bg-rose-400"
          >
            Signup
          </NavLink>
          <i class="fa-solid fa-cart-shopping pl-3"></i>
        </div>
      </nav>
    </div>
  );
}
