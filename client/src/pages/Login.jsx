import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../store/Context'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const {storetokeninls}=useAuth();
  const navigate=useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch("http://localhost:3000/routes/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data=await response.json()
      console.log(res_data.extraDetails)

      if (response.ok) {
        storetokeninls(res_data.token);
        setuser({ email: "", password: "" });
        navigate('/')
        toast.success("login successfull")
      } 
      else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message) 
      }
    } catch (error) {
      console.log(error);
      toast.error("invalid credentials")
    }
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="conatiner flex flex-col mt-40">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="content flex flex-col space-y-5 mt-10">
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={user.email}
              onChange={handleChange}
              className="w-72 text-center h-8"
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={user.password}
              className="w-72 text-center h-8"
              onChange={handleChange}
            />
          </div>
          <div className="submit">
            <button
              type="submit"
              className="w-72 h-8 text-center"
              onClick={handleSubmit}
            >
              Login Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
