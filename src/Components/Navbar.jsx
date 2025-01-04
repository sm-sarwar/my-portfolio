import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="font-semibold text-sm" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-sm" to="/contact">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-sm" to="/dashboard">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-sm" to="/menu">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-white max-w-screen-xl mx-auto py-5">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" uppercase menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-28" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex bg-gray-900">
          <ul className=" uppercase menu-horizontal px-1 space-x-12 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a
            href="https://drive.google.com/yourfilelink"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-[#00EEFF] border-0 hover:bg-[#00ccff]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
