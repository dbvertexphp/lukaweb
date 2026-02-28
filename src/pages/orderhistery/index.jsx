import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import Footer from "../../components/Footer";
import { toast } from 'react-hot-toast';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://api.lukapods.graphicsvolume.com";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        // Admin email 'admin@cavalierlogistic.in' ke liye suggest hota hai, 
        // par history hamesha _id se fetch hogi
        const userId = userData?._id || "65bc12345678901234567890"; 

        const response = await axios.get(`${baseURL}/api/order/get-orders/${userId}`);
        
        if (response.data.status) {
          setOrders(response.data.data); // Controller 'data' field mein array bhej raha hai
        }
      } catch (error) {
        console.error("Fetch Error:", error.response?.data);
        if (error.response?.status !== 404) {
            toast.error("Failed to load orders");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black text-2xl animate-pulse text-[#4b70e2]">LOADING ORDERS...</div>;

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e3a5f]">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">My Orders</h1>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-2xl font-black text-sm">{orders.length} Orders</span>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white p-20 rounded-[4rem] text-center shadow-sm border border-blue-50">
            <span className="text-6xl block mb-4">📦</span>
            <p className="font-black text-2xl uppercase opacity-20">No orders found</p>
            <button onClick={() => window.location.href='/shop'} className="mt-6 bg-[#4b70e2] text-white px-8 py-3 rounded-full font-bold uppercase text-xs">Start Shopping</button>
          </div>
        ) : (
          <div className="grid gap-8">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-white">
                {/* Order Top Bar */}
                <div className="bg-gray-50 px-8 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-gray-100">
                  <div className="flex gap-6">
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order ID</p>
                        <p className="font-bold text-xs">#{order._id.slice(-10).toUpperCase()}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</p>
                        <p className="font-bold text-xs">{new Date(order.created_at || Date.now()).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className={`px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter ${
                    order.awb_number === 'PENDING' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                  }`}>
                    Status: {order.awb_number || 'PROCESSING'}
                  </div>
                </div>

                {/* Items List */}
                <div className="p-8 space-y-6">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-3xl p-2 border border-gray-100 flex-shrink-0">
                        {/* Controller se aayi hui image use kar rahe hain */}
                        <img 
                          src={item.product_images?.[0] || 'https://via.placeholder.com/150'} 
                          alt="" 
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-black uppercase text-sm leading-tight mb-1">{item.product_name}</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Qty: {item.units} × ₹{item.selling_price}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-lg">₹{item.units * item.selling_price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Section */}
                <div className="px-8 py-6 bg-[#1e3a5f] text-white flex justify-between items-center">
                   <div>
                      <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest">Payment Method</p>
                      <p className="font-black text-xs uppercase">{order.payment_method}</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <p className="text-right leading-none">
                        <span className="text-[10px] font-bold uppercase opacity-60 block">Total Amount</span>
                        <span className="text-3xl font-black italic">₹{order.total_amount}</span>
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;