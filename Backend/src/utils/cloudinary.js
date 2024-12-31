import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs"

cloudinary.config({
    cloud_name:"dufitirzo",
    api_key:"928712265261123",
    api_secret:"e6D-m5SkGd3MhcEAzIZseVv2Jmk",
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
    console.log(error);
    
    fs.unlinkSync(localFilePath);
    return null;
   }
}

export{
    uploadOnCloudinary
}