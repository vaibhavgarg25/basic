const express=require('express')
const router=express.Router()
const path=require('path')
const authcontrollers =require('./authcontrollers')
const validate=require('./middlewares/validate')
const signupschema=require('./validators/auth-validator')
const authmiddleware=require('./middlewares/auth-middleware')
const loginschema = require('./validators/login-validator')

router.use((req,res,next)=>{
    console.log("hey this is my first middlware")
    next()
})
router.route('/Home').get(authcontrollers.home);
router.route('/weather').get(authcontrollers.weather);
router.route('/register').post(validate(signupschema),authcontrollers.register);
router.route('/login').post(validate(loginschema),authcontrollers.login)
router.route('/user').get(authmiddleware,authcontrollers.user)
router.route('/contact').post(authcontrollers.contact)
router.route('/service').get(authcontrollers.service)
module.exports=router


