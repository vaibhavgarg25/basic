import React from 'react'
import { Navigate, NavLink,Outlet } from 'react-router-dom';
import { useAuth } from '../store/Context';

const Admin = () => {
  const {user,isloading}=useAuth()
  if(isloading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
        <>
      <header className="w-screen fixed  bg-transparent top-0 left-0 z-20">
        <div className="container flex justify-between px-6 mt-10  border-[#646cff]  h-screen">
          <nav>
            <ul className="flex space-x-8 text-lg text-white">
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
