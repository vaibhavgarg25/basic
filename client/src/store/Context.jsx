import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [user,setuser]=useState("")
  const [servicedata,setdata]=useState("")
  
  const storetokeninls = (token) => {
      setToken(token);
      return localStorage.setItem("token", token);
    };
    
    let isLoggedIn = !!Token;

    const LogoutUser = () => {
      toast.success("Successfully Logged Out")
        setToken("");
        // window.location.reload();
        return localStorage.removeItem("token");
    };
    

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/routes/user", {
        method: "GET",
        headers: {
            Authorization:`Bearer ${Token}`
        }
      });
      if(response.ok){
        const data=await response.json()
        console.log(data)
        console.log("user data",data.userdata)
        setuser(data.userdata);
    }
    } catch (error) {
      console.log("error fetching the data");
    }
    
  };

  const getservice=async()=>{
    try {
      const response=await fetch('http://localhost:3000/routes/service',{
        method:"GET",
      })
      if(response.ok){
        const data=await response.json()
        console.log(data)
        setdata(data)
      }
    } catch (error) {
      console.log(`error : ${error}`)      
    }
  }

  useEffect(() => {
    getservice();
    userAuthentication();
  }, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokeninls, LogoutUser ,user ,servicedata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
