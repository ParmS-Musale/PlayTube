import React from "react";
import { SlMenu } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {toggleMenu } from "../utils/appSlice";


const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center space-x-4">
        <SlMenu className="text-2xl cursor-pointer" onClick={()=> toggleMenuHandler()}/>
        <img 
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="yt-logo"
          className="h-12 cursor-pointer text-2xl"
        />
      </div>

      {/* Middle Section - Search Bar */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Search"
        />
        <button className="p-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
          <FaSearch className="text-2xl"/>
        </button>
      </div>

      {/* Right Section - User Icon */}
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-3xl cursor-pointer text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
