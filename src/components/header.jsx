
// import React from 'react';
// import Logo from "../assets/lukologo.png";

// const Header = () => {
//   return (
//     // 'w-full' ensure karta hai ki background poori screen par rahe
//     // 'sticky top-0' banner ke upar isse fix rakhta hai scroll karte waqt
//     <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 md:h-24">
          
//           {/* 1. Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="transition-transform hover:scale-105 duration-300">
//               <img 
//                 src={Logo} 
//                 alt="Lukapods Logo" 
//                 className="h-12 md:h-16 w-auto object-contain"
//               />
//             </a>
//           </div>

//           {/* 2. Navigation Menu - Desktop */}
//           <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
//             <a href="#" className="text-[#1e3a5f] font-extrabold text-[13px] uppercase tracking-widest border-b-2 border-[#1e3a5f] pb-1">
//               Home
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
//               Laundry Pods
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
//               Best Sellers
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
//               About Us
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
//               Blog
//             </a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest hover:text-blue-500 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-500">
//               Contact Us
//             </a>
//           </nav>

//           {/* 3. Right Icons (Search, User, Cart) */}
//           <div className="flex items-center space-x-4 md:space-x-6">
            
//             {/* Search */}
//             <button className="text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//               </svg>
//             </button>

//             {/* User Profile */}
//             <button className="text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//               </svg>
//             </button>

//             {/* Cart with Badge */}
//             <button className="relative text-[#1e3a5f] hover:text-blue-500 transition-colors duration-300 group">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//               </svg>
//               <span className="absolute -top-1 -right-2 bg-[#1e3a5f] group-hover:bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors">
//                 0
//               </span>
//             </button>
            
//             {/* Mobile Menu Icon (Simple placeholder) */}
//             <div className="md:hidden text-[#1e3a5f]">
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
//                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                </svg>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';
// import Logo from "../assets/lukologo.png";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// const Header = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         // Aapki API call
// const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/google-login`, {
//   accessToken: tokenResponse.access_token,
// });

//         if (res.data.token) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("user", JSON.stringify(res.data.user));
//           setUser(res.data.user);
//           alert("Login Successful!");
//         }
//       } catch (error) {
//         console.error("Login Error:", error);
//       }
//     },
//   });

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 md:h-24">
          
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/">
//               <img src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
//             </a>
//           </div>

//           {/* Navigation - Desktop */}
//           <nav className="hidden md:flex space-x-8 items-center">
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">Home</a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">Laundry Pods</a>
//             <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">About Us</a>
//           </nav>

//           {/* Right Section: Icons + Sign Up Button */}
//           <div className="flex items-center space-x-3 md:space-x-6">
            
//             {/* Search Icon */}
//             <button className="text-[#1e3a5f] hover:text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
//             </button>

//             {/* Cart Icon */}
//             <button className="relative text-[#1e3a5f] hover:text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
//               <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
//             </button>

//             {/* SIGN UP / PROFILE SECTION */}
//             <div className="flex items-center">
//               {user ? (
//                 // Agar Login hai to Profile dikhao
//                 <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
//                   <span className="text-[11px] font-bold text-[#1e3a5f] uppercase hidden sm:block">Hi, {user.name.split(' ')[0]}</span>
//                   <button 
//                     onClick={handleLogout}
//                     className="text-[10px] font-bold text-red-500 hover:text-red-700 uppercase"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 // Agar Login nahi hai to SIGN UP Button dikhao
//                 <button 
//                   onClick={() => login()}
//                   className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-md flex items-center gap-2"
//                 >
//                   <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/button/google.svg" alt="" className="w-4 h-4 bg-white rounded-full p-0.5" />
//                   Sign Up
//                 </button>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import Logo from "../assets/lukologo.png";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Function jo cart count update karega
  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Total items count karne ke liye (quantity ke saath)
    const totalItems = savedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    // Pehli baar load hone par
    updateCartCount();

    // Jab dusre pages se 'storage' event trigger ho (jaise aapne Checkout mein kiya hai)
    window.addEventListener('storage', updateCartCount);

    // Cleanup
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedUser !== "undefined") {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/google-login`, {
          accessToken: tokenResponse.access_token,
        });

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(res.data.user);
          alert("Login Successful!");
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert("Login failed. Please try again.");
      }
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <div className="flex-shrink-0">
            <a href="/">
              <img src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">Home</a>
            <a href="shop" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">Laundry Pods</a>
            <a href="#" className="text-[#1e3a5f] font-bold text-[13px] uppercase tracking-widest">About Us</a>
          </nav>

          <div className="flex items-center space-x-3 md:space-x-6">
            <button className="text-[#1e3a5f] hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </button>

            {/* Cart Icon */}
           <button 
        onClick={() => navigate('/cart')} // Yaha apne cart page ka path likhein
        className="relative text-[#1e3a5f] hover:text-blue-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

        {/* Dynamic Count Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
      <a href="/orders" className="font-bold text-sm uppercase tracking-widest">
  My Orders 📦
</a>

            <div className="flex items-center">
              {user ? (
                <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  {/* FIX YAHAN HAI: Safely split name or use fallback 'User' */}
                  <span className="text-[11px] font-bold text-[#1e3a5f] uppercase hidden sm:block">
                    Hi, {user?.name ? user.name.split(' ')[0] : (user?.full_name ? user.full_name.split(' ')[0] : 'User')}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="text-[10px] font-bold text-red-500 hover:text-red-700 uppercase"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => login()}
                  className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/button/google.svg" alt="" className="w-4 h-4 bg-white rounded-full p-0.5" />
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;