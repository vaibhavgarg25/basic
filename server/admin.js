const express=require('express')
const router=express.Router()
const authcontrollers=require('./authcontrollers')
const authmiddleware=require('./middlewares/auth-middleware')
const adminmiddleware=require('./middlewares/admin-middleware')


router.route('/user').get(authmiddleware,adminmiddleware,authcontrollers.userdata)
router.route('/contact').get(authmiddleware,adminmiddleware,authcontrollers.contactdata)
router.route('/service').get(authmiddleware,adminmiddleware,authcontrollers.servicedata)
router.route('/users/delete/:id').delete(authmiddleware,adminmiddleware,authcontrollers.deleteuserbyid)
router.route('/contact/delete/:id').delete(authmiddleware,adminmiddleware,authcontrollers.deletecontactbyid)
router.route('/users/:id').get(authmiddleware,adminmiddleware,authcontrollers.getusersbyid)
router.route('/users/update/:id').patch(authmiddleware,adminmiddleware,authcontrollers.updateusersbyid)
module.exports=router