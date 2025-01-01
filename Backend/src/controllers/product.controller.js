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

    const { name, price, description, quantity } = req.body;

    if (!name || !price || !description || !quantity) {
      return res
        .status(401)
        .json({
          message: "name,price,description,quantity of the product is required",
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
    });

    if (!product) {
      return res
        .status(500)
        .json({
          message: "some error occured while uploading product in database.",
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

    await Product.findByIdAndDelete(product._id);

    const productImageUrl = product.image;
    

    let lastIndexBackslash = productImageUrl.lastIndexOf("/");
    let lastIndexDot = productImageUrl.lastIndexOf(".");

    const productImagePublic_id = productImageUrl.substring(
      lastIndexBackslash + 1,
      lastIndexDot
    );
    

    await cloudinary.uploader
      .destroy(productImagePublic_id, { resource_type: 'image' })
      .then(() => {
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
};



export { addProduct, getUserProduct, deleteProduct };
