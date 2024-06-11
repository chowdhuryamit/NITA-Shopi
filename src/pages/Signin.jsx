import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data:', formData);
  
    // Check if formData contains values
    if (Object.values(formData).every(value => value !== '')) {
      if(formData.password!=formData.confirmPassword)
        {
          alert('Please Enter The Password Correctly!!');
        }
      alert('Account Created Successfully');
    } else {
      alert('Please fill in all fields.');
    }
  };
  

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[600px] w-[500px] flex flex-col justify-start items-start border-4 border-black bg-blue-100 p-4 shadow-2xl rounded-md">
        {/* Header start */}
        <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 rounded-3xl">
          <h1 className="text-3xl font-bold text-center">CREATE AN ACCOUNT</h1>
        </div>
        {/* Header End */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 w-full">
          {/* Name Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <IoPerson size={40} className="mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your Full Name"
              />
            </div>
          </div>
          {/* Email Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <MdEmail size={40} className="mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter a Password"
              />
            </div>
          </div>
          {/* Confirm Password Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Re-Enter the Password"
              />
            </div>
          </div>
          {/* Sign-Up Button */}
          <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 my-5 hover:bg-blue-700">
            <button type="submit" className="text-3xl font-bold text-center text-black hover:text-white py-2 px-4 ">
              Sign-Up
            </button>
          </div>
        </form>
        {/* Already have an Account Link */}
        <div className="flex flex-row items-center justify-center mt-4 w-full">
          <p>Already have an Account?</p>
          <div>
            <Link to="/Login">
              <button className="text-xl font-semibold underline ml-2">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Ending End*/}
      </div>
    </div>
  );
}

export default App;
