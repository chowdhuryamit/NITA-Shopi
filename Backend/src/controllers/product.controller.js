import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Product } from "../models/product.model.js";
import fs from "fs";
import mongoose from "mongoose";
import {v2 as cloudinary} from "cloudinary"

const addProduct = async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({
          message:
            "You are not logged in.Please login to your user account to upload product.",
        });
    }

    const { name, price, description, quantity,catagory } = req.body;

    if (!name || !price || !description || !quantity||!catagory) {
      return res
        .status(401)
        .json({
          message: "name,price,description,quantity,catagory of the product is required",
        });
    }

    const productImageLocalPath = req.file?.path;

    if (!productImageLocalPath) {
      return res.status(401).json({ message: "product image is required!!" });
    }

    const existingProduct = await Product.findOne({
      $and: [
        { name },
        { price },
        { description },
        { quantity },
        { owner: req.user._id },
        {catagory}
      ],
    });

    if (existingProduct) {
      fs.unlinkSync(productImageLocalPath);
      return res.status(401).json({ message: "Product already exists!!" });
    }

    const productImageUploadResponse = await uploadOnCloudinary(
      productImageLocalPath
    );

    if (!productImageUploadResponse) {
      return res
        .status(401)
        .json({
          message:
            "error occured while uploading product image. Reupload product details.",
        });
    }

    const product = await Product.create({
      name,
      price,
      description,
      quantity,
      image: productImageUploadResponse?.secure_url,
      owner: req.user._id,
      catagory
    });

    if (!product) {
      let lastIndexBackslash = productImageUploadResponse.lastIndexOf("/");
      let lastIndexDot = productImageUploadResponse.lastIndexOf(".");

      const productImagePublic_id = productImageUploadResponse.substring(
      lastIndexBackslash + 1,
      lastIndexDot
      );

      await cloudinary.uploader
      .destroy(productImagePublic_id, { resource_type: 'image' })
      .then(() => {
        return res
        .status(500)
        .json({
          message: "some error occured while uploading product in database.",
        });
      })
      .catch(() => {
        return res
          .status(500)
          .json({
            message:
              "error occured while deleting product image from cloudinary",
          });
      });
    } else {
      return res
        .status(200)
        .json({ message: "product uploaded successfully!!", product });
    }
  } catch (error) {
    return res.status(400).json({ message: "product upload failed try again" });
  }
};

const getUserProduct = async (req, res) => {
  try {
    if (!req.user._id) {
      return res.status(401).json({ message: "user is not logged in" });
    }

    const allProduct = await Product.aggregate([
      {
        $match: {
          owner: req.user._id,
        },
      },
      {
        $project: {
          name: 1,
          price: 1,
          description: 1,
          quantity: 1,
          image: 1,
          catagory:1
        },
      },
    ]);

    return res
      .status(200)
      .json({ message: "product fetched successfully", allProduct });
  } catch (error) {
    return res
      .status(500)
      .json({
        message:
          "error occured while fetching product information from database",
      });
  }
};

const deleteProduct = async (req, res) => {
   try {
    const productId = req.query.id;
    
    if (!productId) {
      return res.status(400).json({ message: "product id is required" });
    }

    if (!req.user._id) {
      return res.status(401).json({ message: "user is not logged in" });
    }

    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    if (!product.owner.equals(req.user._id)) {
      return res
        .status(403)
        .json({ message: "you are not the owner of this product" });
    }


    const productImageUrl = product.image;
    

    let lastIndexBackslash = productImageUrl.lastIndexOf("/");
    let lastIndexDot = productImageUrl.lastIndexOf(".");

    const productImagePublic_id = productImageUrl.substring(
      lastIndexBackslash + 1,
      lastIndexDot
    );
    

    await cloudinary.uploader
      .destroy(productImagePublic_id, { resource_type: 'image' })
      .then(async() => {
        await Product.findByIdAndDelete(product._id);
        return res
          .status(200)
          .json({ message: "product deleted successfully" });
      })
      .catch(() => {
        return res
          .status(500)
          .json({
            message:
              "error occured while deleting product image from cloudinary",
          });
      });
   } catch (error) {
      return res.status(400).json({message:"some error occured while deleting product from database"});
   }
};

const updateProductInfo=async(req,res)=>{
    const productId=req.query.id;
    if (!productId) {
      return res.status(401).json({message:"productId is required"});
    }

    if(!req.user._id){
      return res.status(401).json({message:"you are not logged in"});
    }

    let product=await Product.findById(productId);

    if(!product){
      return res.status(404).json({message:"product not found"});
    }
    if(!product.owner.equals(req.user._id)){
      return res.status(401).json({message:"you are not the owner of the product."});
    }

    const {name,description,quantity,price,catagory}=req.body;

    if(name){
      product.name=name;
    }
    if(description){
      product.description=description;
    }
    if(quantity){
      product.quantity=quantity;
    }
    if(price){
      product.price=price;
    }
    if(catagory){
      product.catagory=catagory;
    }

    await product.save({validateBeforeSave:false});

    return res.status(200).json({message:"product information updated successfully.",product});
     
}

const updateProductImage=async(req,res)=>{
   const productId=req.query.id;
   if (!productId) {
    return res.status(400).json({message:"product id is required"});
   }
   if(!req.user._id){
    return res.status(400).json({message:"you are not logged in"});
   }

   const product=await Product.findById(productId);

   if(!product){
    return res.status(404).json({message:"product not found"});
   }
   if(!product.owner.equals(req.user._id)){
    return res.status(401).json({message:"you are not the owner of the product."});
   }

   const productImageLocalPath=req.file?.path;
   

   if (!productImageLocalPath) {
    return res.status(401).json({message:"upload product image."});
   }

   const productImageUrl=product.image;

  let lastIndexBackslash = productImageUrl.lastIndexOf("/");
  let lastIndexDot = productImageUrl.lastIndexOf(".");

    const productImagePublic_id = productImageUrl.substring(
      lastIndexBackslash + 1,
      lastIndexDot
    );

    await cloudinary.uploader.destroy(productImagePublic_id,{resource_type:'image'})
    .then(async()=>{
      const response=await uploadOnCloudinary(productImageLocalPath);
      if(!response){
        return res.status(401).json({message:"error occured while uploading product image."});
      }
      else{
        product.image=response?.secure_url;
        await product.save({validateBeforeSave:false});
        return res.status(200).json({message:"product image updated successfully.",product});
      }
    })
    .catch((err)=>{
      fs.unlinkSync(productImageLocalPath);
      return res.status(401).json({message:"error occured while deleting product image."});
    })
}

const viewProduct=async(req,res)=>{
  const productId=req.query.id;
  if(!productId){
    return res.status(401).json({message:"product id is required."});
  }
  if(!req.user._id){
    return res.status(400).json({message:"user is not logged in"});
  }

  const product=await Product.findById(productId);
  if(!product){
    return res.status(401).json({message:"product not found."});
  }

  const productDetails=await Product.aggregate([
    {
      $match:{
        _id:new mongoose.Types.ObjectId(productId)
      }
    },
    {
      $lookup:{
        from:"users",
        localField:"owner",
        foreignField:"_id",
        as:"owner",
        pipeline:[
          {
            $project:{
              fullname:1,
              email:1,
              phonenumber:1,
            }
          }
        ]
      }
    },
    {
      $addFields:{
        owner:{
          $first:"$owner"
        }
      }
    }
  ])

  return res.status(200).json({message:"product found",productDetails});
}

const getAllProduct=async(req,res)=>{
    const { page = 1, limit = 1 } = req.query;
    const parsedLimit = parseInt(limit, 10);
    const pageSkip = (parseInt(page, 10) - 1) * parsedLimit;
    const sortStage = {};
    sortStage["updatedAt"] = "asc" ? 1 : -1;
  
    const products = await Product.aggregate([
      {
        $match: { quantity: { $gt: 0 } },
      },
      {
        $project: {
          name: 1,
          price: 1,
          image: 1,
          catagory:1
        },
      },
      {
        $sort: sortStage,
      },
      {
        $skip: pageSkip,
      },
      {
        $limit: parsedLimit,
      },
    ]);

    const totalDocuments = await Product.countDocuments({ quantity: { $gt: 0 } });
    const totalPages = Math.ceil(totalDocuments / parsedLimit);

    res.status(200).json({
      message: "product fetched successfully",
      currentPage: parseInt(page, 10),
      totalPages,
      totalItems: totalDocuments,
      limit: parsedLimit,
      data:products,
    });
}

const getOldProduct=async(req,res)=>{
  const { page = 1, limit = 1 } = req.query;
  const parsedLimit = parseInt(limit, 10);
  const pageSkip = (parseInt(page, 10) - 1) * parsedLimit;
  const sortStage = {};
  sortStage["updatedAt"] = "asc" ? 1 : -1;

  const products = await Product.aggregate([
    {
      $match: {
        catagory:'old'
      },
    },
    {
      $project: {
        name: 1,
        price: 1,
        image: 1,
      },
    },
    {
      $sort: sortStage,
    },
    {
      $skip: pageSkip,
    },
    {
      $limit: parsedLimit,
    },
  ]);

  const totalDocuments = await Product.countDocuments({ quantity: { $gt: 0 } });
  const totalPages = Math.ceil(totalDocuments / parsedLimit);

  res.status(200).json({
    message: "product fetched successfully",
    currentPage: parseInt(page, 10),
    totalPages,
    totalItems: totalDocuments,
    limit: parsedLimit,
    data:products,
  });
}

const getNewProduct=async(req,res)=>{
  const { page = 1, limit = 1 } = req.query;
  const parsedLimit = parseInt(limit, 10);
  const pageSkip = (parseInt(page, 10) - 1) * parsedLimit;
  const sortStage = {};
  sortStage["updatedAt"] = "asc" ? 1 : -1;

  const products = await Product.aggregate([
    {
      $match: {
        catagory:'new'
      },
    },
    {
      $project: {
        name: 1,
        price: 1,
        image: 1,
      },
    },
    {
      $sort: sortStage,
    },
    {
      $skip: pageSkip,
    },
    {
      $limit: parsedLimit,
    },
  ]);

  const totalDocuments = await Product.countDocuments({ quantity: { $gt: 0 } });
  const totalPages = Math.ceil(totalDocuments / parsedLimit);

  res.status(200).json({
    message: "product fetched successfully",
    currentPage: parseInt(page, 10),
    totalPages,
    totalItems: totalDocuments,
    limit: parsedLimit,
    data:products,
  });
}

export { addProduct, getUserProduct, deleteProduct,updateProductInfo,updateProductImage,viewProduct,getAllProduct,getNewProduct,getOldProduct };
