import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../store/Context";

const Service = () => {
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
        <div className="nav">
          <Navbar />
        </div>
        <div className="section-services">
          <div className="container">
            <h1 className="main-heading relative top-10 ">Services</h1>
          </div>
          <div className="container relative top-20 grid grid-cols-3 space-y-10 text-xl">
            {servicedata.map((element, index) => {
              const { service, description, provider, price } = element;
              return (
                <div
                  className="card mt-10 border-2 w-96 h-80 rounded-lg"
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
      

export default Service;
