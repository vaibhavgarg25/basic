const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

userschema.pre("save",async function(next){
    const user=this;
    if(!user.isModified('password')){
        next();
    }
    try {
    const saltRound=await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(user.password,saltRound);
    user.password=hash_password;
    } catch (error) {
        next(error)
    }
})

userschema.methods.generatetoken=async function () {
    try {
        return jwt.sign({
            userid:this._id.toString(),
            email:this.email,
            phone:this.phone.toString(),
            isAdmin:this.isAdmin
        },process.env.SECRET_KEY,{
            expiresIn:"30d"
        });
    } catch (error) {
       next(error); 
    }
}

const User=new mongoose.model('users',userschema)
module.exports=User