// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// const LoginModal = () => {
//   const { isLoginModalOpen, setIsLoginModalOpen, loginUser } = useAuth();

// const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         // .env se API URL uthane ke liye import.meta.env ka use karein
//         const API_URL = import.meta.env.VITE_API_URL;

//         const res = await axios.post(`${API_URL}/api/user/google-login`, {
//           accessToken: tokenResponse.access_token,
//         });

//         if (res.data.token) {
//           loginUser(res.data.user, res.data.token);
//           // Optional: Success message
//           console.log("Login successful with API:", API_URL);
//         }
//       } catch (error) {
//         console.error("Login Error:", error.response?.data || error.message);
//       }
//     },
//   });

//   if (!isLoginModalOpen) return null; // Agar state false hai to kuch mat dikhao

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
//         {/* Close Button */}
//         <button 
//           onClick={() => setIsLoginModalOpen(false)}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Welcome to Lukapods</h2>
//           <p className="text-gray-500 mb-8">Please login to continue with your purchase</p>
          
//           <button 
//             onClick={() => login()}
//             className="w-full flex items-center justify-center gap-4 border-2 border-gray-100 py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-gray-700"
//           >
//             <img 
//     src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" 
//     alt="Google" 
//     className="w-6 h-6 object-contain" 
//   />
//             Sign in with Google
//           </button>
          
//           <p className="mt-6 text-xs text-gray-400">
//             By continuing, you agree to our Terms & Conditions
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { X, Mail, Lock, User, Phone, ShieldCheck } from 'lucide-react';

const LoginModal = () => {
    const { isLoginModalOpen, setIsLoginModalOpen, loginUser } = useAuth();
    const [authMode, setAuthMode] = useState('login');
    const [showOTP, setShowOTP] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile: '', // 👈 Backend login ke liye mobile chahiye
        password: '',
        otp: ''
    });

    const API_URL = import.meta.env.VITE_API_URL;

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.post(`${API_URL}/api/user/google-login`, {
                    accessToken: tokenResponse.access_token,
                });
                if (res.data.token) {
                    loginUser(res.data.user, res.data.token);
                    toast.success("Login Successful!");
                }
            } catch (error) {
                toast.error("Google Login Failed");
            }
        },
    });

    if (!isLoginModalOpen) return null;

    // --- Signup Logic (Aapke backend ke according) ---
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Backend multipart/form-data use kar raha hai isliye FormData banayenge
            const data = new FormData();
            data.append('full_name', formData.full_name);
            data.append('email', formData.email);
            data.append('mobile', formData.mobile);
            data.append('password', formData.password);
            data.append('role', 'user'); // 👈 Mandatory field for your backend

            const res = await axios.post(`${API_URL}/api/user/register`, data);
            
            if (res.data.status) {
                toast.success("OTP sent to your email!");
                setShowOTP(true);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup Failed");
        } finally {
            setLoading(false);
        }
    };

    // --- OTP Verify Logic ---
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Backend expects { mobile, otp }
            const res = await axios.post(`${API_URL}/api/user/verifyOtp`, {
                mobile: formData.mobile,
                otp: formData.otp
            });
            if (res.data.status) {
                loginUser(res.data.user, res.data.token);
                toast.success("Verified Successfully!");
                setIsLoginModalOpen(false);
                setShowOTP(false);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid OTP");
        } finally {
            setLoading(false);
        }
    };

    // --- Login Logic (Backend mobile based hai) ---
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Backend expects { mobile, password }
            const res = await axios.post(`${API_URL}/api/user/login`, {
                mobile: formData.mobile,
                password: formData.password,
                firebase_token: "dummy_token"
            });
            if (res.data.status) {
                loginUser(res.data.user, res.data.token);
                toast.success("Welcome back!");
                setIsLoginModalOpen(false);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid Mobile/Password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e3a5f]/40 backdrop-blur-md p-4">
            <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <button onClick={() => setIsLoginModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10"><X size={24} /></button>

                <div className="p-8 pt-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-[#1e3a5f] uppercase italic tracking-tighter">
                            {showOTP ? "Verify Mobile" : authMode === 'login' ? "Login" : "Register"}
                        </h2>
                    </div>

                    {!showOTP ? (
                        <>
                            <div className="flex bg-gray-100 p-1.5 rounded-full mb-8">
                                <button onClick={() => setAuthMode('login')} className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase transition-all ${authMode === 'login' ? 'bg-white text-[#1e3a5f] shadow-sm' : 'text-gray-400'}`}>Login</button>
                                <button onClick={() => setAuthMode('signup')} className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase transition-all ${authMode === 'signup' ? 'bg-white text-[#1e3a5f] shadow-sm' : 'text-gray-400'}`}>Register</button>
                            </div>

                            <form onSubmit={authMode === 'login' ? handleLoginSubmit : handleSignupSubmit} className="space-y-4">
                                {authMode === 'signup' && (
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                        <input required type="text" placeholder="Full Name" value={formData.full_name} onChange={(e)=>setFormData({...formData, full_name: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
                                    </div>
                                )}
                                
                                {/* Mobile Input: Dono mode mein zaroori hai aapke backend ke liye */}
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                    <input required type="text" placeholder="Mobile Number" value={formData.mobile} onChange={(e)=>setFormData({...formData, mobile: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
                                </div>

                                {authMode === 'signup' && (
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                        <input required type="email" placeholder="Email Address" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
                                    </div>
                                )}

                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                    <input required type="password" placeholder="Password" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
                                </div>

                                <button disabled={loading} type="submit" className="w-full bg-[#1e3a5f] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl disabled:opacity-50">
                                    {loading ? "Processing..." : authMode === 'login' ? "Secure Login" : "Create Account"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-6">
                            <div className="relative text-center">
                                <p className="text-xs font-bold text-gray-400 mb-4">OTP sent to your email</p>
                                <input required type="text" placeholder="OTP" maxLength="6" value={formData.otp} onChange={(e)=>setFormData({...formData, otp: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 text-center text-xl font-black tracking-[0.5em] outline-none border-2 border-blue-50 focus:border-blue-200" />
                            </div>
                            <button disabled={loading} type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl">
                                {loading ? "Verifying..." : "Verify & Continue"}
                            </button>
                        </form>
                    )}

                    <div className="relative my-8 text-center text-[10px] uppercase font-black text-gray-300">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                        <span className="relative bg-white px-4">Or continue with</span>
                    </div>

                    <button onClick={() => googleLogin()} className="w-full border-2 border-gray-50 py-4 rounded-2xl flex items-center justify-center gap-4 font-bold text-gray-600 hover:bg-gray-50 transition-all">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="" />
                        Google Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;