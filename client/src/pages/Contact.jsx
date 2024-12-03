import React from "react";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
import { useAuth } from "../store/Context";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const {user}=useAuth()
  const [userdata,setuserdata]=useState(true)

  const [contact, setcontact] = useState({
    email: "",
    username: "",
    message: "",
  });

  if(userdata && user){
    setcontact({
      email:user.email,
      username:user.username,
      message:"",
    })
    setuserdata(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setcontact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response=await fetch('http://localhost:3000/routes/contact',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });
      if(response.ok){
        const res_data=await response.json()
        console.log(res_data)
        setcontact({...contact,message:""})
        toast.success("message sent successfully")
      } 
    } catch (error) {
      toast.error(error)
    }
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="conatiner flex flex-col mt-28">
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
        <div className="content flex flex-col space-y-5 mt-10">
          <div className="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={contact.username}
              className="w-72 text-center h-8"
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={contact.email}
              onChange={handleChange}
              className="w-72 text-center h-8"
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              id="message"
              placeholder="enter your message..."
              className="w-72 text-center h-32"
              value={contact.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="submit">
            <button
              type="submit"
              className="w-72 h-8 text-center"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
