

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close the dropdown when toggling the menu
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleNavbarItemClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="h-20 border border-black flex justify-between items-center px-4 md:px-16 bg-[#3BEA1E] rounded-b-lg">
          <div>
            {/* brand logo */}
            <h1 className="text-xl md:text-2xl font-bold">LOGO NAME</h1>
          </div>

          <div className="space-x-2 md:space-x-4 text-sm md:text-lg hidden md:flex">
            {/* menu links */}
            <Link to="/Home" onClick={handleNavbarItemClick} className="hover:underline underline-offset-8 hover:text-blue-600">
              Home
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="hover:underline underline-offset-8 hover:text-blue-600">
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10" onClick={closeDropdown}>
                  <Link to="/OldProduct" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Old Product</Link>
                  <Link to="/NewProduct" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">New Product</Link>
                  <Link to="/AutoService" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Auto Service</Link>
                  <Link to="/RestaurantService" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Restaurant Service</Link>
                </div>
              )}
            </div>
            <Link to="/About" onClick={handleNavbarItemClick} className="hover:underline underline-offset-8 hover:text-blue-600">
              About us
            </Link>
            <Link to="/Help" onClick={handleNavbarItemClick} className="hover:underline underline-offset-8 hover:text-blue-600">
              Help
            </Link>
          </div>


          <div className="hidden md:block">
            {/* Become seller Buttons */}
            <button className="bg-yellow-300 hover:bg-blue-600 text-black hover:text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-xl">
              Become seller
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {/* Hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 right-0 bg-white shadow-lg rounded-lg w-3/4 flex flex-col items-end space-y-2 mt-2 p-4">
            <Link to="/Home" onClick={handleNavbarItemClick} className="text-lg hover:underline underline-offset-8 hover:text-blue-600">
              Home
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="text-lg hover:underline underline-offset-8 hover:text-blue-600">
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10" onClick={closeDropdown}>
                  <Link to="/OldProduct" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Old Product</Link>
                  <Link to="/NewProduct" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">New Product</Link>
                  <Link to="/AutoService" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Auto Service</Link>
                  <Link to="/RestaurantService" onClick={handleNavbarItemClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Restaurant Service</Link>
                </div>
              )}
            </div>
            <Link to="/About" onClick={handleNavbarItemClick} className="text-lg hover:underline underline-offset-8 hover:text-blue-600">
              About us
            </Link>
            <Link to="/Help" onClick={handleNavbarItemClick} className="text-lg hover:underline underline-offset-8 hover:text-blue-600">
              Help
            </Link>
            <button className="bg-yellow-400 hover:bg-blue-600 text-black hover:text-white font-bold py-2 px-4 rounded-xl">
              Become seller
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
