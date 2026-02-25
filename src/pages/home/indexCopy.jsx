
import React, { useState } from 'react';
import Header from '../../components/header';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState('Pack of 120');

  const products = [
    {
      id: 1,
      name: "Laundry Detergent Pods - All-in-1 Stain Removal",
      price: "1,899.00",
      oldPrice: "4,200.00",
      discount: "54%",
      rating: "4.75",
      reviews: "801",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
      description: "Hamari laundry sheets 100% plastic-free hain aur kapdo ko naya jaisa banaye rakhti hain. Yeh thande aur garam dono paani mein ghul jati hain.",
    },
    {
      id: 2,
      name: "Floor Cleaner Refill - Pet & Kid Safe Formula",
      price: "249.00",
      oldPrice: "500.00",
      discount: "50%",
      rating: "4.8",
      reviews: "450",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      description: "Baccho aur pets ke liye bilkul safe. Ismein neem aur aloe vera ke gunn hain jo floor ko sanitize karte hain.",
    },
    {
      id: 3,
      name: "Dishwash Power Pods - Tough Grease Remover",
      price: "349.00",
      oldPrice: "750.00",
      discount: "53%",
      rating: "4.9",
      reviews: "320",
      image: "https://www.shutterstock.com/image-vector/laundry-detergent-ads-camellia-scent-260nw-1023538507.jpg",
      description: "Ziddi chiknai ko hatane ke liye best. Ek pod ek baar ke bartano ke liye kaafi hai.",
    },
    {
      id: 4,
      name: "Multi-Surface Spray - Organic Shine",
      price: "199.00",
      oldPrice: "400.00",
      discount: "50%",
      rating: "4.6",
      reviews: "210",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800",
      description: "Glass, Wood, aur Metal—har satah ki safai ke liye ek hi solution.",
    },{
      id: 5,
      name: "Laundry Detergent Pods - All-in-1 Stain Removal",
      price: "1,899.00",
      oldPrice: "4,200.00",
      discount: "54%",
      rating: "4.75",
      reviews: "801",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
      description: "Hamari laundry sheets 100% plastic-free hain aur kapdo ko naya jaisa banaye rakhti hain. Yeh thande aur garam dono paani mein ghul jati hain.",
    },
    {
      id: 6,
      name: "Floor Cleaner Refill - Pet & Kid Safe Formula",
      price: "249.00",
      oldPrice: "500.00",
      discount: "50%",
      rating: "4.8",
      reviews: "450",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      description: "Baccho aur pets ke liye bilkul safe. Ismein neem aur aloe vera ke gunn hain jo floor ko sanitize karte hain.",
    },
    {
      id: 7,
      name: "Dishwash Power Pods - Tough Grease Remover",
      price: "349.00",
      oldPrice: "750.00",
      discount: "53%",
      rating: "4.9",
      reviews: "320",
      image: "https://www.shutterstock.com/image-vector/laundry-detergent-ads-camellia-scent-260nw-1023538507.jpg",
      description: "Ziddi chiknai ko hatane ke liye best. Ek pod ek baar ke bartano ke liye kaafi hai.",
    },
    {
      id: 8,
      name: "Multi-Surface Spray - Organic Shine",
      price: "199.00",
      oldPrice: "400.00",
      discount: "50%",
      rating: "4.6",
      reviews: "210",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800",
      description: "Glass, Wood, aur Metal—har satah ki safai ke liye ek hi solution.",
    }
    
  ];
  const switchReasons = [
  { id: 1, title: "Authentic reviews by Influencers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi0W4l40kU2xlb7fknstvgtIZCXEorKDL8g&s" },
  { id: 2, title: "Bioenzymes-Infused Stain Removers", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=500" },
  { id: 3, title: "Long-Lasting Fragrance", img: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=500" },
  { id: 4, title: "No Residue", img: "https://img.freepik.com/free-photo/domestis-duties-work-concept_273609-23995.jpg?semt=ais_user_personalization&w=740&q=80" },
  ]

  const packs = [
    { id: '120', label: 'Pack of 120', badge: 'Super Saver!', badgeCol: 'bg-green-500' },
    { id: '60', label: 'Pack of 60', badge: 'Most Bought!', badgeCol: 'bg-blue-400' },
    { id: '30', label: 'Pack of 30' },
    { id: '20', label: 'Pack of 20' }
  ];

 
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button 
            onClick={() => {setSelectedProduct(null); setQuantity(1);}}
            className="mb-6 text-[#1e3a5f] font-bold flex items-center hover:underline italic"
          >
            ← BACK TO SHOP
          </button>
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
            <div className="space-y-4">
              <div className="border rounded-2xl overflow-hidden bg-[#f3f4f6] relative">
                <img src={selectedProduct.image} className="w-full h-auto object-cover" alt="Product" />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-500">
                   🔍
                </button>
              </div>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-24 h-24 border rounded-xl overflow-hidden cursor-pointer hover:border-blue-500">
                    <img src={selectedProduct.image} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            

          
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] leading-snug">
                {selectedProduct.name}
              </h1>
              
             
              <div className="flex items-center mt-3 text-[#00bcd4]">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                <span className="text-gray-500 text-sm ml-2">{selectedProduct.rating} rating {selectedProduct.reviews} reviews</span>
              </div>

             
              <div className="grid grid-cols-4 gap-2 my-8 border-y border-gray-100 py-6">
                {[
                  { icon: "🧪", txt: "0% Harmful Chemicals" },
                  { icon: "🌱", txt: "Bioenzymes For Deep Clean" },
                  { icon: "🧺", txt: "Top & Front Load" },
                  { icon: "✨", txt: "Mess Free & Convenient" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-xl mb-1 shadow-sm">
                      {item.icon}
                    </div>
                    <p className="text-[9px] font-bold text-[#1e3a5f] uppercase leading-tight">{item.txt}</p>
                  </div>
                ))}
              </div>

              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 line-through text-xl">Rs. {selectedProduct.oldPrice}</span>
                <span className="text-[#d91e18] text-3xl font-black">Rs. {selectedProduct.price}</span>
                <span className="bg-[#d91e18] text-white text-xs font-bold px-2 py-1 rounded">-{selectedProduct.discount} OFF</span>
              </div>

              
              <div className="mb-6">
                <p className="font-bold text-gray-700 mb-4 text-sm">Pack</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {packs.map((pack) => (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPack(pack.label)}
                      className={`relative p-3 border-2 rounded-xl text-[13px] font-bold transition-all ${
                        selectedPack === pack.label 
                        ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white' 
                        : 'border-gray-200 text-[#1e3a5f] hover:border-blue-200'
                      }`}
                    >
                      {pack.badge && (
                        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 rounded italic font-black text-white whitespace-nowrap ${pack.badgeCol}`}>
                          {pack.badge}
                        </span>
                      )}
                      {pack.label}
                    </button>
                  ))}
                </div>
              </div>

             
              <div className="mb-8">
                <p className="font-bold text-gray-700 mb-3 text-sm">Quantity</p>
                <div className="flex items-center border-2 border-gray-200 w-32 rounded-full px-2 py-1">
                  <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="flex-1 font-bold text-xl text-gray-500">-</button>
                  <input type="text" value={quantity} readOnly className="w-8 text-center font-bold outline-none" />
                  <button onClick={() => setQuantity(q => q+1)} className="flex-1 font-bold text-xl text-gray-500">+</button>
                </div>
              </div>

       
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <button className="flex-1 bg-[#4b70e2] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg active:scale-95">
                  Add to cart
                </button>
                <button className="flex-1 bg-[#4b70e2] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg active:scale-95">
                  Buy It Now
                </button>
              </div>

            
              <div className="border-t border-gray-100">
                {["Description", "How it works", "Ingredients"].map((tab, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 px-2 transition">
                    <span className="font-bold text-[#1e3a5f] text-sm uppercase">{tab}</span>
                    <span className="text-gray-400">▼</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


return (
  <div className="min-h-screen w-full bg-white m-0 p-0 overflow-x-hidden">
    
   
    <div className="w-full bg-[#4b70e2] text-white py-2 px-4 text-center text-[12px] font-medium tracking-widest uppercase flex justify-between items-center sm:px-10">
      <span className="cursor-pointer hidden sm:block">❮</span>
      <span className="flex-1">Free Shipping on all orders →</span>
      <span className="cursor-pointer hidden sm:block">❯</span>
    </div>

    
    <div className="w-full border-b border-gray-100">
      <Header />
    </div>

    
    <section className="relative w-full h-[450px] md:h-[600px] lg:h-[750px] bg-gray-200 overflow-hidden">
      <img 
        src="https://img.freepik.com/free-photo/indoor-shot-happy-european-lady-with-overjoyed-expression-keeps-mouth-opened-crosses-hand-indicates-two-sides-detergents_273609-24908.jpg?semt=ais_user_personalization&w=740&q=80" 
        alt="Lukapods Banner" 
        className="w-full h-full object-cover block"
        onError={(e) => { e.target.src = "https://via.placeholder.com/1600x800?text=LukaPods+Detergent+Banner"; }} 
      />
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 bg-black/10">
        <button className="bg-white text-[#1e3a5f] px-10 py-3.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap">
          Shop Now
        </button>
      </div>
    </section>

   
    <section className="w-full bg-white py-14 text-center px-4">
      <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto italic font-medium leading-relaxed">
        "Lukapods cleaners ke saath apne ghar ko plastic-free aur chemical-free banayein."
      </p>
    </section>


<section className="w-full bg-white pb-20 mt-10">
  <div className="max-w-[1400px] mx-auto px-4">
    <h2 className="text-center text-[#1e3a5f] text-2xl md:text-3xl font-extrabold mb-12 tracking-tight uppercase italic">
      Why People Are Making the Switch to Laundry Pods
    </h2>

    
    <div className="flex overflow-x-auto gap-6 pb-10 no-scrollbar snap-x touch-pan-x">
      {switchReasons.map((item) => (
        <div key={item.id} className="min-w-[220px] md:min-w-[240px] lg:flex-1 snap-start group/card">
    
          <p className="text-[11px] font-bold text-[#1e3a5f] text-center mb-5 h-8 flex items-center justify-center uppercase tracking-tighter leading-tight px-2">
            {item.title}
          </p>
          
          
          <div className="relative aspect-[9/15] rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    
    <div className="w-full bg-gray-50/30">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] uppercase tracking-tighter italic text-center">
            Best Sellers
          </h2>
          <div className="w-20 h-1.5 bg-green-500 mt-3 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 flex flex-col h-full"
            >
              <div className="h-80 overflow-hidden bg-[#f9f9f9]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                />
              </div>
              <div className="p-8 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] font-bold text-[#1e3a5f] mb-3 h-10 overflow-hidden uppercase tracking-tight leading-tight px-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-5">
                    <span className="text-gray-400 line-through text-sm font-medium">Rs. {product.oldPrice}</span>
                    <span className="text-[#d91e18] text-2xl font-black tracking-tighter">Rs. {product.price}</span>
                  </div>
                </div>
                <button className="bg-[#1e3a5f] text-white w-full py-3.5 rounded-2xl font-bold hover:bg-green-600 transition-all uppercase text-[10px] tracking-widest shadow-md active:scale-95">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>


    <footer className="w-full bg-[#1e3a5f] py-14 text-center text-white/70 text-[11px] tracking-[0.2em] uppercase">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-4">Follow us on Social Media</p>
        <p>© 2024 LUKAPODS CLEANERS. REFILL. REUSE. RECYCLE.</p>
      </div>
    </footer>
  </div>
);
};

export default Home;