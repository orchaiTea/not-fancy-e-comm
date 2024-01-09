import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/shopsphere-logo-black.png";
import "../../App.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div>
          <h3>ShopSpere</h3>
        </div>
        <div className="dropdown">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          {/* Dropdown button */}

          <button className="dropdown-btn">
            fashion
            {/* Dropdown arrow */}
          </button>

          {/* Dropdown items */}

          <div className="dropdown-content">
            <Link>Men</Link>
            <Link>Women</Link>
          </div>
        </div>
        <div>
          <NavLink>Electronics</NavLink>
          <NavLink>Jewelery</NavLink>
        </div>
        <div>
          <button>Login</button>
          <button>Signup</button>
          <i>Cart</i>
        </div>
      </nav>
    </div>
  );
}
