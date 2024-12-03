const adminmiddleware=(req,res,next)=>{
    try {
        const isAdmin=req.user.isAdmin;
        if(!isAdmin){
            return res.status(403).json({message:"Access Denied.User is not an Admin"})
        }
       next()
    } catch (error) {
        next(error);
    }
}

module.exports=adminmiddleware