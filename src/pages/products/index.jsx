import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from "../../components/Footer";
// fdfd
const Product = ({ product, onBack }) => {
  const [selectedPack, setSelectedPack] = useState('Pack of 120');
  const [activeTab, setActiveTab] = useState('description'); 
  const [mainImage, setMainImage] = useState(product.image);
  const [openFaq, setOpenFaq] = useState(null);

  // --- Comparison Data ---
  const comparisonData = [
    { feature: "Stain Removal", luka: "Advanced Bio-Enzymes", ordinary: "Harsh Chemicals" },
    { feature: "Fabric Softness", luka: "Built-in Conditioner", ordinary: "Requires Extra Purchase" },
    { feature: "Skin Safety", luka: "Dermatologically Safe", ordinary: "May Cause Irritation" },
    { feature: "Dissolve Time", luka: "100% Instant (Cold/Hot)", ordinary: "Leaves Residue" },
    { feature: "Eco Impact", luka: "Zero Plastic / Biodegradable", ordinary: "Plastic Jugs Waste" },
  ];

  const faqData = [
    { id: 1, q: "Are LUKA PODS safe for people with sensitive skin?", a: "Definitely! Our pods are crafted with skin-friendly, plant-derived ingredients and are dermatologically tested to ensure they are gentle even for the most sensitive skin." },
    { id: 2, q: "What is the ideal number of pods for a single wash?", a: "For a regular load (up to 7kg), just 1 LUKA POD is enough. For heavily soiled or extra-large loads (>8kg), use 2 pods." },
    { id: 3, q: "Do I need fabric softener?", a: "No! LUKA PODS have a 3-in-1 formula that includes natural softening agents, so your clothes stay plush without extra additives." },
    { id: 4, q: "Are they safe for front-load machines?", a: "Absolutely. They are low-suds and designed for both Front-load and Top-load fully automatic machines." },
    { id: 5, q: "Is the fragrance long-lasting?", a: "Yes, our pods use micro-capsule fragrance technology that releases a fresh floral aroma even days after washing." }
  ];

  const tabContent = {
    description: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Upgrade your laundry routine with <strong>LUKA PODS</strong>. Our concentrated formula is 10x more powerful than regular powder.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Bio-Enzyme Power:</strong> Breaks down oil and protein stains.</li>
          <li><strong>Color Guard:</strong> Keeps whites white and colors vibrant.</li>
          <li><strong>Fragrance Bloom:</strong> Fresh laundry scent that lasts up to 7 days.</li>
        </ul>
      </div>
    ),
    how: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="text-xl font-bold text-blue-600">01</p>
          <p className="text-xs font-bold uppercase mt-1">Drop the Pod</p>
          <p className="text-[10px] text-gray-500">Into the back of the empty drum.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="text-xl font-bold text-blue-600">02</p>
          <p className="text-xs font-bold uppercase mt-1">Add Clothes</p>
          <p className="text-[10px] text-gray-500">Add your laundry on top of the pod.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="text-xl font-bold text-blue-600">03</p>
          <p className="text-xs font-bold uppercase mt-1">Press Start</p>
          <p className="text-[10px] text-gray-500">Run any cycle, it dissolves instantly.</p>
        </div>
      </div>
    ),
    why: (
      <div className="grid grid-cols-2 gap-4">
        <div className="text-sm font-semibold flex items-center gap-2">🌱 Biodegradable</div>
        <div className="text-sm font-semibold flex items-center gap-2">🐶 Pet Friendly</div>
        <div className="text-sm font-semibold flex items-center gap-2">👶 Baby Safe</div>
        <div className="text-sm font-semibold flex items-center gap-2">🚫 No Bleach</div>
      </div>
    )
  };

  const packs = [
    { id: '120', label: 'Pack of 120',  badgeCol: 'bg-red-500' },
    { id: '60', label: 'Pack of 60',  badgeCol: 'bg-blue-500' },
    { id: '30', label: 'Pack of 30' },
    { id: '20', label: 'Pack of 20' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1e3a5f]">
      {/* Promo Bar */}
      <div className="w-full bg-[#4b70e2] text-white py-2 text-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
        ✨ 10,000+ Happy Households Across India ✨
      </div>
      
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <button onClick={onBack} className="mb-8 text-[#1e3a5f] font-bold flex items-center hover:opacity-70 transition-opacity italic text-xs tracking-widest">
          ← BACK TO SHOP
        </button>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-6">
            <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden bg-[#f9f9f9] shadow-inner group">
              <img src={mainImage} className="w-full h-auto object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" alt="Main" />
            </div>
            <div className="flex justify-center gap-4">
              {[product.image, "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", "https://images.unsplash.com/photo-1585833014492-7a360edd7a24?q=80&w=400"].map((img, i) => (
                <div key={i} onClick={() => setMainImage(img)} className={`w-20 h-20 border-2 rounded-2xl overflow-hidden cursor-pointer p-2 transition-all ${mainImage === img ? 'border-blue-500 shadow-lg ring-4 ring-blue-50' : 'border-gray-100 opacity-60'}`}>
                  <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 uppercase">{product.name}</h1>
            <p className="text-[#4b70e2] font-bold tracking-widest text-xs mb-4">PREMIUM 3-IN-1 LAUNDRY SOLUTION</p>
            
            <div className="flex items-center space-x-1 text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl">★</span>)}
              <span className="text-gray-500 text-sm ml-3 font-bold">{product.rating} (520 Reviews)</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100">
              {[{ icon: "🍀", t: "Bio" }, { icon: "🫧", t: "HE" }, { icon: "👶", t: "Safe" }, { icon: "⚡", t: "Fast" }].map((item, i) => (
                <div key={i}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-[9px] font-black uppercase tracking-tighter">{item.t} Clean</p>
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-black text-[#d91e18]">Rs. {product.price}</span>
              <span className="text-gray-400 line-through text-lg">Rs. {product.oldPrice}</span>
              <span className="bg-red-100 text-[#d91e18] text-[10px] font-black px-3 py-1 rounded-full">{product.discount} OFF</span>
            </div>

            <div className="mb-10">
              <p className="font-black text-[11px] mb-4 tracking-widest text-gray-400 uppercase">Select Bundle Size</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {packs.map((pack) => (
                  <button key={pack.id} onClick={() => setSelectedPack(pack.label)} className={`relative py-4 px-2 border-2 rounded-2xl text-[11px] font-black transition-all ${selectedPack === pack.label ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-xl' : 'border-gray-100 hover:border-blue-200'}`}>
                    {pack.badge && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] px-2 py-0.5 rounded-full font-black text-white ${pack.badgeCol}`}>{pack.badge}</span>}
                    {pack.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#4b70e2] text-white py-6 rounded-full font-black text-xl hover:bg-blue-700 transition shadow-2xl uppercase tracking-[0.2em] mb-12">
              Add to Cart
            </button>

            {/* Content Tabs */}
            <div className="border-t border-gray-100">
              {['description', 'how', 'why'].map((tab) => (
                <div key={tab} className="border-b border-gray-100">
                  <button onClick={() => toggleTab(tab)} className="w-full flex justify-between items-center py-5 font-black uppercase text-xs tracking-widest hover:text-blue-500 transition-colors">
                    {tab === 'how' ? 'How to Use' : tab === 'why' ? 'Our Values' : 'The Formula'}
                    <span className={`text-lg transition-transform ${activeTab === tab ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${activeTab === tab ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    {tabContent[tab]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION 1: THE COMPARISON TABLE (NEW) --- */}
        <div className="my-32">
          <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase">LUKA <span className="text-[#4b70e2]">VS</span> ORDINARY</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
              <thead>
                <tr className="bg-[#1e3a5f] text-white uppercase text-xs tracking-widest">
                  <th className="p-6 text-left">Feature</th>
                  <th className="p-6 bg-[#4b70e2]">LUKA PODS</th>
                  <th className="p-6 text-gray-300">Ordinary Detergents</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 text-sm">
                    <td className="p-6 font-bold text-gray-500">{row.feature}</td>
                    <td className="p-6 font-bold text-blue-800 bg-blue-50/30">✅ {row.luka}</td>
                    <td className="p-6 text-gray-400 italic">❌ {row.ordinary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- SECTION 2: THE 3-IN-1 VISUAL BANNER (EXISTING) --- */}
        <div className="my-32 bg-[#e7efff] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
          <div className="w-full lg:w-1/2 p-16 relative flex justify-center bg-gradient-to-tr from-[#dce8ff] to-[#f0f5ff]">
            <img src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=800" className="w-full rounded-[2.5rem] shadow-2xl rotate-2" alt="Premium Clean" />
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-xl animate-bounce">
                <p className="text-[10px] font-black uppercase text-blue-500">Stain Remover ✨</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-10 text-[#1e3a5f] leading-none uppercase">The Power of <br/><span className="text-[#4b70e2]">3 Formulas</span> in 1</h2>
            <div className="space-y-10">
                <div className="flex gap-6 items-start">
                    <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">🌸</span>
                    <div><h4 className="font-black text-xs uppercase mb-1">Aroma Bloom</h4><p className="text-sm text-gray-500">Nature-inspired floral fragrance that stays fresh for a week.</p></div>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">🛡️</span>
                    <div><h4 className="font-black text-xs uppercase mb-1">Fiber Defense</h4><p className="text-sm text-gray-500">Deep cleans without damaging cloth fibers or fading colors.</p></div>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">☁️</span>
                    <div><h4 className="font-black text-xs uppercase mb-1">Ultra Softness</h4><p className="text-sm text-gray-500">Built-in fabric softener for that luxury towel feel every time.</p></div>
                </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: TRUST BADGES & VALUES (NEW) --- */}
        <div className="my-32 py-20 bg-gray-50 rounded-[4rem] text-center border border-gray-100">
           <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-gray-400">Better for You. Better for the Earth.</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-6">
              {[
                {img: "🌍", t: "100% Biodegradable", d: "Naturally decomposes without harming oceans."},
                {img: "🧪", t: "No Harsh Toxins", d: "Zero Phosphates, Chlorine or Parabens."},
                {img: "👶", t: "Baby Safe Formula", d: "Safe for the most delicate newborn skin."},
                {img: "🐰", t: "Cruelty Free", d: "Never tested on animals. Vegan friendly."}
              ].map((val, i) => (
                <div key={i}>
                  <div className="text-5xl mb-6">{val.img}</div>
                  <h4 className="font-black text-[11px] uppercase mb-2 tracking-widest">{val.t}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed px-4">{val.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto my-32">
          <h2 className="text-center text-4xl font-black mb-16 tracking-tight uppercase">Questions? <span className="text-[#4b70e2]">Look Here</span></h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={item.id} className={`border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-blue-50/30 ring-2 ring-blue-100' : 'bg-white shadow-sm hover:shadow-md'}`}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-7 text-left group">
                  <div className="flex items-center gap-6">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${openFaq === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100'}`}>
                      {openFaq === index ? '−' : '+'}
                    </span>
                    <span className="font-black text-[#1e3a5f] text-sm md:text-base tracking-tight">{item.q}</span>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-60 opacity-100 pb-8 px-24' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-6">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;