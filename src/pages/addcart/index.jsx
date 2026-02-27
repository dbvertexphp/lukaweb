// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Back button ke liye
// import Header from '../../components/header';
// import Footer from "../../components/Footer";
// import { toast, Toaster } from 'react-hot-toast';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(savedCart);
//   }, []);

//   const updateQuantity = (id, pack, delta) => {
//     const updatedCart = cartItems.map(item => {
//       if (item.id === id && item.pack === pack) {
//         const newQty = item.quantity + delta;
//         return { ...item, quantity: newQty > 0 ? newQty : 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event('storage'));
//   };

//   const removeItem = (id, pack) => {
//     const updatedCart = cartItems.filter(item => !(item.id === id && item.pack === pack));
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.error("Item removed from bag");
//     window.dispatchEvent(new Event('storage'));
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   const shipping = subtotal > 500 || subtotal === 0 ? 0 : 50;
//   const total = subtotal + shipping;

//   return (
//     <div className="min-h-screen bg-[#f0f4ff] font-sans text-[#1e3a5f]">
//       <Toaster position="top-center" />
//       <Header />

//       <div className="max-w-6xl mx-auto px-4 py-10">
//         {/* --- Back Button & Title --- */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
//           <div>
//             <button 
//               onClick={() => navigate(-1)} 
//               className="flex items-center gap-2 text-[#4b70e2] font-bold hover:gap-3 transition-all duration-300 uppercase text-xs tracking-[0.2em] mb-4"
//             >
//               <span className="text-xl">←</span> Back to Shopping
//             </button>
//             <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
//               Your <span className="text-[#4b70e2]">Bag</span>
//             </h1>
//           </div>
//           <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
//              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Items Count</p>
//              <p className="text-xl font-black">{cartItems.length} Products</p>
//           </div>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-24 bg-white rounded-[4rem] shadow-xl border border-blue-50">
//             <div className="text-8xl mb-6 animate-bounce">🛒</div>
//             <h2 className="text-3xl font-black mb-6 uppercase">Your bag is empty!</h2>
//             <button 
//               onClick={() => navigate('/')} 
//               className="bg-[#4b70e2] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-blue-200"
//             >
//               Explore Products
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
//             {/* Left Section: Items List */}
//             <div className="lg:col-span-8 space-y-4">
//               {cartItems.map((item, idx) => (
//                 <div key={idx} className="group bg-white/80 backdrop-blur-md p-5 rounded-[2.5rem] border border-white shadow-md flex flex-col md:flex-row items-center gap-6 transition-all hover:shadow-2xl hover:-translate-y-1">
//                   {/* Image Holder */}
//                   <div className="w-32 h-32 bg-[#f8faff] rounded-[2rem] p-4 flex-shrink-0 group-hover:scale-105 transition-transform">
//                     <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
//                   </div>

//                   {/* Info */}
//                   <div className="flex-1 text-center md:text-left">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
//                         <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{item.name}</h3>
//                         <button onClick={() => removeItem(item.id, item.pack)} className="text-red-300 hover:text-red-500 transition-colors hidden md:block">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                             </svg>
//                         </button>
//                     </div>
//                     <p className="inline-block bg-blue-50 text-[#4b70e2] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
//                         {item.pack}
//                     </p>
                    
//                     <div className="flex items-center justify-center md:justify-between">
//                       <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100 shadow-inner">
//                         <button onClick={() => updateQuantity(item.id, item.pack, -1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-white rounded-full transition-colors">-</button>
//                         <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
//                         <button onClick={() => updateQuantity(item.id, item.pack, 1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-white rounded-full transition-colors">+</button>
//                       </div>
//                       <span className="text-2xl font-black text-[#1e3a5f] ml-6 md:ml-0">₹{item.price * item.quantity}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Section: Checkout Summary */}
//             <div className="lg:col-span-4 sticky top-10">
//               <div className="bg-[#1e3a5f] rounded-[3.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
//                 {/* Background Decor */}
//                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                
//                 <h2 className="text-2xl font-black uppercase italic mb-8 border-b border-white/10 pb-4">Order Summary</h2>
                
//                 <div className="space-y-5 mb-8">
//                   <div className="flex justify-between items-center">
//                     <span className="text-white/60 font-bold uppercase text-xs tracking-widest">Subtotal</span>
//                     <span className="text-xl font-bold">₹{subtotal}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-white/60 font-bold uppercase text-xs tracking-widest">Shipping</span>
//                     <span className="text-lg font-bold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
//                   </div>
                  
//                   <div className="pt-5 border-t border-white/10 flex justify-between items-end">
//                     <div>
//                         <p className="text-xs font-black uppercase tracking-tighter text-blue-400">Total Amount</p>
//                         <p className="text-4xl font-black italic tracking-tighter">₹{total}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <button 
//                   onClick={() => navigate('/checkout')}
//                   className="w-full bg-[#4b70e2] text-white py-6 rounded-[2rem] font-black text-xl hover:bg-white hover:text-[#1e3a5f] transition-all duration-500 shadow-xl uppercase tracking-tighter flex items-center justify-center gap-3 group"
//                 >
//                   Proceed to Pay
//                   <span className="group-hover:translate-x-2 transition-transform">→</span>
//                 </button>

//                 <p className="text-[10px] text-center mt-6 text-white/40 uppercase tracking-[0.2em] font-bold">
//                     Secure 256-bit SSL Payment
//                 </p>
//               </div>
              
//               {/* Delivery info box */}
//               <div className="mt-4 bg-white p-6 rounded-[2.5rem] border border-blue-100 flex items-center gap-4">
//                  <div className="text-3xl">🚚</div>
//                  <div>
//                     <p className="font-black text-xs uppercase tracking-widest">Fast Delivery</p>
//                     <p className="text-[10px] text-gray-400 font-bold">Estimate: 3-5 Working Days</p>
//                  </div>
//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from "../../components/Footer";
import { toast, Toaster } from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext'; // 1. Context import kiya

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { user, setIsLoginModalOpen } = useAuth(); // 2. Auth states nikali

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // 3. Proceed to Pay ka naya logic
  const handleProceedToPay = () => {
    if (!user) {
      // Agar user login nahi hai toh modal dikhao
      setIsLoginModalOpen(true);
    } else {
      // Agar login hai toh seedha checkout par bhej do
      navigate('/checkout');
    }
  };

  const updateQuantity = (id, pack, delta) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.pack === pack) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
  };

  const removeItem = (id, pack) => {
    const updatedCart = cartItems.filter(item => !(item.id === id && item.pack === pack));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.error("Item removed from bag");
    window.dispatchEvent(new Event('storage'));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f0f4ff] font-sans text-[#1e3a5f]">
      <Toaster position="top-center" />
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-[#4b70e2] font-bold hover:gap-3 transition-all duration-300 uppercase text-xs tracking-[0.2em] mb-4"
            >
              <span className="text-xl">←</span> Back to Shopping
            </button>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              Your <span className="text-[#4b70e2]">Bag</span>
            </h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-blue-100">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Items Count</p>
             <p className="text-xl font-black">{cartItems.length} Products</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[4rem] shadow-xl border border-blue-50">
            <div className="text-8xl mb-6 animate-bounce">🛒</div>
            <h2 className="text-3xl font-black mb-6 uppercase">Your bag is empty!</h2>
            <button 
              onClick={() => navigate('/')} 
              className="bg-[#4b70e2] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item, idx) => (
                <div key={idx} className="group bg-white/80 backdrop-blur-md p-5 rounded-[2.5rem] border border-white shadow-md flex flex-col md:flex-row items-center gap-6 transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-32 h-32 bg-[#f8faff] rounded-[2rem] p-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{item.name}</h3>
                        <button onClick={() => removeItem(item.id, item.pack)} className="text-red-300 hover:text-red-500 transition-colors hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                    <p className="inline-block bg-blue-50 text-[#4b70e2] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                        {item.pack}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-between">
                      <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100 shadow-inner">
                        <button onClick={() => updateQuantity(item.id, item.pack, -1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-white rounded-full transition-colors">-</button>
                        <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.pack, 1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-white rounded-full transition-colors">+</button>
                      </div>
                      <span className="text-2xl font-black text-[#1e3a5f] ml-6 md:ml-0">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 sticky top-10">
              <div className="bg-[#1e3a5f] rounded-[3.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                
                <h2 className="text-2xl font-black uppercase italic mb-8 border-b border-white/10 pb-4">Order Summary</h2>
                
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-white/60 font-bold uppercase text-xs tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-white text-xl">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-white/60 font-bold uppercase text-xs tracking-widest">
                    <span>Shipping</span>
                    <span className="text-white text-lg">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  
                  <div className="pt-5 border-t border-white/10 flex justify-between items-end">
                    <div>
                        <p className="text-xs font-black uppercase tracking-tighter text-blue-400">Total Amount</p>
                        <p className="text-4xl font-black italic tracking-tighter">₹{total}</p>
                    </div>
                  </div>
                </div>

                {/* 4. Update kiya hua Button */}
                <button 
                  onClick={handleProceedToPay} // handleProceedToPay function call ho raha hai
                  className="w-full bg-[#4b70e2] text-white py-6 rounded-[2rem] font-black text-xl hover:bg-white hover:text-[#1e3a5f] transition-all duration-500 shadow-xl uppercase tracking-tighter flex items-center justify-center gap-3 group"
                >
                  Proceed to Pay
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>

                <p className="text-[10px] text-center mt-6 text-white/40 uppercase tracking-[0.2em] font-bold">
                    Secure 256-bit SSL Payment
                </p>
              </div>
              
              <div className="mt-4 bg-white p-6 rounded-[2.5rem] border border-blue-100 flex items-center gap-4">
                 <div className="text-3xl">🚚</div>
                 <div>
                    <p className="font-black text-xs uppercase tracking-widest">Fast Delivery</p>
                    <p className="text-[10px] text-gray-400 font-bold">Estimate: 3-5 Working Days</p>
                 </div>
              </div>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;