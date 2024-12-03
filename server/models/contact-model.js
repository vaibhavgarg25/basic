const mongoose=require('mongoose')

const contactschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
}) ;

const Contact=new mongoose.model('contacts',contactschema)
module.exports=Contact