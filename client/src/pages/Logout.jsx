import React,{useEffect} from 'react'
import { useAuth } from '../store/Context';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Logout = () => {

    const {LogoutUser}=useAuth()

    useEffect(() => {
      LogoutUser();
    }, [LogoutUser])
    
    // toast.success("Successfully Logged Out")
  return (
    
    <Navigate to="/login" />
  )
}

export default Logout
