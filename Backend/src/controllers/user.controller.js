import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"; 

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password,phonenumber } = req.body;

  
    if (!fullname || !email || !password || !phonenumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

  
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phonenumber
    });

    const createdUser = await User.findById(user._id).select("-password");
    if (!createdUser) {
      throw new Error("User creation failed");
    }

    return res.status(201).json({
      message: "User registered successfully",
      user: createdUser,
    });
  } catch (error) {
    console.error(error.message || error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser= async(req,res)=>{
const {email,fullname,password,phonenumber}=req.body
if(!email)
{
  throw new error
}
const user=User.findOne({
  email
})
if(!user) throw new error
const ispasswordvalid=await user.ispasswordcorrect(password)
if(!ispasswordvalid) throw new error
const token=await user.generateaccesstoken
};
export { registerUser,
  loginUser 
 };
