// import React from 'react';
// import Logo from "../assets/lukologo.png"

// const Header = () => {
//   return (
//     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-24">
          
//           {/* 1. Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/">
//               <img 
//                 src={Logo} // <--- Yahan apna logo path lagaiye
//                 alt="Ecosys Logo" 
//                 className="h-16 w-auto"
//               />
//             </a>
//           </div>

//           {/* 2. Navigation Menu */}
//           <nav className="hidden md:flex space-x-8 items-center">
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider border-b-2 border-[#1e3a5f] pb-1">
//               Home
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors">
//               Laundry Pods
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors">
//               Best Sellers
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors">
//               About Us
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors">
//               Blog
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-sm uppercase tracking-wider hover:text-green-600 transition-colors">
//               Contact Us
//             </a>
//           </nav>

//           {/* 3. Right Icons (Search, User, Cart) */}
//           <div className="flex items-center space-x-5">
//             {/* Search Icon */}
//             <button className="text-gray-700 hover:text-green-600">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//               </svg>
//             </button>

//             {/* User Icon */}
//             <button className="text-gray-700 hover:text-green-600">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//               </svg>
//             </button>

//             {/* Cart Icon with Badge */}
//             <button className="relative text-gray-700 hover:text-green-600">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//               </svg>
//               <span className="absolute -top-1 -right-2 bg-[#1e3a5f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
//                 0
//               </span>
//             </button>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/components/header.jsx
import React from 'react';
import Logo from "../assets/lukologo.png";

const Header = () => {
  return (
    // 'w-full' ensure karta hai ki background poori screen par rahe
    // 'sticky top-0' banner ke upar isse fix rakhta hai scroll karte waqt
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="transition-transform hover:scale-105 duration-300">
              <img 
                src={Logo} 
                alt="Lukapods Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* 2. Navigation Menu - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
            <a href="#" className="text-[#1e3a5f] font-extrabold text-[13px] uppercase tracking-widest border-b-2 border-[#1e3a5f] pb-1">
              Home
            </a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
              Laundry Pods
            </a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
              Best Sellers
            </a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
              About Us
            </a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
              Blog
            </a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
              Contact Us
            </a>
          </nav>

          {/* 3. Right Icons (Search, User, Cart) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            
            {/* Search */}
            <button className="text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            {/* User Profile */}
            <button className="text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>

            {/* Cart with Badge */}
            <button className="relative text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-[#1e3a5f] group-hover:bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors">
                0
              </span>
            </button>
            
            {/* Mobile Menu Icon (Simple placeholder) */}
            <div className="md:hidden text-[#1e3a5f]">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;