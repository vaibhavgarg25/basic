/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../store/Context";

const Home = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
 
  useEffect(() => {
    if (user?.username) {
      setName(user.username);
    }
  }, [user]);

  return (
    <div>
      <div className="header top-0">
        <Navbar />
      </div>
      <h1 className="mt-52">Welcome! {name}</h1>
    </div>
  );
};

export default Home;
