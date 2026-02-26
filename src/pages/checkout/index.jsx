import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from "../../components/Footer";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'COD'
  });
    const baseURL = "https://api.lukapods.graphicsvolume.com";

  // 1. Load Cart Data
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (savedCart.length === 0) {
      navigate('/cart');
    }
    setCartItems(savedCart);
  }, [navigate]);

  // 2. Calculation Logic
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingCharge = (subtotal > 500 || subtotal === 0) ? 0 : 50;
  const total = subtotal + shippingCharge;

  const handleInputChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Agar Payment Method COD hai toh direct order create karein
    if (formData.paymentMethod === 'COD') {
      submitOrderToDatabase();
    } else {
      // Agar Online hai toh Razorpay kholein
      handleRazorpayFlow();
    }
  };

  // --- 1. Razorpay Flow ---
  const handleRazorpayFlow = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Yahan apni Razorpay Key dalein
      amount: total * 100, // Amount in paise
      currency: "INR",
      name: "Luka Pods",
      description: "Order Payment",
      handler: async function (response) {
        // Payment Success hone ke baad Database mein order save karein
        const paymentId = response.razorpay_payment_id;
        submitOrderToDatabase(paymentId);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email || "admin@cavalierlogistic.in", // Default email
        contact: formData.phone,
      },
      theme: { color: "#4b70e2" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // --- 2. Database Submission ---
  const submitOrderToDatabase = async (paymentId = "COD") => {
    const loadingToast = toast.loading("Processing your order...");
    setIsSubmitting(true);

    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?._id || "65bc12345678901234567890";

      const orderPayload = {
        user_id: userId,
        items: cartItems.map(item => ({
          product_id: item.id,
          product_name: item.name,
          selling_price: item.price,
          units: item.quantity
        })),
        shipping_address: {
          name: formData.fullName,
          mobile_number: formData.phone,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode
        },
        payment_method: paymentId === "COD" ? "cod" : "online",
        payment_id: paymentId, // Payment success hone par ID store karein
        total_amount: total,
        awb_number: "PENDING",
        courier_charge: shippingCharge
      };

      const response = await axios.post(`${baseURL}/api/order/create-order`, orderPayload);

      if (response.data.status) {
        toast.success("Order Placed Successfully! 🎉", { id: loadingToast });
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('storage'));
        setTimeout(() => navigate('/'), 2500);
      }
    } catch (error) {
      console.error("Order Error:", error.response?.data);
      toast.error(error.response?.data?.message || "Server Error", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4ff] font-sans text-[#1e3a5f]">
      <Toaster position="top-center" />
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black uppercase italic mb-10 tracking-tighter text-center">
            Order Details 
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Shipping Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-blue-50">
            <h2 className="text-xl font-black uppercase mb-8 flex items-center gap-3">
              <span className="bg-blue-100 p-2 rounded-lg text-lg">📍</span> Shipping Details
            </h2>
            
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Full Name *</label>
                  <input name="fullName" value={formData.fullName} onChange={handleInputChange} required type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-[#4b70e2] outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Phone Number *</label>
                  <input name="phone" value={formData.phone} onChange={handleInputChange} required type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-[#4b70e2] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Street Address *</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} required rows="3" placeholder="House no, Area, Landmark..." className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-[#4b70e2] outline-none"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">City *</label>
                  <input name="city" value={formData.city} onChange={handleInputChange} required type="text" placeholder="Mumbai" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-[#4b70e2] outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Pincode *</label>
                  <input name="pincode" value={formData.pincode} onChange={handleInputChange} required type="text" placeholder="400001" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-[#4b70e2] outline-none" />
                </div>
              </div>

         <div className="pt-6">
  <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
    <span className="bg-green-100 p-2 rounded-lg text-lg">💳</span> Payment Method
  </h2>
  <div className="grid grid-cols-2 gap-4">
    {/* COD Button */}
    <div 
      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
        formData.paymentMethod === 'COD' 
        ? 'border-[#4b70e2] bg-blue-50 shadow-md' 
        : 'border-gray-100 hover:border-blue-200'
      }`} 
      onClick={() => setFormData({...formData, paymentMethod: 'COD'})}
    >
      <p className="font-black text-xs uppercase tracking-widest text-center">Cash on Delivery</p>
    </div>

    {/* Online Button - Ab ye clickable hai! */}
    <div 
      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
        formData.paymentMethod === 'ONLINE' 
        ? 'border-[#4b70e2] bg-blue-50 shadow-md' 
        : 'border-gray-100 hover:border-blue-200'
      }`} 
      onClick={() => setFormData({...formData, paymentMethod: 'ONLINE'})}
    >
      <p className="font-black text-xs uppercase tracking-widest text-center">Online Payment</p>
    </div>
  </div>
</div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full text-white py-6 rounded-[2rem] font-black text-xl transition-all shadow-xl uppercase tracking-tighter mt-8 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1e3a5f] hover:bg-[#4b70e2]'}`}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Order →'}
              </button>
            </form>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:sticky lg:top-10 h-fit">
            <div className="bg-[#4b70e2] p-8 rounded-[3.5rem] text-white shadow-2xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-black uppercase italic mb-8 border-b border-white/20 pb-4">Your Items</h2>
              
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-sm">
                        <img src={item.image} className="w-full h-full object-contain mix-blend-multiply" alt={item.name} />
                      </div>
                      <div>
                        <p className="font-black text-sm uppercase leading-none">{item.name}</p>
                        <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">{item.pack} x {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-black">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between font-bold opacity-80 uppercase text-xs tracking-widest">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between font-bold opacity-80 uppercase text-xs tracking-widest">
                  <span>Delivery Charge</span>
                  <span>{shippingCharge === 0 ? 'FREE' : `₹${shippingCharge}`}</span>
                </div>
                <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                  <span className="text-xl font-black uppercase tracking-widest italic leading-none">Total <br/>Payable</span>
                  <span className="text-5xl font-black tracking-tighter">₹{total}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-6 bg-white rounded-3xl border border-blue-100 flex items-center gap-4 italic font-bold text-[#1e3a5f] text-sm">
                <span className="text-2xl">🛡️</span> 100% Secure Transaction & Genuine Products
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;