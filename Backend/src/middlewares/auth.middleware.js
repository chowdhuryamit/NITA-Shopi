import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"

const verifyJWT=async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken;

       if (!token) {
        return res.status(401).json({ message: "Unauthorized request!!!" });
       }

       const payload=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

       const user=await User.findById(payload._id).select("-password -phonenumber");

      if(!user){
        return res.status(401).json({message:"invalid access token"})
      }

      req.user=user;
      next();
    } catch (error) {
        return res.status(500).json({ message: "error occured while accessing user from cookies." });
    }
}

export{
    verifyJWT
}