import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/"}>
          <img
            src="/images/LogoTransparent.png"
            className="object-cover"
            width={67}
          />
        </Link>
        <nav className="md:ml-auto space-x-5 flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            cclassName={({ isActive }) =>
              `${isActive ? "bg-green-500 text-white p-3" : "p-3"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/preview"}
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-3 text-white" : "p-3"
            }
          >
            Preview
          </NavLink>
          <NavLink
            to={"/file"}
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-3 text-white" : "p-3"
            }
          >
            Files
          </NavLink>
          <NavLink
            to={"/doctor"}
            className={({ isActive }) =>
              isActive ? "bg-green-500 p-3 text-white" : "p-3"
            }
          >
            Doctor
          </NavLink>

          <Link
            to={"/login"}
            className="inline-flex items-center ml-5 bg-gray-200 border-0 p-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="inline-flex items-center bg-gray-200 border-0 p-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0"
          >
            SignUp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
