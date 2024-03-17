import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  
  const navItems = [
    { id: 4, text:  "Profile"},
    { id: 5, text: "Logout" },
  ];
  return (
    <>
      
      <div className="bg-black flex justify-between items-center h-24  px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Dashboard</h1>

        {/* Desktop Navigation */}
        <ul className="hidde md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
