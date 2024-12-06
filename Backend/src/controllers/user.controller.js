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

const loginUser = async (req, res) => {
  try {
    const { email, fullname, password, phonenumber } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate password
    const isPasswordValid = await user.ispasswordcorrect(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate access token
    const token = await user.generateaccesstoken();

    // Get logged-in user's details excluding the password
    const loggedInUser = await User.findById(user._id).select("-password");

    // Set cookie options
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure flag only in production
      sameSite: "Strict", // Prevent CSRF attacks
      maxAge: 24 * 60 * 60 * 1000 // 1 day expiration
    };

    // Send response
    return res
      .status(200)
      .cookie("accessToken", token, options)
      .json({
        user: loggedInUser,
        accessToken: token,
        message: "User Logged In successfully",
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};


 const logoutUser = async (req, res) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(400).json({ message: "No access token provided" });
    }

    // Find the user with this accessToken
    const user = await User.findOneAndUpdate(
      { accessToken: token }, // Match the user by the accessToken
      { $unset: { accessToken: "" } }, // Remove the token
      { new: true } // Return the updated user (optional)
    );

    if (!user) {
      return res.status(404).json({ message: "Invalid access token" });
    }

    // Clear the cookie if tokens are stored in cookies
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true, // Set to true if using HTTPS
      sameSite: "Strict", // Adjust based on your requirements
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser,
  loginUser ,
  logoutUser
 };
