import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginModal = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, loginUser } = useAuth();

const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // .env se API URL uthane ke liye import.meta.env ka use karein
        const API_URL = import.meta.env.VITE_API_URL;

        const res = await axios.post(`${API_URL}/api/user/google-login`, {
          accessToken: tokenResponse.access_token,
        });

        if (res.data.token) {
          loginUser(res.data.user, res.data.token);
          // Optional: Success message
          console.log("Login successful with API:", API_URL);
        }
      } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
      }
    },
  });

  if (!isLoginModalOpen) return null; // Agar state false hai to kuch mat dikhao

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Welcome to Lukapods</h2>
          <p className="text-gray-500 mb-8">Please login to continue with your purchase</p>
          
          <button 
            onClick={() => login()}
            className="w-full flex items-center justify-center gap-4 border-2 border-gray-100 py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-gray-700"
          >
            <img 
    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" 
    alt="Google" 
    className="w-6 h-6 object-contain" 
  />
            Sign in with Google
          </button>
          
          <p className="mt-6 text-xs text-gray-400">
            By continuing, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;