import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header';
import Footer from "../../components/Footer";
import { toast, Toaster } from 'react-hot-toast';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://api.lukapods.graphicsvolume.com";
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -400, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/user/product/all`);
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        toast.error("Products Load Nahi Ho Paye!");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-[#4b70e2] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="font-black uppercase italic text-[#1e3a5f] tracking-tighter">Loading Collection...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1e3a5f]">
      <Toaster />
      
      {/* 1. Announcement Bar (Exactly like Home) */}


      <Header />

      {/* 2. Collection Hero Banner (Home Style) */}
      <section className="relative w-full h-[300px] md:h-[450px] bg-[#f8faff] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4b70e2]/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-[#1e3a5f] uppercase tracking-tighter italic mb-4">
            Our Collection
          </h1>
          <div className="w-24 h-2 bg-[#4b70e2] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] leading-loose">
            High Performance Cleaning • Zero Waste Lifestyle • Bio-Enzyme Powered
          </p>
        </div>
      </section>

      {/* 3. Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {products.length === 0 ? (
          <div className="text-center py-20 opacity-20 font-black uppercase text-2xl italic tracking-tighter">
            No Products Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} baseURL={baseURL} />
            ))}
          </div>
        )}

        {/* 4. Brand Content (Navy Blue Section like Home) */}
        <div className="bg-[#1e3a5f] text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-6 tracking-tighter leading-tight">
                Hard on stains.<br/> Soft on nature.
              </h2>
              <p className="text-sm opacity-70 leading-relaxed font-medium uppercase tracking-wide mb-8">
                Luka Pods are infused with advanced bio-enzymes that dissolve instantly and leave no residue. 
                Experience the future of laundry today.
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/10 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">Eco Friendly</div>
                 <div className="bg-white/10 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">Bio-Enzymes</div>
              </div>
            </div>
            <div className="hidden lg:block">
               <img src="https://img.freepik.com/free-photo/domestis-duties-work-concept_273609-23995.jpg" className="rounded-[3rem] h-64 w-full object-cover opacity-80" alt="Luka Clean" />
            </div>
          </div>
        </div>

        {/* 5. Best-Selling Section (Home Style) */}
     <section className="border-t border-gray-100 pt-24 pb-12 overflow-hidden relative">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-[#1e3a5f] italic flex items-center gap-4">
          <span className="w-12 h-2 bg-[#4b70e2] rounded-full"></span> Best Selling Products 
        </h2>

        {/* --- Navigation Arrows --- */}
        <div className="flex gap-4 pr-6">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all font-black text-xl"
          >
            ❮
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all font-black text-xl"
          >
            ❯
          </button>
        </div>
      </div>

      {/* --- Scrollable Container --- */}
      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto pb-12 no-scrollbar snap-x px-4 scroll-smooth"
      >
        {products.slice(0, 6).map((product) => (
          <div key={`best-${product._id}`} className="min-w-[300px] md:min-w-[400px] flex snap-start">
            <ProductCard product={product} baseURL={baseURL} />
          </div>
        ))}
      </div>
    </section>
      </div>

      <Footer />
    </div>
  );
};

// --- Product Card Component (Exactly matching Home Grid style) ---
const ProductCard = ({ product, baseURL }) => {
  const navigate = useNavigate();
  
  const imageUrl = product.product_images && product.product_images.length > 0 
    ? product.product_images[0].startsWith('http') 
        ? product.product_images[0] 
        : `${baseURL}/${product.product_images[0].replace(/^\/+/, "")}`
    : 'https://via.placeholder.com/400';

  const pPrice = product.price || 0;
  const pOldPrice = Math.round(pPrice * 1.3); // Visual Discount

  return (
    <div 
      onClick={() => navigate(`/product/${product._id}`)}
      className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 flex flex-col relative"
    >
      {/* Discount Badge */}
      <div className="absolute top-6 left-6 z-10 bg-[#d91e18] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg italic">
        SALE -30%
      </div>
      
      {/* Product Image Container */}
      <div className="h-80 overflow-hidden bg-[#f9f9f9] p-10 flex items-center justify-center">
        <img 
          src={imageUrl} 
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" 
          alt={product.product_name} 
        />
      </div>
      
      {/* Details Section */}
      <div className="p-10 text-center flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-[13px] font-black text-[#1e3a5f] mb-3 uppercase tracking-tighter line-clamp-2 h-10 leading-tight">
            {product.product_name}
          </h3>
          
          {/* Rating Stars (Luka Blue) */}
          <div className="flex justify-center gap-1 mb-6">
             {[...Array(5)].map((_, i) => <span key={i} className="text-[#4b70e2] text-xs">★</span>)}
          </div>

          <div className="mb-8 flex flex-col items-center">
            <span className="text-gray-300 line-through text-[11px] font-bold">Rs. {pOldPrice}</span>
            <span className="text-[#d91e18] text-3xl font-black italic tracking-tighter">Rs. {pPrice}</span>
          </div>
        </div>

        <button  onClick={() => navigate('/checkout')} className="bg-[#1e3a5f] text-white w-full py-4 rounded-full font-black hover:bg-[#4b70e2] transition-all uppercase text-[10px] tracking-[0.2em] shadow-lg transform active:scale-95">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductListing;