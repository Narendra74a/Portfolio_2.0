// import React from 'react'
// import N from "../../assets/images/n.png"

// const Header = () => {
//   return (
//     <>          
//       <div className="fixed z-50 h-[10vh] w-full  flex items-center justify-between pl-10  pr-10 ml- backdrop-blur-md backdrop-brightness-150">
//         <div className="logo h-[7vh] w-[50px] flex items-center bg-white rounded-full drop-shadow-lg drop-shadow-purple-500 inset-shadow-sm p-2 ">
//         <a href="#">
//           <img src={N} alt="" />
//         </a>
//         </div>

//         <div className=" w-md nav -translate-y-1/2 space-y-8 text-xs tracking-widest text-gray-400">
//           <ul className="flex w-auto justify-around">
//             <li><a href="#" className="block  origin-right hover:text-purple-800 transition">Home</a></li>
//             <li><a href="#" className="block  origin-right hover:text-purple-800 transition">About</a></li>
//             <li><a href="#" className="block  origin-right hover:text-purple-800 transition">Contect</a></li>
//           </ul>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Header



import React, { useState } from "react";
import N from "../../assets/images/n.png";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-20 w-full backdrop-blur-2xl bg-white/30 shadow-md ">
      <div className="w-auto mx-auto px-15 h-[10vh] flex items-center justify-between">

        {/* Logo */}
        <div className="h-[50px] w-[50px] bg-white rounded-full shadow-lg p-2 flex items-center">
          <a href="/">
            <img src={N} alt="Logo" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-md tracking-widest text-gray-70">
          <a href="/" className="hover:text-purple-600 transition  bg-none  hover:border-b-2  transition duration-100   hover:shadow-md  ">Home</a>
          <a href="/about" className="hover:text-purple-600 border-0  hover:border-b-2  transition duration-100   hover:shadow-md ">About</a>
          <a href="/contact" className="hover:text-purple-600 border-0  hover:border-b-2  transition duration-100   hover:shadow-md ">Contact</a>
        </nav>

        {/* Search Bar - Desktop */}
        {/* <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-sm bg-transparent"
          />
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="h-[100vh] md:hidden  backdrop-blur-lg shadow-lg px-6 py-4 space-y-4">
          <a href="#" className="block rounded-md px-3 py-2 bg-gray-950/50  hover:text-white">Home</a>
          <a href="#" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-white/5 hover:text-black">About</a>
          <a href="#" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-white/5 hover:text-black">Contact</a>

          {/* Mobile Search */}
          {/* <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm bg-transparent w-full"
            />
          </div> */}
        </div>
      )}
    </header>
  );
};

export default Header;
