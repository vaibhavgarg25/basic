const express=require('express')
const User=require('./models/user-model')
const Services=require('./models/service-model')
const Contacts=require('./models/contact-model')
const bcrypt=require('bcrypt')
const Contact = require('./models/contact-model')
const Service=require('./models/service-model')
const { default: mongoose } = require('mongoose')



const home=async (req,res)=>{
 try {
    {
        res.status(200).send('Hello World!')
    }
 } catch (error) {
    res.status(400).send({msg:"INVALID GET REQUEST"})
 }
}
const weather=async (req,res)=>{
    try {
       {
        {
            console.log("hey its my weather api")
            res.redirect('http://127.0.0.1:5500/api%20proj/weather.html')
        }
       }
    } catch (error) {
       res.status(400).send({msg:"INVALID GET REQUEST"})
    }
}


const register= async (req,res)=>{
   try {
      const {username,email,phone,password}=req.body;
      const emailexist=await User.findOne({email:email})
      if(emailexist){
         return res.status(400).json({message:"email already exist"});
      }
      const newuser=await User.create({username,email,phone,password})
      console.log(newuser);
      res.status(200).json({message:"account registered",token:await newuser.generatetoken(),userid:newuser._id.toString()});
   } catch (error) {
      console.log(error);
   }
}

const login=async(req,res)=>{
   try {
    const {email,password}=req.body
    const userexist=await User.findOne({email})  
    console.log(userexist)
    if(!userexist){
      return res.status(400).send({message:"invalid credentials"})
    }
    const validpass=await bcrypt.compare(password,userexist.password)
    if(validpass){
      res.status(200).json({message:"account login successfull",token:await userexist.generatetoken(),userid:userexist._id.toString()});
    }
    else{
      res.status(401).send({message:"invalid password or email"})
    }
   } catch (error) {
      res.status(500).send({message:"Invalid credentials"})
   }
}

const user=async(req,res)=>{
   try {
      const userdata=req.user;
      console.log(userdata)
      return res.status(200).json({userdata})
   } catch (error) {
      console.log(`error from the user route ${error}`)
   }
}

const contact=async(req,res)=>{
   try {
      const response=req.body
      await Contact.create(response)
      return res.status(200).json({message:"message sent successfully"})
   } catch (error) {
      return res.status(500).json({message:"message not delivered"})
   }
}

const service=async(req,res)=>{
   try {
      const response=await Service.find()
      if(!response){
         return res.status(400).json({msg:"data was not fetched"})
      }
      return res.status(200).json(response)
   } catch (error) {
      return res.status(400).json({msg:"database issue"})
   }
}


const userdata=async (req,res)=>{
try {
   const data=await User.find({},{password:0})
   if(!data || data.length===0){
      return res.status(404).json({msg:"data not found"})
   }
   return res.status(200).json(data)
} catch (error) {
   console.log(`error : ${error}`)
}
}

const contactdata=async(req,res)=>{
   try {
      const data=await Contacts.find()
      if(!data || data.length===0){
         return res.status(404).json({msg:"data not found"})
      }
      return res.status(200).json(data)
   } catch (error) {
      console.log(`error : ${error}`)
   }
}

const servicedata=async(req,res)=>{
   try {
      const data=await Services.find()
      if(!data || data.length===0){
         return res.status(404).json({msg:"data not found"})
      }
      return res.status(200).json(data)
   } catch (error) {
      console.log(`error : ${error}`)
   }
}

module.exports={home,weather,register,login,user,contact,service,userdata,contactdata,servicedata}