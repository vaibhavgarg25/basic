import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../store/Context";

const Registration = () => {
  const [user, setuser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

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
  
  const {storetokeninls}=useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch("http://localhost:3000/routes/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });


      console.log(response);
      const res_data=await response.json()
      console.log(res_data.extraDetails)

      if (response.ok) {
        storetokeninls(res_data.token)
        setuser({ username: "", phone: "", email: "", password: "" });
        navigate('/login')
        toast.success("Registration successfull")
      }
      else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="conatiner flex flex-col mt-32">
        <div className="heading">
          <h1>Registration Form</h1>
        </div>
        <div className="content flex flex-col space-y-5 mt-10">
          <div className="user">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
              className="w-72 text-center h-8"
            />
          </div>
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
          <div className="phone">
            <input
              type="number"
              name="phone"
              placeholder="enter your phno"
              value={user.phone}
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
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
