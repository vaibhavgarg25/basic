import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Context";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Adminupdate = () => {
  const { AuthorizationToken } = useAuth();
  const params=useParams()
  const [user, setuser] = useState({
    username:"",
    email:"",
    phone:""
  });
  

  const getdata = async () => {
    const response = await fetch(`http://localhost:3000/admin/users/${params.userId}`, {
      method: "GET", 
      headers: {
        Authorization: AuthorizationToken,
      },
    });
    const data = await response.json();
    // console.log(data)
    setuser({
      username:data.username,
      email:data.email,
      phone:data.phone,
    });
    // console.log(user)
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleinput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
        const respone=await fetch(`http://localhost:3000/admin/users/update/${params.userId}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                Authorization:AuthorizationToken,
            },
            body:JSON.stringify(user)
        })
        if(respone.ok){
            toast.success("updated successfully")
        }
        else{
            toast.error("update unsuccessfull")
        }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
    <h1>Update</h1>
    <div className="mt-40 flex flex-col gap-4">
      <div className="">
        <label htmlFor="name" className="mr-4">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          value={user.username}
          className="w-56 z-20"
          onChange={handleinput}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mr-4">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          value={user.email}
          className="w-56"
          onChange={handleinput}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="mr-4">Mobile</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          autoComplete="off"
          className="w-56"
          value={user.phone}
          onChange={handleinput}
          required
        />
      </div>
      <div className="submit">
        <button
          type="submit"
          className="w-72 h-8 text-center"
          onClick={handlesubmit}
        >
          Update Now
        </button>
      </div>
    </div>
    </>
  );
};

export default Adminupdate;
