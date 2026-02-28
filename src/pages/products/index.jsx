// import React, { useState } from 'react';
// import Header from '../../components/header';
// import Footer from "../../components/Footer";
// // fdfd
// const Product = ({ product, onBack }) => {
//   const [selectedPack, setSelectedPack] = useState('Pack of 120');
//   const [activeTab, setActiveTab] = useState('description'); 
//   const [mainImage, setMainImage] = useState(product.image);
//   const [openFaq, setOpenFaq] = useState(null);

//   // --- Comparison Data ---
//   const comparisonData = [
//     { feature: "Stain Removal", luka: "Advanced Bio-Enzymes", ordinary: "Harsh Chemicals" },
//     { feature: "Fabric Softness", luka: "Built-in Conditioner", ordinary: "Requires Extra Purchase" },
//     { feature: "Skin Safety", luka: "Dermatologically Safe", ordinary: "May Cause Irritation" },
//     { feature: "Dissolve Time", luka: "100% Instant (Cold/Hot)", ordinary: "Leaves Residue" },
//     { feature: "Eco Impact", luka: "Zero Plastic / Biodegradable", ordinary: "Plastic Jugs Waste" },
//   ];

//   const faqData = [
//     { id: 1, q: "Are LUKA PODS safe for people with sensitive skin?", a: "Definitely! Our pods are crafted with skin-friendly, plant-derived ingredients and are dermatologically tested to ensure they are gentle even for the most sensitive skin." },
//     { id: 2, q: "What is the ideal number of pods for a single wash?", a: "For a regular load (up to 7kg), just 1 LUKA POD is enough. For heavily soiled or extra-large loads (>8kg), use 2 pods." },
//     { id: 3, q: "Do I need fabric softener?", a: "No! LUKA PODS have a 3-in-1 formula that includes natural softening agents, so your clothes stay plush without extra additives." },
//     { id: 4, q: "Are they safe for front-load machines?", a: "Absolutely. They are low-suds and designed for both Front-load and Top-load fully automatic machines." },
//     { id: 5, q: "Is the fragrance long-lasting?", a: "Yes, our pods use micro-capsule fragrance technology that releases a fresh floral aroma even days after washing." }
//   ];

//   const tabContent = {
//     description: (
//       <div className="space-y-4">
//         <p className="text-gray-600 leading-relaxed">
//           Upgrade your laundry routine with <strong>LUKA PODS</strong>. Our concentrated formula is 10x more powerful than regular powder.
//         </p>
//         <ul className="list-disc pl-5 space-y-2 text-gray-600">
//           <li><strong>Bio-Enzyme Power:</strong> Breaks down oil and protein stains.</li>
//           <li><strong>Color Guard:</strong> Keeps whites white and colors vibrant.</li>
//           <li><strong>Fragrance Bloom:</strong> Fresh laundry scent that lasts up to 7 days.</li>
//         </ul>
//       </div>
//     ),
//     how: (
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
//         <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//           <p className="text-xl font-bold text-blue-600">01</p>
//           <p className="text-xs font-bold uppercase mt-1">Drop the Pod</p>
//           <p className="text-[10px] text-gray-500">Into the back of the empty drum.</p>
//         </div>
//         <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//           <p className="text-xl font-bold text-blue-600">02</p>
//           <p className="text-xs font-bold uppercase mt-1">Add Clothes</p>
//           <p className="text-[10px] text-gray-500">Add your laundry on top of the pod.</p>
//         </div>
//         <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//           <p className="text-xl font-bold text-blue-600">03</p>
//           <p className="text-xs font-bold uppercase mt-1">Press Start</p>
//           <p className="text-[10px] text-gray-500">Run any cycle, it dissolves instantly.</p>
//         </div>
//       </div>
//     ),
//     why: (
//       <div className="grid grid-cols-2 gap-4">
//         <div className="text-sm font-semibold flex items-center gap-2">🌱 Biodegradable</div>
//         <div className="text-sm font-semibold flex items-center gap-2">🐶 Pet Friendly</div>
//         <div className="text-sm font-semibold flex items-center gap-2">👶 Baby Safe</div>
//         <div className="text-sm font-semibold flex items-center gap-2">🚫 No Bleach</div>
//       </div>
//     )
//   };

//   const packs = [
//     { id: '120', label: 'Pack of 120',  badgeCol: 'bg-red-500' },
//     { id: '60', label: 'Pack of 60',  badgeCol: 'bg-blue-500' },
//     { id: '30', label: 'Pack of 30' },
//     { id: '20', label: 'Pack of 20' }
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans text-[#1e3a5f]">
//       {/* Promo Bar */}
//       <div className="w-full bg-[#4b70e2] text-white py-2 text-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
//         ✨ 10,000+ Happy Households Across India ✨
//       </div>

//       <Header />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Breadcrumb */}
//         <button onClick={onBack} className="mb-8 text-[#1e3a5f] font-bold flex items-center hover:opacity-70 transition-opacity italic text-xs tracking-widest">
//           ← BACK TO SHOP
//         </button>

//         {/* Main Product Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
//           <div className="space-y-6">
//             <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden bg-[#f9f9f9] shadow-inner group">
//               <img src={mainImage} className="w-full h-auto object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" alt="Main" />
//             </div>
//             <div className="flex justify-center gap-4">
//               {[product.image, "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", "https://images.unsplash.com/photo-1585833014492-7a360edd7a24?q=80&w=400"].map((img, i) => (
//                 <div key={i} onClick={() => setMainImage(img)} className={`w-20 h-20 border-2 rounded-2xl overflow-hidden cursor-pointer p-2 transition-all ${mainImage === img ? 'border-blue-500 shadow-lg ring-4 ring-blue-50' : 'border-gray-100 opacity-60'}`}>
//                   <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 uppercase">{product.name}</h1>
//             <p className="text-[#4b70e2] font-bold tracking-widest text-xs mb-4">PREMIUM 3-IN-1 LAUNDRY SOLUTION</p>

//             <div className="flex items-center space-x-1 text-yellow-400 mb-6">
//               {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl">★</span>)}
//               <span className="text-gray-500 text-sm ml-3 font-bold">{product.rating} (520 Reviews)</span>
//             </div>

//             <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100">
//               {[{ icon: "🍀", t: "Bio" }, { icon: "🫧", t: "HE" }, { icon: "👶", t: "Safe" }, { icon: "⚡", t: "Fast" }].map((item, i) => (
//                 <div key={i}>
//                   <div className="text-2xl mb-1">{item.icon}</div>
//                   <p className="text-[9px] font-black uppercase tracking-tighter">{item.t} Clean</p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-baseline gap-4 mb-8">
//               <span className="text-4xl font-black text-[#d91e18]">Rs. {product.price}</span>
//               <span className="text-gray-400 line-through text-lg">Rs. {product.oldPrice}</span>
//               <span className="bg-red-100 text-[#d91e18] text-[10px] font-black px-3 py-1 rounded-full">{product.discount} OFF</span>
//             </div>

//             <div className="mb-10">
//               <p className="font-black text-[11px] mb-4 tracking-widest text-gray-400 uppercase">Select Bundle Size</p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                 {packs.map((pack) => (
//                   <button key={pack.id} onClick={() => setSelectedPack(pack.label)} className={`relative py-4 px-2 border-2 rounded-2xl text-[11px] font-black transition-all ${selectedPack === pack.label ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-xl' : 'border-gray-100 hover:border-blue-200'}`}>
//                     {pack.badge && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] px-2 py-0.5 rounded-full font-black text-white ${pack.badgeCol}`}>{pack.badge}</span>}
//                     {pack.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button className="w-full bg-[#4b70e2] text-white py-6 rounded-full font-black text-xl hover:bg-blue-700 transition shadow-2xl uppercase tracking-[0.2em] mb-12">
//               Add to Cart
//             </button>

//             {/* Content Tabs */}
//             <div className="border-t border-gray-100">
//               {['description', 'how', 'why'].map((tab) => (
//                 <div key={tab} className="border-b border-gray-100">
//                   <button onClick={() => toggleTab(tab)} className="w-full flex justify-between items-center py-5 font-black uppercase text-xs tracking-widest hover:text-blue-500 transition-colors">
//                     {tab === 'how' ? 'How to Use' : tab === 'why' ? 'Our Values' : 'The Formula'}
//                     <span className={`text-lg transition-transform ${activeTab === tab ? 'rotate-180' : ''}`}>▾</span>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-500 ${activeTab === tab ? 'max-h-96 pb-8' : 'max-h-0'}`}>
//                     {tabContent[tab]}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* --- SECTION 1: THE COMPARISON TABLE (NEW) --- */}
//         <div className="my-32">
//           <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase">LUKA <span className="text-[#4b70e2]">VS</span> ORDINARY</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
//               <thead>
//                 <tr className="bg-[#1e3a5f] text-white uppercase text-xs tracking-widest">
//                   <th className="p-6 text-left">Feature</th>
//                   <th className="p-6 bg-[#4b70e2]">LUKA PODS</th>
//                   <th className="p-6 text-gray-300">Ordinary Detergents</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {comparisonData.map((row, i) => (
//                   <tr key={i} className="border-b border-gray-50 text-sm">
//                     <td className="p-6 font-bold text-gray-500">{row.feature}</td>
//                     <td className="p-6 font-bold text-blue-800 bg-blue-50/30">✅ {row.luka}</td>
//                     <td className="p-6 text-gray-400 italic">❌ {row.ordinary}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* --- SECTION 2: THE 3-IN-1 VISUAL BANNER (EXISTING) --- */}
//         <div className="my-32 bg-[#e7efff] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
//           <div className="w-full lg:w-1/2 p-16 relative flex justify-center bg-gradient-to-tr from-[#dce8ff] to-[#f0f5ff]">
//             <img src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800" className="w-full rounded-[2.5rem] shadow-2xl rotate-2" alt="Premium Clean" />
//             <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-xl animate-bounce">
//                 <p className="text-[10px] font-black uppercase text-blue-500">Stain Remover ✨</p>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
//             <h2 className="text-4xl font-black mb-10 text-[#1e3a5f] leading-none uppercase">The Power of <br/><span className="text-[#4b70e2]">3 Formulas</span> in 1</h2>
//             <div className="space-y-10">
//                 <div className="flex gap-6 items-start">
//                     <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">🌸</span>
//                     <div><h4 className="font-black text-xs uppercase mb-1">Aroma Bloom</h4><p className="text-sm text-gray-500">Nature-inspired floral fragrance that stays fresh for a week.</p></div>
//                 </div>
//                 <div className="flex gap-6 items-start">
//                     <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">🛡️</span>
//                     <div><h4 className="font-black text-xs uppercase mb-1">Fiber Defense</h4><p className="text-sm text-gray-500">Deep cleans without damaging cloth fibers or fading colors.</p></div>
//                 </div>
//                 <div className="flex gap-6 items-start">
//                     <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">☁️</span>
//                     <div><h4 className="font-black text-xs uppercase mb-1">Ultra Softness</h4><p className="text-sm text-gray-500">Built-in fabric softener for that luxury towel feel every time.</p></div>
//                 </div>
//             </div>
//           </div>
//         </div>

//         {/* --- SECTION 3: TRUST BADGES & VALUES (NEW) --- */}
//         <div className="my-32 py-20 bg-gray-50 rounded-[4rem] text-center border border-gray-100">
//            <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-gray-400">Better for You. Better for the Earth.</h3>
//            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-6">
//               {[
//                 {img: "🌍", t: "100% Biodegradable", d: "Naturally decomposes without harming oceans."},
//                 {img: "🧪", t: "No Harsh Toxins", d: "Zero Phosphates, Chlorine or Parabens."},
//                 {img: "👶", t: "Baby Safe Formula", d: "Safe for the most delicate newborn skin."},
//                 {img: "🐰", t: "Cruelty Free", d: "Never tested on animals. Vegan friendly."}
//               ].map((val, i) => (
//                 <div key={i}>
//                   <div className="text-5xl mb-6">{val.img}</div>
//                   <h4 className="font-black text-[11px] uppercase mb-2 tracking-widest">{val.t}</h4>
//                   <p className="text-xs text-gray-400 leading-relaxed px-4">{val.d}</p>
//                 </div>
//               ))}
//            </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="max-w-4xl mx-auto my-32">
//           <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase">Questions? <span className="text-[#4b70e2]">Look Here</span></h2>
//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div key={item.id} className={`border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-blue-50/30 ring-2 ring-blue-100' : 'bg-white shadow-sm hover:shadow-md'}`}>
//                 <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-7 text-left group">
//                   <div className="flex items-center gap-6">
//                     <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${openFaq === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100'}`}>
//                       {openFaq === index ? '−' : '+'}
//                     </span>
//                     <span className="font-black text-[#1e3a5f] text-sm md:text-base tracking-tight">{item.q}</span>
//                   </div>
//                 </button>
//                 <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-60 opacity-100 pb-8 px-24' : 'max-h-0 opacity-0'}`}>
//                   <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-6">{item.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;


// import React, { useState, useEffect } from 'react';
// import Header from '../../components/header';
// import Footer from "../../components/Footer";
// import { toast, Toaster } from 'react-hot-toast'; 

// const Product = ({ product, onBack }) => {
//   const baseURL = "https://api.lukapods.graphicsvolume.com";

//   // 1. Backend Data Mapping
//   const pName = product.product_name || "LUKA Cleaning Pods";
//   const pPrice = product.price || 0;
//   const pDescription = product.product_description || "";
//   const allImages = product.product_images?.map(img => img.startsWith('http') ? img : `${baseURL}/${img}`) || [product.image];

//   // 2. States
//   const [selectedPack, setSelectedPack] = useState('Pack of 120');
//   const [activeTab, setActiveTab] = useState('description'); 
//   const [mainImage, setMainImage] = useState(allImages[0]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // --- Static Data (Aapka original design) ---
//   const comparisonData = [
//     { feature: "Stain Removal", luka: "Advanced Bio-Enzymes", ordinary: "Harsh Chemicals" },
//     { feature: "Fabric Softness", luka: "Built-in Conditioner", ordinary: "Requires Extra Purchase" },
//     { feature: "Skin Safety", luka: "Dermatologically Safe", ordinary: "May Cause Irritation" },
//     { feature: "Dissolve Time", luka: "100% Instant (Cold/Hot)", ordinary: "Leaves Residue" },
//     { feature: "Eco Impact", luka: "Zero Plastic / Biodegradable", ordinary: "Plastic Jugs Waste" },
//   ];

//   const faqData = [
//     { id: 1, q: "Are LUKA PODS safe for people with sensitive skin?", a: "Definitely! Our pods are crafted with skin-friendly, plant-derived ingredients." },
//     { id: 2, q: "What is the ideal number of pods for a single wash?", a: "For a regular load (up to 7kg), just 1 LUKA POD is enough." },
//     { id: 3, q: "Do I need fabric softener?", a: "No! LUKA PODS have a 3-in-1 formula that includes natural softening agents." }
//   ];

//   // --- Functions ---
//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product._id,
//       name: pName,
//       price: pPrice,
//       image: mainImage,
//       pack: selectedPack,
//       quantity: 1,
//     };

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const isItemExist = existingCart.find(item => item.id === cartItem.id && item.pack === cartItem.pack);

//     let updatedCart;
//     if (isItemExist) {
//       updatedCart = existingCart.map(item => 
//         (item.id === cartItem.id && item.pack === cartItem.pack) 
//         ? { ...item, quantity: item.quantity + 1 } 
//         : item
//       );
//     } else {
//       updatedCart = [...existingCart, cartItem];
//     }

//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.success(`${selectedPack} added to cart!`, {
//         style: { borderRadius: '10px', background: '#1e3a5f', color: '#fff', fontWeight: 'bold' }
//     });
//     window.dispatchEvent(new Event('storage'));
//   };

//   const toggleTab = (tab) => setActiveTab(activeTab === tab ? null : tab);

//   return (
//     <div className="min-h-screen bg-white font-sans text-[#1e3a5f]">
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className="w-full bg-[#4b70e2] text-white py-2 text-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
//         ✨ 10,000+ Happy Households Across India ✨
//       </div>

//       <Header />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <button onClick={onBack} className="mb-8 text-[#1e3a5f] font-bold flex items-center hover:opacity-70 transition-opacity italic text-xs tracking-widest">
//           ← BACK TO SHOP
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
//           {/* Gallery */}
//           <div className="space-y-6">
//             <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden bg-[#f9f9f9] shadow-inner flex items-center justify-center h-[500px]">
//               <img src={mainImage} className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105" alt="Main" />
//             </div>
//             <div className="flex justify-center gap-4">
//               {allImages.slice(0, 4).map((img, i) => (
//                 <div key={i} onClick={() => setMainImage(img)} className={`w-20 h-20 border-2 rounded-2xl overflow-hidden cursor-pointer p-2 transition-all ${mainImage === img ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-100 opacity-60'}`}>
//                   <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 uppercase">{pName}</h1>
//             <p className="text-[#4b70e2] font-bold tracking-widest text-xs mb-4">PREMIUM 3-IN-1 LAUNDRY SOLUTION</p>

//             <div className="flex items-center space-x-1 text-yellow-400 mb-6">
//               {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl">★</span>)}
//               <span className="text-gray-500 text-sm ml-3 font-bold">4.8 (520 Reviews)</span>
//             </div>

//             <div className="flex items-baseline gap-4 mb-8">
//               <span className="text-4xl font-black text-[#d91e18]">Rs. {pPrice}</span>
//               <span className="text-gray-400 line-through text-lg">Rs. {Math.round(pPrice * 1.25)}</span>
//               <span className="bg-red-100 text-[#d91e18] text-[10px] font-black px-3 py-1 rounded-full">20% OFF</span>
//             </div>

//             <div className="mb-10">
//               <p className="font-black text-[11px] mb-4 tracking-widest text-gray-400 uppercase">Select Bundle Size</p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                 {['Pack of 20', 'Pack of 30', 'Pack of 60', 'Pack of 120'].map((label) => (
//                   <button key={label} onClick={() => setSelectedPack(label)} className={`py-4 px-2 border-2 rounded-2xl text-[11px] font-black transition-all ${selectedPack === label ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-xl' : 'border-gray-100 hover:border-blue-200'}`}>
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//   {/* Add to Cart Button */}
//   <button 
//     onClick={handleAddToCart}
//     className="flex-1 bg-white text-[#4b70e2] border-2 border-[#4b70e2] py-5 rounded-full font-black text-lg hover:bg-blue-50 transition shadow-lg uppercase tracking-[0.1em] transform active:scale-95"
//   >
//     Add to Cart
//   </button>

//   {/* Buy Now Button (Optional but recommended) */}
//   <button 
//     onClick={() => {
//       handleAddToCart();
//       window.location.href = "/cart"; // Direct cart ya checkout page par bhejne ke liye
//     }}
//     className="flex-1 bg-[#4b70e2] text-white py-5 rounded-full font-black text-lg hover:bg-blue-700 transition shadow-2xl uppercase tracking-[0.1em] transform active:scale-95 border-2 border-[#4b70e2]"
//   >
//     Buy Now
//   </button>
// </div>



//             {/* Tabs */}
//             <div className="border-t border-gray-100">
//                 {['description', 'how', 'why'].map((tab) => (
//                    <div key={tab} className="border-b border-gray-100">
//                       <button onClick={() => toggleTab(tab)} className="w-full flex justify-between items-center py-5 font-black uppercase text-xs tracking-widest hover:text-blue-500 transition-colors">
//                         {tab === 'how' ? 'How to Use' : tab === 'why' ? 'Our Values' : 'The Formula'}
//                         <span className={`transition-transform ${activeTab === tab ? 'rotate-180' : ''}`}>▾</span>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ${activeTab === tab ? 'max-h-96 pb-8' : 'max-h-0'}`}>
//                         {tab === 'description' ? (
//                             <div className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pDescription }} />
//                         ) : (
//                             <p className="text-gray-600 text-sm">Follow the instructions on the pack for best results.</p>
//                         )}
//                       </div>
//                    </div>
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* --- Section: Comparison Table --- */}
//         <div className="my-32">
//           <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase">LUKA <span className="text-[#4b70e2]">VS</span> ORDINARY</h2>
//           <div className="overflow-x-auto rounded-[2rem] shadow-xl">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#1e3a5f] text-white uppercase text-xs tracking-widest">
//                   <th className="p-6 text-left">Feature</th>
//                   <th className="p-6 bg-[#4b70e2]">LUKA PODS</th>
//                   <th className="p-6">Others</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {comparisonData.map((row, i) => (
//                   <tr key={i} className="border-b border-gray-50 text-sm">
//                     <td className="p-6 font-bold text-gray-500">{row.feature}</td>
//                     <td className="p-6 font-bold text-blue-800 bg-blue-50/30">✅ {row.luka}</td>
//                     <td className="p-6 text-gray-400 italic">❌ {row.ordinary}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* --- Section: 3-in-1 Visual --- */}
//         <div className="my-32 bg-[#e7efff] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
//           <div className="w-full lg:w-1/2 p-16 relative flex justify-center bg-gradient-to-tr from-[#dce8ff] to-[#f0f5ff]">
//             <img src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800" className="w-full rounded-[2.5rem] shadow-2xl" alt="Premium Clean" />
//           </div>
//           <div className="w-full lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
//             <h2 className="text-4xl font-black mb-10 text-[#1e3a5f] uppercase leading-none">The Power of <br/><span className="text-[#4b70e2]">3 Formulas</span> in 1</h2>
//             <div className="space-y-8">
//                 {[{i:"🌸", t:"Aroma Bloom"}, {i:"🛡️", t:"Fiber Defense"}, {i:"☁️", t:"Ultra Softness"}].map((item,idx)=>(
//                    <div key={idx} className="flex gap-6 items-start">
//                       <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">{item.i}</span>
//                       <div><h4 className="font-black text-xs uppercase mb-1">{item.t}</h4><p className="text-sm text-gray-500">Premium quality ingredients for a superior wash.</p></div>
//                    </div>
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* --- Section: Trust Badges --- */}
//         <div className="my-32 py-20 bg-gray-50 rounded-[4rem] text-center">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-6">
//               {[
//                 {img: "🌍", t: "100% Biodegradable"}, {img: "🧪", t: "No Harsh Toxins"},
//                 {img: "👶", t: "Baby Safe"}, {img: "🐰", t: "Cruelty Free"}
//               ].map((val, i) => (
//                 <div key={i}>
//                   <div className="text-5xl mb-6">{val.img}</div>
//                   <h4 className="font-black text-[11px] uppercase tracking-widest">{val.t}</h4>
//                 </div>
//               ))}
//             </div>
//         </div>

//         {/* --- Section: FAQ --- */}
//         <div className="max-w-4xl mx-auto my-32">
//           <h2 className="text-center text-4xl font-black mb-16 uppercase">Questions?</h2>
//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div key={item.id} className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm">
//                 <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-7 text-left group">
//                     <span className="font-black text-[#1e3a5f] text-sm md:text-base tracking-tight">{item.q}</span>
//                     <span className="text-2xl">{openFaq === index ? '−' : '+'}</span>
//                 </button>
//                 <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-60 pb-8 px-10' : 'max-h-0'}`}>
//                   <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-6">{item.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;



// import React, { useState, useEffect } from 'react';
// import Header from '../../components/header';
// import Footer from "../../components/Footer";
// import { toast, Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const Product = ({ product, onBack }) => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Page load hote hi top par le jayega
//   }, []);
//   const { user, setIsLoginModalOpen } = useAuth();
//   const baseURL = "https://api.lukapods.graphicsvolume.com";
//   const navigate = useNavigate()
//   // 1. Backend Data Mapping
//   const pName = product.product_name || "LUKA Cleaning Pods";
//   const pPrice = product.price || 0;
//   const pDescription = product.product_description || "";
//   const allImages = product.product_images?.map(img => img.startsWith('http') ? img : `${baseURL}/${img}`) || [product.image];

//   // 2. States
//   const [selectedPack, setSelectedPack] = useState('Pack of 20');
//   const [activeTab, setActiveTab] = useState('description');
//   const [mainImage, setMainImage] = useState(allImages[0]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // --- Static Data ---
//   const comparisonData = [
//     { feature: "Stain Removal", luka: "Advanced Bio-Enzymes", ordinary: "Harsh Chemicals" },
//     { feature: "Fabric Softness", luka: "Built-in Conditioner", ordinary: "Requires Extra Purchase" },
//     { feature: "Skin Safety", luka: "Dermatologically Safe", ordinary: "May Cause Irritation" },
//     { feature: "Dissolve Time", luka: "100% Instant (Cold/Hot)", ordinary: "Leaves Residue" },
//     { feature: "Eco Impact", luka: "Zero Plastic / Biodegradable", ordinary: "Plastic Jugs Waste" },
//   ];

//   const faqData = [
//     { id: 1, q: "Are LUKA PODS safe for people with sensitive skin?", a: "Definitely! Our pods are crafted with skin-friendly, plant-derived ingredients." },
//     { id: 2, q: "What is the ideal number of pods for a single wash?", a: "For a regular load (up to 7kg), just 1 LUKA POD is enough." },
//     { id: 3, q: "Do I need fabric softener?", a: "No! LUKA PODS have a 3-in-1 formula that includes natural softening agents." }
//   ];

//   // --- 3. Handle Add to Cart & Redirect ---
//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product._id,
//       name: pName,
//       price: pPrice,
//       image: mainImage,
//       pack: selectedPack,
//       quantity: 1,
//     };

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const isItemExist = existingCart.find(item => item.id === cartItem.id && item.pack === cartItem.pack);

//     let updatedCart;
//     if (isItemExist) {
//       updatedCart = existingCart.map(item =>
//         (item.id === cartItem.id && item.pack === cartItem.pack)
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [...existingCart, cartItem];
//     }

//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Header cart icon update karne ke liye event
//     window.dispatchEvent(new Event('storage'));

//     // Toast dikhane ke baad redirect karna
//     toast.success("Redirecting to cart...", { duration: 1000 });

//     // --- YEH HAI MAIN REDIRECTION LINE ---
//     setTimeout(() => {
//       window.location.href = "/cart";
//     }, 800); // 0.8 second ka wait taaki user toast dekh sake
//   };

//   const toggleTab = (tab) => setActiveTab(activeTab === tab ? null : tab);
//   // const handleBuyNow = async () => {

//   //   try {
//   //     // 1. Pehle item ko Cart mein save karo (taaki backend ya local storage ko pata chale)
//   //     await handleAddToCart(); 

//   //     // 2. Ab user ko direct "Checkout" page par bhejo, na ki "Cart" page par
//   //     // Taki user wahan Address fill kar sake
//   //     navigate('/checkout'); 

//   //   } catch (error) {
//   //     console.error("Buy Now failed:", error);
//   //     toast.error("Process fail ho gaya!");
//   //   }
//   // };

//   const handleBuyNow = () => {

//     console.log("Buy Now Clicked, User Status:", user); // Debugging ke liye

//     if (!user) {
//       console.log("User not found, opening modal...");
//       setIsLoginModalOpen(true); // 👈 Yeh modal open karega
//     } else {
//       // Agar login hai toh checkout par bhej do
//       const cartItem = { id: product._id, name: pName, price: pPrice /* ... */ };
//       localStorage.setItem('cart', JSON.stringify([cartItem]));
//       navigate('/checkout');
//     }
//   };
//   return (
//     <div className="min-h-screen bg-white font-sans text-[#1e3a5f]">
//       <Toaster position="top-center" reverseOrder={false} />



//       <Header />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <button onClick={onBack} className="mb-8 text-[#1e3a5f] font-bold flex items-center hover:opacity-70 transition-opacity italic text-xs tracking-widest uppercase">
//           ← Back to Shop
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
//           {/* Gallery */}
//           <div className="space-y-6">
//             <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden bg-[#f9f9f9] shadow-inner flex items-center justify-center h-[500px]">
//               <img src={mainImage} className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105" alt="Main" />
//             </div>
//             <div className="flex justify-center gap-4">
//               {allImages.slice(0, 4).map((img, i) => (
//                 <div key={i} onClick={() => setMainImage(img)} className={`w-20 h-20 border-2 rounded-2xl overflow-hidden cursor-pointer p-2 transition-all ${mainImage === img ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-100 opacity-60'}`}>
//                   <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 uppercase">{pName}</h1>
//             <p className="text-[#4b70e2] font-bold tracking-widest text-xs mb-4 uppercase">Premium 3-In-1 Laundry Solution</p>

//             <div className="flex items-center space-x-1 text-yellow-400 mb-6">
//               {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl">★</span>)}
//               <span className="text-gray-500 text-sm ml-3 font-bold">4.8 (520 Reviews)</span>
//             </div>

//             <div className="flex items-baseline gap-4 mb-8">
//               <span className="text-4xl font-black text-[#d91e18]">Rs. {pPrice}</span>
//               <span className="text-gray-400 line-through text-lg">Rs. {Math.round(pPrice * 1.25)}</span>
//               <span className="bg-red-100 text-[#d91e18] text-[10px] font-black px-3 py-1 rounded-full uppercase">20% Off</span>
//             </div>

//             {/* Pack Selection */}
//             <div className="mb-10">
//               <p className="font-black text-[11px] mb-4 tracking-widest text-gray-400 uppercase">Select Bundle Size</p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                 {['Pack of 20', 'Pack of 30', 'Pack of 60', 'Pack of 120'].map((label) => (
//                   <button key={label} onClick={() => setSelectedPack(label)} className={`py-4 px-2 border-2 rounded-2xl text-[11px] font-black transition-all ${selectedPack === label ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-xl' : 'border-gray-100 hover:border-blue-200'}`}>
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 bg-white text-[#4b70e2] border-2 border-[#4b70e2] py-5 rounded-full font-black text-lg hover:bg-blue-50 transition shadow-lg uppercase tracking-[0.1em] transform active:scale-95"
//               >
//                 Add to Cart
//               </button>

//               < button
//                 onClick={handleBuyNow} // handleBuyNow function use karein
//                 className="flex-1 bg-[#4b70e2] text-white py-5 rounded-full font-black text-lg hover:bg-blue-700 transition shadow-2xl uppercase tracking-[0.1em] transform active:scale-95 border-2 border-[#4b70e2]"
//               >
//                 Buy Now
//               </button>
//             </div>

//             {/* Tabs (Formula/How/Why) */}
//             <div className="border-t border-gray-100">
//               {['description', 'how', 'why'].map((tab) => (
//                 <div key={tab} className="border-b border-gray-100">
//                   <button onClick={() => toggleTab(tab)} className="w-full flex justify-between items-center py-5 font-black uppercase text-xs tracking-widest hover:text-blue-500 transition-colors">
//                     {tab === 'how' ? 'How to Use' : tab === 'why' ? 'Our Values' : 'The Formula'}
//                     <span className={`transition-transform ${activeTab === tab ? 'rotate-180' : ''}`}>▾</span>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-300 ${activeTab === tab ? 'max-h-96 pb-8' : 'max-h-0'}`}>
//                     {tab === 'description' ? (
//                       <div className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pDescription }} />
//                     ) : (
//                       <p className="text-gray-600 text-sm">Follow the instructions on the pack for best results.</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* --- Comparison Table --- */}
//         <div className="my-32">
//           <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase italic">LUKA <span className="text-[#4b70e2]">VS</span> ORDINARY</h2>
//           <div className="overflow-x-auto rounded-[3rem] shadow-xl border border-gray-50">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#1e3a5f] text-white uppercase text-xs tracking-widest">
//                   <th className="p-8 text-left">Feature</th>
//                   <th className="p-8 bg-[#4b70e2]">LUKA PODS</th>
//                   <th className="p-8">Others</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {comparisonData.map((row, i) => (
//                   <tr key={i} className="border-b border-gray-50 text-sm">
//                     <td className="p-8 font-bold text-gray-500 uppercase text-[10px] tracking-widest">{row.feature}</td>
//                     <td className="p-8 font-bold text-blue-800 bg-blue-50/30 italic">✅ {row.luka}</td>
//                     <td className="p-8 text-gray-400 italic">❌ {row.ordinary}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="my-32 bg-[#e7efff] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
//           <div className="w-full lg:w-1/2 p-16 relative flex justify-center bg-gradient-to-tr from-[#dce8ff] to-[#f0f5ff]">
//             <img src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800" className="w-full rounded-[2.5rem] shadow-2xl" alt="Premium Clean" />
//           </div>
//           <div className="w-full lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
//             <h2 className="text-4xl font-black mb-10 text-[#1e3a5f] uppercase leading-none">The Power of <br /><span className="text-[#4b70e2]">3 Formulas</span> in 1</h2>
//             <div className="space-y-8">
//               {[{ i: "🌸", t: "Aroma Bloom" }, { i: "🛡️", t: "Fiber Defense" }, { i: "☁️", t: "Ultra Softness" }].map((item, idx) => (
//                 <div key={idx} className="flex gap-6 items-start">
//                   <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">{item.i}</span>
//                   <div><h4 className="font-black text-xs uppercase mb-1">{item.t}</h4><p className="text-sm text-gray-500">Premium quality ingredients for a superior wash.</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* --- Section: Trust Badges --- */}
//         <div className="my-32 py-20 bg-gray-50 rounded-[4rem] text-center">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-6">
//             {[
//               { img: "🌍", t: "100% Biodegradable" }, { img: "🧪", t: "No Harsh Toxins" },
//               { img: "👶", t: "Baby Safe" }, { img: "🐰", t: "Cruelty Free" }
//             ].map((val, i) => (
//               <div key={i}>
//                 <div className="text-5xl mb-6">{val.img}</div>
//                 <h4 className="font-black text-[11px] uppercase tracking-widest">{val.t}</h4>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- Section: FAQ --- */}
//         <div className="max-w-4xl mx-auto my-32">
//           <h2 className="text-center text-4xl font-black mb-16 uppercase">Questions?</h2>
//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div key={item.id} className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm">
//                 <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-7 text-left group">
//                   <span className="font-black text-[#1e3a5f] text-sm md:text-base tracking-tight">{item.q}</span>
//                   <span className="text-2xl">{openFaq === index ? '−' : '+'}</span>
//                 </button>
//                 <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-60 pb-8 px-10' : 'max-h-0'}`}>
//                   <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-6">{item.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;


import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from "../../components/Footer";
import { toast, Toaster } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Product = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, setIsLoginModalOpen } = useAuth();
  const baseURL = "https://api.lukapods.graphicsvolume.com";
  const navigate = useNavigate();

  // 1. Base Price (Jo 20 pack ke liye hai)
  const basePrice = product.price || 0;
  const pName = product.product_name || "LUKA Cleaning Pods";
  const pDescription = product.product_description || "";
  const allImages = product.product_images?.map(img => img.startsWith('http') ? img : `${baseURL}/${img}`) || [product.image];

  const [selectedPack, setSelectedPack] = useState('Pack of 20');
  const [mainImage, setMainImage] = useState(allImages[0]);
  const [activeTab, setActiveTab] = useState('description');
  const [openFaq, setOpenFaq] = useState(null);

  // --- 2. Dynamic Price Logic ---
  // Ye function pack ke hisaab se price calculate karega
  const getCalculatedPrice = (packLabel) => {
    switch (packLabel) {
      case 'Pack of 20': return basePrice; // 1x
      case 'Pack of 30': return Math.round(basePrice * 1.4); // 30 pack ka price
      case 'Pack of 60': return Math.round(basePrice * 2.6); // 60 pack (thoda discount ke saath)
      case 'Pack of 120': return Math.round(basePrice * 4.8); // 120 pack (zyaada discount)
      default: return basePrice;
    }
  };

  const currentPrice = getCalculatedPrice(selectedPack);
  const currentOldPrice = Math.round(currentPrice * 1.3); // Visual strike-through price

  // --- 3. Updated Cart Logic ---
  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: pName,
      price: currentPrice, // 🔥 Updated Price bhej rahe hain
      image: mainImage,
      pack: selectedPack,
      quantity: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const isItemExist = existingCart.find(item => item.id === cartItem.id && item.pack === cartItem.pack);

    let updatedCart;
    if (isItemExist) {
      updatedCart = existingCart.map(item => 
        (item.id === cartItem.id && item.pack === cartItem.pack) 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      );
    } else {
      updatedCart = [...existingCart, cartItem];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    toast.success(`${selectedPack} added to cart!`);
    
    setTimeout(() => { window.location.href = "/cart"; }, 800);
  };

  const handleBuyNow = () => {
    if (!user) {
      setIsLoginModalOpen(true);
    } else {
      // Direct checkout logic with current price
      const cartItem = { 
        id: product._id, 
        name: pName, 
        price: currentPrice, // 🔥 Current Price
        pack: selectedPack,
        image: mainImage,
        quantity: 1
      };
      localStorage.setItem('cart', JSON.stringify([cartItem]));
      navigate('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1e3a5f]">
      <Toaster position="top-center" />
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <button onClick={onBack} className="mb-8 text-[#1e3a5f] font-bold flex items-center hover:opacity-70 transition-opacity italic text-xs tracking-widest uppercase">
          ← Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden bg-[#f9f9f9] shadow-inner flex items-center justify-center h-[500px]">
              <img src={mainImage} className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105" alt="Main" />
            </div>
            <div className="flex justify-center gap-4">
              {allImages.slice(0, 4).map((img, i) => (
                <div key={i} onClick={() => setMainImage(img)} className={`w-20 h-20 border-2 rounded-2xl overflow-hidden cursor-pointer p-2 transition-all ${mainImage === img ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-100 opacity-60'}`}>
                  <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 uppercase">{pName}</h1>
            <p className="text-[#4b70e2] font-bold tracking-widest text-xs mb-4 uppercase">Premium 3-In-1 Laundry Solution</p>
            
            <div className="flex items-center space-x-1 text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl">★</span>)}
              <span className="text-gray-500 text-sm ml-3 font-bold">4.8 (520 Reviews)</span>
            </div>

            {/* 🔥 DYNAMIC PRICE DISPLAY */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-black text-[#d91e18]">Rs. {currentPrice}</span>
              <span className="text-gray-400 line-through text-lg">Rs. {currentOldPrice}</span>
              <span className="bg-red-100 text-[#d91e18] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Value Pack</span>
            </div>

            {/* Pack Selection */}
            <div className="mb-10">
              <p className="font-black text-[11px] mb-4 tracking-widest text-gray-400 uppercase">Select Bundle Size</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Pack of 20', 'Pack of 30', 'Pack of 60', 'Pack of 120'].map((label) => (
                  <button 
                    key={label} 
                    onClick={() => setSelectedPack(label)} 
                    className={`py-4 px-2 border-2 rounded-2xl text-[11px] font-black transition-all ${selectedPack === label ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-xl scale-105' : 'border-gray-100 hover:border-blue-200'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={handleAddToCart} className="flex-1 bg-white text-[#4b70e2] border-2 border-[#4b70e2] py-5 rounded-full font-black text-lg hover:bg-blue-50 transition shadow-lg uppercase tracking-[0.1em]">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="flex-1 bg-[#4b70e2] text-white py-5 rounded-full font-black text-lg hover:bg-blue-700 transition shadow-2xl uppercase tracking-[0.1em] border-2 border-[#4b70e2]">
                Buy Now
              </button>
            </div>
            
            {/* Tabs & Rest of the Code stays same */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;