import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs"
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET,
    secure:true
})

const uploadOnCloudinary=async(localFilePath)=>{
   try {
    
    if(!localFilePath){
        return null;
    }
    else{
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        
        fs.unlinkSync(localFilePath);
        
        return response;
    }
   } catch (error) {
    
    fs.unlinkSync(localFilePath);
    return null;
   }
}

export{
    uploadOnCloudinary
}