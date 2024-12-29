import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema= new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    phonenumber:{
        type:String,
        required:[true,"PhoneNumber is required"],
    }
},{timestamps:true})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
     var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    this.password=hash;
    next()
}})

UserSchema.methods.ispasswordcorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.generateaccesstoken=async function(){
    return jwt.sign({
        _id:this._id,
    },
process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
})
}
const User=mongoose.model('User',UserSchema)
export{
    User
}