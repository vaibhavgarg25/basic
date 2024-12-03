import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Context";

const Navbar = () => {
  const {isLoggedIn} = useAuth();

  return (
    <header className="w-screen p-4 fixed  bg-transparent top-0 left-0 z-20">
      <div className="container flex justify-between items-center px-6">
        <div className="logo-brand flex items-center">
          <NavLink to="/" className="flex">
            <span className="text-3xl">Practise</span>
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg text-white">
            <li>
              <NavLink className="underline-hover" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-hover" to="/service">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="underline-hover" to="/contactus">
                Contact Us
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink className="underline-hover" to="/logout">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink className="underline-hover" to="/registration">
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink className="underline-hover" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
