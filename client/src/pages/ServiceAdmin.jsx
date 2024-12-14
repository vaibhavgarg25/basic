import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../store/Context";

const ServiceAdmin = () => {
    const { servicedata } = useAuth();
  
    if (!servicedata || servicedata.length === 0) {
      return (
        <div className="container text-center mt-20">
          <h1 className="text-2xl font-bold">Loading Services...</h1>
        </div>
      );
    }
  
    return (
      <>
        <div className="section-services relative">
          <div className="container">
            <h1 className="main-heading relative top-10 ">Services</h1>
          </div>
          <div className="container relative top-20 grid grid-cols-3 space-y-10 text-xl">
            {servicedata.map((element, index) => {
              const { service, description, provider, price } = element;
              return (
                <div
                  className="card mt-10 border-2 w-96 h-96 rounded-lg"
                  key={index}
                >
                  <div className="details text-wrap text-lg flex flex-col">
                    <h2 className="text-2xl font-semibold mb-5">{service}</h2>
                    <div className="flex flex-col gap-5 text-left">
                      <p>
                        <span className="font-medium">Description: </span>{" "}
                        {description}
                      </p>
                      <p>
                        <span className="font-medium">Provider: </span>
                        {provider}
                      </p>
                      <p>
                        <span className="font-medium">Price: </span>
                        {price}
                      </p>
                      <div className="flex justify-evenly mt-8">
                      <p>
                        <button className="w-24 h-12">Edit</button>
                      </p>
                      <p>
                        <button className="w-24 h-12" onClick={()=>deleteuser(curr._id)}>Delete</button>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
      

export default ServiceAdmin;
