import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {Product} from "../models/product.model.js";
import fs from "fs"

const addProduct=async(req,res)=>{
    try {
        if(!req.user){
            return res.status(401).json({message:"You are not logged in.Please login to your user account to upload product."});
        }
    
        const {name,price,description,quantity}=req.body;
    
        if(!name||!price||!description||!quantity){
            return res.status(401).json({message:"name,price,description,quantity of the product is required"});
        }
    
        const productImageLocalPath=req.file?.path;
    
        if(!productImageLocalPath){
            return res.status(401).json({message:"product image is required!!"});
        }

        const existingProduct=await Product.findOne({
            $and:[{name},{price},{description},{quantity},{owner:req.user._id}],
        });

        if(existingProduct){
            fs.unlinkSync(productImageLocalPath);
            return res.status(401).json({message:"Product already exists!!"});
        }
    
        const productImageUploadResponse=await uploadOnCloudinary(productImageLocalPath);
    
        if(!productImageUploadResponse){
            return res.status(401).json({message:"error occured while uploading product image. Reupload product details."});
        }
    
        const product=await Product.create({
            name,
            price,
            description,
            quantity,
            image:productImageUploadResponse?.secure_url,
            owner:req.user._id,
        })
    
        if(!product){
            return res.status(500).json({message:"some error occured while uploading product in database."});
        }
        else{
            return res.status(200).json({message:"product uploaded successfully!!",product});
        }
    } catch (error) {
        return res.status(400).json({message:"product upload failed try again"});
    }
}
export{
    addProduct
}