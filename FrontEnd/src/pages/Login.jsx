import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data being sent:", formData);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true, // Correct way to include cookies
        }
      );

      if (data) {
        console.log("Login Successful:", data);
        alert("User Logged in successfully!");
        navigate("/Home"); // Navigate to the Home page
      }
    } catch (error) {
      console.error(
        "Login Error:",
        error.response?.data?.message || error.message
      );
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[600px] w-[500px] flex flex-col justify-start items-center border-4 border-black bg-blue-100 p-4 rounded-lg">
        {/* Centered Icon and User text */}
        <div className="flex justify-center items-center flex-col mb-4">
          <IoPerson size={60} />
        </div>

        {/* Header Start */}
        <div className="flex items-center justify-center border-4 bg-blue-600 w-full p-2 rounded-3xl">
          <h1 className="text-3xl font-bold text-center">USER LOGIN</h1>
        </div>
        {/* Header End */}

        <div className="flex flex-col justify-center mt-4 w-full">
          <form onSubmit={handleSubmit}>
            {/* Email Input Component */}
            <div className="flex flex-col justify-center mt-4 w-full">
              <div className="flex flex-row items-center w-full mt-2">
                <MdEmail size={40} className="mr-2" />
                <input
                  type="email"
                  className="p-2 border border-gray-400 flex-grow"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Input Component */}
            <div className="flex flex-col justify-center mt-4 w-full">
              <div className="flex flex-row items-center w-full mt-2">
                <FaLock size={40} className="mr-2" />
                <input
                  type="password"
                  className="p-2 border border-gray-400 flex-grow"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-center border-4 bg-blue-600 w-full p-2 my-5 hover:bg-[#1D2951]">
              <button
                type="submit"
                className="text-3xl font-bold text-center text-white"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex flex-row items-center justify-center mt-4 w-full">
            <p>Don't have an Account?</p>
            <Link to="/SignUp">
              <button className="text-xl font-semibold underline ml-2 text-black">
                Sign Up
              </button>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center mt-4 w-full">
            <p>Forgot Password?</p>
            <Link to="/ForgotPassword">
              <button className="text-xl font-semibold underline ml-2 text-black">
                Reset Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
