import React from 'react';
import { FaSlidersH } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
   <div className='ml-64'>
     <div className="flex justify-between items-center bg-gray-100 text-dark p-4">
      {/* Left side of Navbar */}
      <div className="flex items-center">
      <FaSlidersH />
        <div className="text-2xl mr-4">
          <i className="fas fa-bars"></i>
        </div>
        {/* Search bar */}
        <div className="relative flex items-center">
  <input
    type="text"
    placeholder="Search..."
    className="bg-gray-100 text-gray-900 border border-gray-700 rounded-xl py-1 px-3 focus:outline-none focus:ring focus:border-blue-500"
  />
  <span className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
    <IoMdSearch className="text-gray-400" />
  </span>
</div>

      </div>

      {/* Right side of Navbar */}
      <div className="flex items-center">
      <TfiLayoutSlider />
        <div className="text-2xl mr-4">
          <i className="fas fa-bell"></i>
        </div>
        {/* Static digit */}
        <div className="mr-4">10000003</div>
        {/* User image */}
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
   </div>
  );
}

export default Navbar;
