// import React, { useState } from 'react';
// import Header from '../../components/header';
// import Product from "../products/index"
// import Footer from "../../components/Footer"

// const Home = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   // FAQ ke liye state: kaunsa sawal khula hai?
//   const [activeFaq, setActiveFaq] = useState(null);

//   const products = [
//     {
//       id: 1,
//       name: "Laundry Detergent Pods - All-in-1 Stain Removal",
//       price: "1,899.00",
//       oldPrice: "4,200.00",
//       discount: "54%",
//       rating: "4.75",
//       reviews: "801",
//       image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
//       description: "Hamari laundry sheets 100% plastic-free hain aur kapdo ko naya jaisa banaye rakhti hain. Yeh thande aur garam dono paani mein ghul jati hain.",
//     },
//     {
//       id: 2,
//       name: "Floor Cleaner Refill - Pet & Kid Safe Formula",
//       price: "249.00",
//       oldPrice: "500.00",
//       discount: "50%",
//       rating: "4.8",
//       reviews: "450",
//       image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
//       description: "Baccho aur pets ke liye bilkul safe. Ismein neem aur aloe vera ke gunn hain jo floor ko sanitize karte hain.",
//     },
//     {
//         id: 3,
//         name: "Dishwash Power Pods - Tough Grease Remover",
//         price: "349.00",
//         oldPrice: "750.00",
//         discount: "53%",
//         rating: "4.9",
//         reviews: "320",
//         image: "https://thumbs.dreamstime.com/b/easy-to-edit-vector-illustration-advertisement-banner-stain-dirt-remover-powder-laundry-detergent-clean-fresh-118043412.jpg",
//         description: "Ziddi chiknai ko hatane ke liye best. Ek pod ek baar ke bartano ke liye kaafi hai.",
//       },
//       {
//         id: 4,
//         name: "Multi-Surface Spray - Organic Shine",
//         price: "199.00",
//         oldPrice: "400.00",
//         discount: "50%",
//         rating: "4.6",
//         reviews: "210",
//         image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800",
//         description: "Glass, Wood, aur Metal—har satah ki safai ke liye ek hi solution.",
//       },
//   ];

//  const faqData = [
//     {
//       question: "Will LUKA PODS work with my specific washing machine type?",
//       answer: "Absolutely! LUKA PODS are engineered for versatility. They are 100% compatible with both Top-load and Front-load fully automatic machines, ensuring a residue-free wash every time."
//     },
//     {
//       question: "Do I need hot water to dissolve these pods?",
//       answer: "Not at all. Our advanced fast-dissolving film technology is designed to melt away completely in any water temperature, whether you are using a quick cold wash or a hot cycle."
//     },
//     {
//       question: "Is LUKA PODS safe for my delicate clothing?",
//       answer: "LUKA PODS are tough on stains but gentle on fibers like cotton and synthetics. For premium delicates like silk or wool, we always recommend a quick check of the garment's care label first."
//     },
//     {
//       question: "How many pods do I need for a full laundry basket?",
//       answer: "For a regular load (up to 8 kg), just one LUKA POD is enough. If you have a heavily soiled load or an extra-large drum (>8 kg), using two pods will give you the best cleaning results."
//     },
//     {
//       question: "What makes LUKA PODS an eco-conscious choice?",
//       answer: "We care for the planet as much as your clothes. LUKA PODS are plastic-free and biodegradable, powered by plant-based bio-enzymes that clean effectively without harming the environment."
//     }
// ];

//   const switchReasons = [
//     { id: 1, title: "Authentic reviews by Influencers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi0W4l40kU2xlb7fknstvgtIZCXEorKDL8g&s" },
//     { id: 2, title: "Bioenzymes-Infused Stain Removers", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=500" },
//     { id: 3, title: "Long-Lasting Fragrance", img: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=500" },
//     { id: 4, title: "No Residue", img: "https://img.freepik.com/free-photo/domestis-duties-work-concept_273609-23995.jpg?semt=ais_user_personalization&w=740&q=80" },
//   ];

//   if (selectedProduct) {
//     return <Product product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
//   }

//   return (
//     <div className="min-h-screen w-full bg-white m-0 p-0 overflow-x-hidden">
//       {/* 1. Announcement Bar */}
//       <div className="w-full bg-[#4b70e2] text-white py-2 px-4 text-center text-[12px] font-medium tracking-widest uppercase flex justify-between items-center sm:px-10">
//         <span className="cursor-pointer hidden sm:block">❮</span>
//         <span className="flex-1">Free Shipping on all orders →</span>
//         <span className="cursor-pointer hidden sm:block">❯</span>
//       </div>

//       <div className="w-full border-b border-gray-100">
//         <Header />
//       </div>

//       {/* 3. HERO BANNER */}
//       <section className="relative w-full h-[450px] md:h-[600px] lg:h-[750px] bg-gray-200 overflow-hidden">
//         <img 
//           src="https://img.freepik.com/free-photo/indoor-shot-happy-european-lady-with-overjoyed-expression-keeps-mouth-opened-crosses-hand-indicates-two-sides-detergents_273609-24908.jpg?semt=ais_user_personalization&w=740&q=80" 
//           alt="Lukapods Banner" 
//           className="w-full h-full object-cover block"
//         />
//         <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 bg-black/10">
//           <button className="bg-white text-[#1e3a5f] px-10 py-3.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-[#1e3a5f] hover:text-white transition-all duration-300">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* 4. Text Section */}
//       <section className="w-full bg-white py-14 text-center px-4">
//         <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto italic font-medium leading-relaxed">
//           "Lukapods cleaners ke saath apne ghar ko plastic-free aur chemical-free banayein."
//         </p>
//       </section>

//       {/* Why Switch Section */}
//       <section className="w-full bg-white pb-20 mt-10">
//         <div className="max-w-[1400px] mx-auto px-4">
//           <h2 className="text-center text-[#1e3a5f] text-2xl md:text-3xl font-extrabold mb-12 tracking-tight uppercase italic">
//             Why People Are Making the Switch to Laundry Pods
//           </h2>
//           <div className="flex overflow-x-auto gap-6 pb-10 no-scrollbar snap-x touch-pan-x">
//             {switchReasons.map((item) => (
//               <div key={item.id} className="min-w-[220px] md:min-w-[240px] lg:flex-1 snap-start group/card">
//                 <p className="text-[11px] font-bold text-[#1e3a5f] text-center mb-5 h-8 flex items-center justify-center uppercase tracking-tighter leading-tight px-2">
//                   {item.title}
//                 </p>
//                 <div className="relative aspect-[9/15] rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl">
//                   <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <div className="w-full bg-gray-50/30">
//         <section className="max-w-7xl mx-auto px-4 py-16">
//           <div className="flex flex-col items-center mb-14 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] uppercase tracking-tighter italic">
//               Best Sellers
//             </h2>
//             <div className="w-20 h-1.5 bg-green-500 mt-3 rounded-full"></div>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {products.map((product) => (
//               <div 
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//                 className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 flex flex-col h-full"
//               >
//                 <div className="h-80 overflow-hidden bg-[#f9f9f9]">
//                   <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
//                 </div>
//                 <div className="p-8 text-center flex-grow flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-[14px] font-bold text-[#1e3a5f] mb-3 h-10 overflow-hidden uppercase tracking-tight">
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center justify-center gap-4 mb-5">
//                       <span className="text-gray-400 line-through text-sm font-medium">Rs. {product.oldPrice}</span>
//                       <span className="text-[#d91e18] text-2xl font-black tracking-tighter">Rs. {product.price}</span>
//                     </div>
//                   </div>
//                   <button className="bg-[#1e3a5f] text-white w-full py-3.5 rounded-2xl font-bold hover:bg-green-600 transition-all uppercase text-[10px] tracking-widest shadow-md active:scale-95">
//                     View Product
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//       {/* --- 1. PRODUCT BENEFITS CARDS (Fast Dissolving, etc.) --- */}
// <section className="w-full bg-white py-16 px-4">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//     {/* Card 1 */}
//     <div className="bg-[#f8faff] p-10 rounded-[2.5rem] border border-blue-50/50 transition-transform hover:scale-105 duration-300">
//       <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
//         </svg>
//       </div>
//       <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Fast Dissolving</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">
//         Dissolves completely even in cold water cycles, leaving no residue.
//       </p>
//     </div>

//     {/* Card 2 */}
//     <div className="bg-[#f8faff] p-10 rounded-[2.5rem] border border-blue-50/50 transition-transform hover:scale-105 duration-300">
//       <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 shadow-sm">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" />
//         </svg>
//       </div>
//       <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Machine Safe</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">
//         Prevents detergent build-up in the drum, extending machine life.
//       </p>
//     </div>

//     {/* Card 3 */}
//     <div className="bg-[#f8faff] p-10 rounded-[2.5rem] border border-blue-50/50 transition-transform hover:scale-105 duration-300">
//       <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
//         </svg>
//       </div>
//       <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Biodegradable</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">
//         PVA film breaks down naturally into harmless components.
//       </p>
//     </div>
//   </div>
// </section>

// {/* --- 2. SAFETY INSTRUCTIONS & SUITABLE FOR --- */}
// <section className="w-full bg-white py-16 px-4 overflow-hidden">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    
//     {/* Left: Safety Instructions */}
//     <div className="space-y-8">
//       <h2 className="text-3xl font-bold text-[#1e3a5f] tracking-tight italic">Safety Instructions</h2>
//       <div className="space-y-6">
//         <div className="flex items-start gap-4">
//           <div className="text-red-500 mt-1">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
//             </svg>
//           </div>
//           <div>
//             <h4 className="font-bold text-[#1e3a5f]">Keep out of reach of children</h4>
//             <p className="text-gray-400 text-xs">Store in high or locked cabinets. Do not puncture.</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-4">
//           <div className="text-purple-400 mt-1">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
//             </svg>
//           </div>
//           <div>
//             <h4 className="font-bold text-[#1e3a5f]">Avoid eye contact & ingestion</h4>
//             <p className="text-gray-400 text-xs">Rinse with water if contact occurs. Close container tightly.</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Right: Suitable For (The Grid Box) */}
//     <div className="bg-[#f3f7ff]/60 p-10 md:p-14 rounded-[3rem] relative">
//       <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Suitable For:</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white py-4 text-center rounded-2xl font-bold text-[#1e3a5f] shadow-sm border border-blue-50">Top-Load</div>
//         <div className="bg-white py-4 text-center rounded-2xl font-bold text-[#1e3a5f] shadow-sm border border-blue-50">Front-Load</div>
//         <div className="bg-white py-4 text-center rounded-2xl font-bold text-[#1e3a5f] shadow-sm border border-blue-50">Whites</div>
//         <div className="bg-white py-4 text-center rounded-2xl font-bold text-[#1e3a5f] shadow-sm border border-blue-50">Colours</div>
//       </div>
//     </div>

//   </div>
// </section>

//       {/* --- ADDED FAQ SECTION HERE --- */}
//       <section className="w-full bg-white py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-2">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-gray-500">Everything you need to know about LUKA PODS.</p>
//           </div>

//           <div className="space-y-4">
//             {faqData.map((faq, index) => (
//               <div key={index} className="border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
//                 <button
//                   onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//                   className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-[#1e3a5f] font-bold text-lg">{faq.question}</span>
//                   <span className={`text-2xl text-blue-500 transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>
//                     +
//                   </span>
//                 </button>
//                 {activeFaq === index && (
//                   <div className="px-6 pb-6 text-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       {/* <footer className="w-full bg-[#1e3a5f] py-14 text-center text-white/70 text-[11px] tracking-[0.2em] uppercase">
//         <div className="max-w-7xl mx-auto px-4">
//           <p className="mb-4">Follow us on Social Media</p>
//           <p>© 2024 LUKAPODS CLEANERS. REFILL. REUSE. RECYCLE.</p>
//         </div>
    
//       </footer> */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import Header from '../../components/header';
import Product from "../products/index"
import Footer from "../../components/Footer"

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const products = [
    { id: 1, name: "Laundry Detergent Pods - All-in-1 Stain Removal", price: "1,899.00", oldPrice: "4,200.00", discount: "54%", rating: "4.75", reviews: "801", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Floor Cleaner Refill - Pet & Kid Safe Formula", price: "249.00", oldPrice: "500.00", discount: "50%", rating: "4.8", reviews: "450", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Dishwash Power Pods - Tough Grease Remover", price: "349.00", oldPrice: "750.00", discount: "53%", rating: "4.9", reviews: "320", image: "https://thumbs.dreamstime.com/b/easy-to-edit-vector-illustration-advertisement-banner-stain-dirt-remover-powder-laundry-detergent-clean-fresh-118043412.jpg" },
    { id: 4, name: "Multi-Surface Spray - Organic Shine", price: "199.00", oldPrice: "400.00", discount: "50%", rating: "4.6", reviews: "210", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800" },
  ];

  const faqData = [
    { question: "Will LUKA PODS work with my specific washing machine type?", answer: "Absolutely! LUKA PODS are engineered for versatility. They are 100% compatible with both Top-load and Front-load fully automatic machines." },
    { question: "Do I need hot water to dissolve these pods?", answer: "Not at all. Our advanced fast-dissolving film technology melts away completely in any water temperature." },
    { question: "Is LUKA PODS safe for my delicate clothing?", answer: "Yes, they are tough on stains but gentle on fibers. For premium silk or wool, always check the garment's care label first." },
    { question: "How many pods do I need for a full laundry basket?", answer: "Just one pod for a regular 8kg load. For heavily soiled clothes, use two pods for best results." },
    { question: "What makes LUKA PODS an eco-conscious choice?", answer: "LUKA PODS are plastic-free, biodegradable, and powered by plant-based bio-enzymes that clean without harming the environment." }
  ];

  const switchReasons = [
    { id: 1, title: "Authentic reviews by Influencers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi0W4l40kU2xlb7fknstvgtIZCXEorKDL8g&s" },
    { id: 2, title: "Bioenzymes-Infused Stain Removers", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=500" },
    { id: 3, title: "Long-Lasting Fragrance", img: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=500" },
    { id: 4, title: "No Residue", img: "https://img.freepik.com/free-photo/domestis-duties-work-concept_273609-23995.jpg?semt=ais_user_personalization&w=740&q=80" },
  ];

  if (selectedProduct) {
    return <Product product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen w-full bg-white m-0 p-0 overflow-x-hidden">
      {/* 1. Announcement Bar */}
      <div className="w-full bg-[#4b70e2] text-white py-2 px-10 text-center text-[11px] font-black tracking-[0.3em] uppercase flex justify-between items-center shadow-md">
        <span className="cursor-pointer hidden sm:block">❮</span>
        <span className="flex-1">✨ 100% Plastic-Free Cleaning Solution ✨</span>
        <span className="cursor-pointer hidden sm:block">❯</span>
      </div>

      <Header />

      {/* 3. HERO BANNER */}
      <section className="relative w-full h-[500px] md:h-[700px] bg-gray-200 overflow-hidden">
        <img 
          src="https://img.freepik.com/free-photo/indoor-shot-happy-european-lady-with-overjoyed-expression-keeps-mouth-opened-crosses-hand-indicates-two-sides-detergents_273609-24908.jpg?semt=ais_user_personalization&w=740&q=80" 
          alt="Lukapods Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col items-center justify-end pb-20">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter text-center px-4 uppercase italic">
            Revolutionizing Your <br/> Home Laundry
          </h1>
          <button className="bg-white text-[#1e3a5f] px-12 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-[#1e3a5f] hover:text-white transition-all transform hover:scale-110">
            Explore Collections
          </button>
        </div>
      </section>

      {/* 4. Impact Stats Bar (NEW) */}
      <section className="w-full bg-[#1e3a5f] py-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-3xl font-black italic">5000+</p><p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Plastic Bottles Saved</p></div>
            <div><p className="text-3xl font-black italic">10K+</p><p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Happy Households</p></div>
            <div><p className="text-3xl font-black italic">100%</p><p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Biodegradable Formula</p></div>
            <div><p className="text-3xl font-black italic">No</p><p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Harmful Residues</p></div>
        </div>
      </section>

      {/* 5. Why Switch Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-[#1e3a5f] text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic">
             Why LUKA is Smarter Than Liquid
          </h2>
          <div className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x px-4">
            {switchReasons.map((item) => (
              <div key={item.id} className="min-w-[280px] lg:flex-1 snap-start group">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xs font-black text-[#1e3a5f] uppercase tracking-widest px-4">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. THE PROCESS: DROP, LOAD, WASH (NEW) --- */}
      <section className="w-full bg-[#f8faff] py-24 px-4">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-center text-3xl font-black text-[#1e3a5f] mb-16 uppercase italic">Simple. Effective. Effortless.</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Visual Connector Line for Desktop */}
                <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-blue-200 dashed"></div>
                
                <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-[#4b70e2] text-white rounded-full mx-auto flex items-center justify-center text-3xl font-black shadow-xl mb-6 ring-8 ring-white">01</div>
                    <h4 className="font-black uppercase text-sm mb-2">Drop</h4>
                    <p className="text-xs text-gray-400 px-6">Place one pod in the back of the empty drum.</p>
                </div>
                <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-[#4b70e2] text-white rounded-full mx-auto flex items-center justify-center text-3xl font-black shadow-xl mb-6 ring-8 ring-white">02</div>
                    <h4 className="font-black uppercase text-sm mb-2">Load</h4>
                    <p className="text-xs text-gray-400 px-6">Add your laundry on top of the LUKA pod.</p>
                </div>
                <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-[#4b70e2] text-white rounded-full mx-auto flex items-center justify-center text-3xl font-black shadow-xl mb-6 ring-8 ring-white">03</div>
                    <h4 className="font-black uppercase text-sm mb-2">Wash</h4>
                    <p className="text-xs text-gray-400 px-6">Start any cycle. It dissolves instantly!</p>
                </div>
             </div>
          </div>
      </section>

      {/* 7. Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">Featured Collection</h2>
            <div className="w-24 h-2 bg-[#4b70e2] mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 flex flex-col"
              >
                <div className="h-96 overflow-hidden bg-[#f9f9f9] p-8">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                </div>
                <div className="p-10 text-center flex-grow flex flex-col justify-between">
                  <h3 className="text-[12px] font-black text-[#1e3a5f] mb-4 uppercase tracking-tighter">{product.name}</h3>
                  <div className="mb-6"><span className="text-gray-300 line-through text-xs font-bold mr-3">Rs. {product.oldPrice}</span><span className="text-[#d91e18] text-2xl font-black italic tracking-tighter">Rs. {product.price}</span></div>
                  <button className="bg-[#1e3a5f] text-white w-full py-4 rounded-full font-black hover:bg-[#4b70e2] transition-all uppercase text-[10px] tracking-widest shadow-lg">Buy Now</button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* --- 8. INGREDIENT HIGHLIGHT (NEW) --- */}
      <section className="w-full bg-[#1e3a5f] py-24 text-white">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-black uppercase italic mb-8">What's Inside LUKA?</h2>
               <p className="text-white/70 mb-10 text-sm leading-relaxed">No secret toxins. No hidden chemicals. Just pure cleaning power derived from nature's strongest enzymes.</p>
               <div className="space-y-6">
                  {["Natural Bio-Enzymes for Stain Extraction", "Plant-based Surfactants for Gentle Wash", "Biodegradable Fast-Dissolving Film", "Skin-Safe Organic Fragrance"].map((text, i) => (
                    <div key={i} className="flex items-center gap-4"><span className="text-[#4b70e2] text-xl">✔</span> <span className="font-bold text-xs uppercase tracking-widest">{text}</span></div>
                  ))}
               </div>
            </div>
            <div className="bg-white/10 p-1 rounded-[4rem] backdrop-blur-sm">
                <img src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=800" className="w-full h-full rounded-[4rem] object-cover opacity-90 shadow-2xl" alt="Inside Luka" />
            </div>
         </div>
      </section>

      {/* --- 9. CUSTOMER TESTIMONIALS (NEW) --- */}
      <section className="w-full bg-white py-24 px-4 overflow-hidden">
        <h2 className="text-center text-2xl font-black uppercase tracking-[0.2em] mb-16 opacity-30 italic">Real People. Real Results.</h2>
        <div className="flex gap-8 overflow-hidden animate-marquee">
            {[1,2,3,4,5].map(i => (
                <div key={i} className="min-w-[350px] bg-gray-50 p-10 rounded-[3rem] border border-gray-100 italic">
                    <p className="text-sm text-gray-500 mb-6">"Maine pehle liquid detergents use kiye the, lekin LUKA PODS ne stain removal ka level hi badal diya. It's so mess-free!"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                        <div><h5 className="font-black text-xs uppercase">Anjali Sharma</h5><p className="text-[10px] text-gray-400">Verified Buyer</p></div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e3a5f] mb-4 uppercase italic">Support Center</h2>
            <p className="text-gray-400 text-sm tracking-widest font-bold">Everything you need to know about LUKA PODS.</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className={`border border-gray-100 rounded-3xl transition-all duration-300 ${activeFaq === index ? 'bg-white shadow-xl ring-1 ring-blue-100' : 'bg-gray-50'}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                >
                  <span className="text-[#1e3a5f] font-black uppercase text-xs tracking-widest">{faq.question}</span>
                  <span className={`text-2xl text-blue-500 font-light transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === index && (
                  <div className="px-8 pb-8 text-gray-500 text-sm leading-relaxed border-l-4 border-[#4b70e2] ml-8 mb-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;