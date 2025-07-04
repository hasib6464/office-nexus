import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/addServices">Add Services</NavLink>
      </li>
      <li>
        <NavLink to="/locations">Locations</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <a className=" text-xl">
            <span className="font-bold">Office</span>Nexus
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-lg">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn  bg-indigo-900 text-[15px] text-white px-4 py-6">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
