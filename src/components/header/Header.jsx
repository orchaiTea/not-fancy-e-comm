import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/shopsphere-logo-black.png";

export default function Header() {
  const [isDropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setdropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="flex justify-between items-center space-x-4 max-w-screen-xl">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} className="px-3 my-2 h-12" alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}

          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-gray-800"
              } block py-2 pr-4 pl-3  hover:text-gray-600`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-gray-800"
              } block py-2 pr-4 pl-3  hover:text-gray-600`
            }
          >
            About
          </NavLink>

          {/* Dropdown button */}
          <div className="inline-block pl-0 py-2 pr-4 pl-3 relative text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex justify-start items-center px-4 py-2 hover:text-gray-600"
            >
              Fashion
              {/* Dropdown arrow */}
              <svg
                className="w-4 h-4 ml-2 -mr-1"
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

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {/* Dropdown items */}
                  <NavLink
                    to="/men's section"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Men
                  </NavLink>
                  <NavLink
                    to="/women's section"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Women
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Links */}

        {/* Login, Signup, Cart Icon */}
        <div className="flex justify-items-end space-x-4">
          <button className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600">
            Login
          </button>

          <button className="py-2 pr-4 pl-3 text-gray-800 hover:text-gray-600">
            Signup
          </button>

          <div className="inline-block text-gray-800 py-2 pr-4 pl-3 hover:text-gray-600">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
