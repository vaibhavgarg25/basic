import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contactuser = () => {
  const [user, setuser] = useState([]);
  const { AuthorizationToken } = useAuth();
  // console.log(AuthorizationToken)
  const getdata = async () => {
    const response = await fetch("http://localhost:3000/admin/contact", {
      method: "GET",
      headers: {
        Authorization: AuthorizationToken,
      },
    });
    const data = await response.json();
    console.log(data)
    setuser(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser=async(id)=>{
    const response=await fetch(`http://localhost:3000/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:AuthorizationToken,
        },
    })
    const data=await response.json()
    console.log(`user after deletion:${data}`)
    if(response.ok){
      toast.success("Contact deleted successfully")
      getdata()
    }
}

 
  return (
    <>
      <div className="container mt-16">
        <h1>Admin Contact Data</h1>
      </div>
      <div className="table absolute left-80 p-12">
        <table className="">
          <thead className="">
            <tr className="text-lg">
              <th>Name</th>
              <th className="relative left-5">Email</th>
              <th className="relative left-14">Message</th>
              <th className='relative left-24'>Delete</th>
            </tr>
          </thead>
          <tbody className="h-screen relative">
            {user.map((curr, index) => {
              return (
                <tr key={index}>
                  <td>{curr.username}</td>
                  <td className="relative left-5">{curr.email}</td>
                  <td className="relative left-16 text-wrap w-40">{curr.message}</td>
                  <td  className='relative left-24 z-20'><button onClick={()=>deleteuser(curr._id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contactuser;
