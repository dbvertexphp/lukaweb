

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


// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { toast } from 'react-hot-toast'; // Toaster use ho raha hai
// import { X, Mail, Lock, User, Phone, ShieldCheck } from 'lucide-react';

// const LoginModal = () => {
//     const { isLoginModalOpen, setIsLoginModalOpen, loginUser } = useAuth();
//     const [authMode, setAuthMode] = useState('login');
//     const [showOTP, setShowOTP] = useState(false);
//     const [loading, setLoading] = useState(false);
    
//     const [formData, setFormData] = useState({
//         full_name: '',
//         email: '',
//         mobile: '',
//         password: '',
//         otp: ''
//     });

//     const API_URL = import.meta.env.VITE_API_URL;

//     const googleLogin = useGoogleLogin({
//         onSuccess: async (tokenResponse) => {
//             const loadId = toast.loading("Google se login ho raha hai...");
//             try {
//                 const res = await axios.post(`${API_URL}/api/user/google-login`, {
//                     accessToken: tokenResponse.access_token,
//                 });
//                 if (res.data.token) {
//                     loginUser(res.data.user, res.data.token);
//                     toast.success("Google Login Safal Raha! 🎉", { id: loadId });
//                 }
//             } catch (error) {
//                 toast.error("Google Login Fail ho gaya", { id: loadId });
//             }
//         },
//     });

//     if (!isLoginModalOpen) return null;

//     // --- 1. Signup Logic (Alerts Added) ---
//     const handleSignupSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const loadId = toast.loading("Account ban raha hai...");
//         try {
//             const data = new FormData();
//             data.append('full_name', formData.full_name);
//             data.append('email', formData.email);
//             data.append('mobile', formData.mobile);
//             data.append('password', formData.password);
//             data.append('role', 'user');

//             const res = await axios.post(`${API_URL}/api/user/register`, data);
            
//             if (res.data.status) {
//                 toast.success("Registration Successful! OTP aapke email par bhej diya gaya hai. 📧", { id: loadId, duration: 4000 });
//                 setShowOTP(true);
//             }
//         } catch (error) {
//             // Backend se aane wala error message dikhayega (e.g. Email already exists)
//             const errMsg = error.response?.data?.message || "Signup Fail ho gaya!";
//             toast.error(errMsg, { id: loadId });
//         } finally {
//             setLoading(false);
//         }
//     };

//     // --- 2. OTP Verify Logic (Alerts Added) ---
//     const handleVerifyOTP = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const loadId = toast.loading("OTP verify ho raha hai...");
//         try {
//             const res = await axios.post(`${API_URL}/api/user/verifyOtp`, {
//                 mobile: formData.mobile,
//                 otp: formData.otp
//             });
//             if (res.data.status) {
//                 toast.success("Mobile Verified! Login Successful. 🎉", { id: loadId });
//                 loginUser(res.data.user, res.data.token);
//                 setIsLoginModalOpen(false);
//                 setShowOTP(false);
//             }
//         } catch (error) {
//             const errMsg = error.response?.data?.message || "Galat OTP! Dobara koshish karein.";
//             toast.error(errMsg, { id: loadId });
//         } finally {
//             setLoading(false);
//         }
//     };

//     // --- 3. Login Logic (Alerts Added) ---
//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const loadId = toast.loading("Login ho raha hai...");
//         try {
//             const res = await axios.post(`${API_URL}/api/user/login`, {
//                 mobile: formData.mobile,
//                 password: formData.password,
//                 firebase_token: "dummy_token"
//             });
//             if (res.data.status) {
//                 toast.success(`Swagat hai, ${res.data.user.full_name}! Login Safal raha. ✅`, { id: loadId });
//                 loginUser(res.data.user, res.data.token);
//                 setIsLoginModalOpen(false);
//             }
//         } catch (error) {
//             // Galat Password ya Mobile hone par backend message dikhayega
//             const errMsg = error.response?.data?.message || "Login Fail! Mobile ya Password galat hai.";
//             toast.error(errMsg, { id: loadId });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e3a5f]/40 backdrop-blur-md p-4">
//             <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
//                 <button onClick={() => setIsLoginModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10"><X size={24} /></button>

//                 <div className="p-8 pt-12">
//                     <div className="text-center mb-8">
//                         <h2 className="text-3xl font-black text-[#1e3a5f] uppercase italic tracking-tighter">
//                             {showOTP ? "Verify Mobile" : authMode === 'login' ? "Login" : "Register"}
//                         </h2>
//                     </div>

//                     {!showOTP ? (
//                         <>
//                             <div className="flex bg-gray-100 p-1.5 rounded-full mb-8">
//                                 <button onClick={() => setAuthMode('login')} className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase transition-all ${authMode === 'login' ? 'bg-white text-[#1e3a5f] shadow-sm' : 'text-gray-400'}`}>Login</button>
//                                 <button onClick={() => setAuthMode('signup')} className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase transition-all ${authMode === 'signup' ? 'bg-white text-[#1e3a5f] shadow-sm' : 'text-gray-400'}`}>Register</button>
//                             </div>

//                             <form onSubmit={authMode === 'login' ? handleLoginSubmit : handleSignupSubmit} className="space-y-4">
//                                 {authMode === 'signup' && (
//                                     <div className="relative">
//                                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                                         <input required type="text" placeholder="Full Name" value={formData.full_name} onChange={(e)=>setFormData({...formData, full_name: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
//                                     </div>
//                                 )}
                                
//                                 <div className="relative">
//                                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                                     <input required type="text" placeholder="Mobile Number" value={formData.mobile} onChange={(e)=>setFormData({...formData, mobile: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
//                                 </div>

//                                 {authMode === 'signup' && (
//                                     <div className="relative">
//                                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                                         <input required type="email" placeholder="Email Address" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
//                                     </div>
//                                 )}

//                                 <div className="relative">
//                                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                                     <input required type="password" placeholder="Password" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100" />
//                                 </div>

//                                 <button disabled={loading} type="submit" className="w-full bg-[#1e3a5f] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl disabled:opacity-50 active:scale-95 transition-transform">
//                                     {loading ? "Processing..." : authMode === 'login' ? "Secure Login" : "Create Account"}
//                                 </button>
//                             </form>
//                         </>
//                     ) : (
//                         <form onSubmit={handleVerifyOTP} className="space-y-6">
//                             <div className="relative text-center">
//                                 <p className="text-xs font-bold text-gray-400 mb-4">OTP sent to your email</p>
//                                 <input required type="text" placeholder="OTP" maxLength="6" value={formData.otp} onChange={(e)=>setFormData({...formData, otp: e.target.value})} className="w-full bg-gray-50 rounded-2xl py-4 text-center text-xl font-black tracking-[0.5em] outline-none border-2 border-blue-50 focus:border-blue-200" />
//                             </div>
//                             <button disabled={loading} type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl">
//                                 {loading ? "Verifying..." : "Verify & Continue"}
//                             </button>
//                         </form>
//                     )}

//                     <div className="relative my-8 text-center text-[10px] uppercase font-black text-gray-300">
//                         <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
//                         <span className="relative bg-white px-4">Or continue with</span>
//                     </div>

//                     <button onClick={() => googleLogin()} className="w-full border-2 border-gray-50 py-4 rounded-2xl flex items-center justify-center gap-4 font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95">
//                         <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="" />
//                         Google Login
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginModal;