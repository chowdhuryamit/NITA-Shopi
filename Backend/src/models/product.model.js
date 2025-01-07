import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    catagory:{
        type:String,
        required:true,
        lowercase:true
    }
},{timestamps:true})

productSchema.plugin(mongooseAggregatePaginate);

const Product=mongoose.model("Product",productSchema);
export{Product};