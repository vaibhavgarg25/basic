import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

const Admin = () => {

    return (
        <>
      <header className="w-screen fixed  bg-transparent top-0 left-0 z-20">
        <div className="container flex justify-between items-center px-6  border-2 border-[#646cff] w-40 h-screen">
          <nav>
            <ul className="flex flex-col space-y-8 text-lg text-white">
              <li>
                <NavLink className="underline-hover" to="/admin/user">
                  User
                </NavLink>
              </li>
              <li>
                <NavLink className="underline-hover" to="/admin/service">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="underline-hover" to="/admin/contact">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="underline-hover" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        <Outlet/>
      </>
    );
  };

export default Admin
