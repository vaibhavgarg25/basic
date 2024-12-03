import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container flex flex-col space-y-6">
        <div className="error">
          <h1 className="text-9xl font-bold text-[#646cffaa]">404</h1>
        </div>
        <div className="message text-center space-y-3">
          <h4 className="text-3xl underline underline-offset-8">sorry! page not found </h4>
          <p className="text-xl">
            Oops! It seems like the page you're trying to access doesn't exist.
            <br></br>
            If you beileve there's an issue,feel free to report it,and we'll
            look into it.
          </p>
        </div>
        <div className="links flex space-x-8 justify-center">
          <button>
            <NavLink to="/">Return Home</NavLink>
          </button>
          <button>
            <NavLink to="/contactus">Report Problem</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
