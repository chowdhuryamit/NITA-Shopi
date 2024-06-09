import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[600px] w-[500px] flex flex-col justify-start items-start border-4 border-black bg-blue-100 p-4">
        {/* Header start */}

        <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2">
          <h1 className="text-3xl font-bold text-center">CREATE AN ACCOUNT</h1>
        </div>

        {/* Header End */}

        <div className="flex flex-col justify-center mt-4 w-full">
          {/* Component Start */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <IoPerson size={40} className="mr-2" />
              <input
                type="text"
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your Full Name"
              />
            </div>
          </div>
          {/* Component End */}

          {/* Component Start */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <MdEmail size={40} className="mr-2" />
              <input
                type="text"
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Component End */}

          {/* Component Start */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="text"
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter a Password"
              />
            </div>
          </div>
          {/* Component End */}

          {/* Component Start */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="text"
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Re-Enter the Password"
              />
            </div>
          </div>
          {/* Component End */}

          {/* Button-Start */}
          <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 my-5">
            <button className="text-3xl font-bold text-center">Sign-Up</button>
          </div>
          {/* Button-End */}

          {/* Ending Start*/}
          <div className="flex flex-row items-center justify-center mt-4 w-full">
            <div>
              <p>Already have an Account?</p>
            </div>
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
    </div>
  );
}

export default App;
