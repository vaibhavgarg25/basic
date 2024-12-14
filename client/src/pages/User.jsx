import React,{useEffect,useState} from 'react'
import { useAuth } from '../store/Context'
import {Link} from 'react-router-dom'


const User = () => {
    const [user,setuser]=useState([])
    const {AuthorizationToken}=useAuth()
    // console.log(AuthorizationToken)
    const getdata=async()=>{
        const response=await fetch("http://localhost:3000/admin/user",{
            method:"GET",
            headers:{
                Authorization:AuthorizationToken,
            },
        });
        const data=await response.json()
        // console.log(data)
        setuser(data)
    }

    useEffect(() => {
      getdata()
    }, [])
    

    const deleteuser=async(id)=>{
        const response=await fetch(`http://localhost:3000/admin/users/delete/${id}`,{
            method:"DELETE",
            headers:{
                Authorization:AuthorizationToken,
            },
        })
        const data=await response.json()
        console.log(`user after deletion:${data}`)
        if(response.ok){
            getdata()
        }
    }
  return (
   <>
    <div className="container">
        <h1>Admin User Data</h1>
    </div>
    <div className="table absolute left-96 p-10">
        <table className=''>
            <thead className='space-x-10 '>
                <tr className='text-lg'>
                    <th>Name</th>
                    <th className='relative left-5'>Email</th>
                    <th  className='relative left-10'>Phone</th>
                    <th className='relative left-16'>Delete</th>
                    <th  className='relative left-24'>Update</th>
                </tr>
            </thead>
            <tbody className='h-screen relative'>
                {user.map((curr,index)=>{
                    return <tr key={index}>
                        <td>{curr.username}</td>
                        <td  className='relative left-5'>{curr.email}</td>
                        <td  className='relative left-10'>{curr.phone}</td>
                        <td className='relative left-16 z-20'><Link to={`/admin/user/${curr._id}/edit`}>Edit</Link></td>
                        <td  className='relative left-24 z-20'><button onClick={()=>deleteuser(curr._id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
   </>
  )
}

export default User
