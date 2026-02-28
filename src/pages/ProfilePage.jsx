import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User, MapPin, Phone, Mail, Camera, Save, Package, Edit2, X, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    
    // Form States - Backend fields ke according mapping
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile: '',
        address: {
            state: '',
            city: '',
            building_name: '',
            address_line: '',
        }
    });

    const token = localStorage.getItem("token");

    // 1. Fetch User Data
    const fetchProfile = async () => {
        try {
            // URL check karein: agar '/api/user/' par protect middleware hai toh ye chalega
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/get-profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.status && res.data.user) {
                const userData = res.data.user;
                setUser(userData);
                
                // Form data update (mapping from backend fields)
                setFormData({
                    full_name: userData.full_name || '',
                    email: userData.email || '',
                    mobile: userData.mobile || '',
                    address: {
                        state: userData.address?.state || '',
                        city: userData.address?.city || '',
                        building_name: userData.address?.building_name || '',
                        address_line: userData.address?.address_line || '',
                    }
                });
            }
        } catch (error) {
            console.error("Error fetching profile:", error.response?.data || error.message);
            if (error.response?.status === 401) {
                alert("Session expired, please login again.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchProfile();
        } else {
            navigate('/'); // Agar token nahi hai to home bhej do
        }
    }, [token]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // 2. Handle Profile Update
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('full_name', formData.full_name);
            data.append('email', formData.email);
            data.append('mobile', formData.mobile);
            // Backend JSON stringify address maang raha hoga
            data.append('address', JSON.stringify(formData.address));
            
            if (selectedFile) {
                data.append('profile_pic', selectedFile);
            }

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/updateCostomerProfileData`, data, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data" 
                }
            });

            if (res.data.status) {
                alert("Profile Updated Successfully!");
                setEditMode(false);
                fetchProfile();
            }
        } catch (error) {
            console.error("Update error:", error.response?.data);
            alert(error.response?.data?.message || "Update failed!");
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#1e3a5f]"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            <Header />
            {/* Banner Section */}
            <div className="h-48 md:h-56 bg-[#1e3a5f] relative">
                <div className="max-w-6xl mx-auto px-4 pt-6">
                    <button onClick={() => navigate(-1)} className="text-white/70 hover:text-white flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                        <ChevronLeft size={16} /> Back
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-24 relative z-10">
                    
                    {/* LEFT SIDEBAR */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center relative">
                            
                            <button 
                                onClick={() => setEditMode(!editMode)}
                                className={`absolute top-6 right-6 p-2 rounded-xl transition-all ${editMode ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-[#1e3a5f] hover:bg-blue-50'}`}
                            >
                                {editMode ? <X size={20}/> : <Edit2 size={20}/>}
                            </button>

                            {/* Profile Image Area */}
                            <div className="relative mb-6">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                                    <img 
                                        src={imagePreview || user?.profile_pic || 'https://ui-avatars.com/api/?name=' + (user?.full_name || 'User')} 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {editMode && (
                                    <label className="absolute bottom-1 right-1 bg-blue-600 p-2.5 rounded-full text-white cursor-pointer hover:bg-blue-700 shadow-lg border-2 border-white">
                                        <Camera size={18} />
                                        <input type="file" onChange={handleImageChange} className="hidden" accept="image/*" />
                                    </label>
                                )}
                            </div>

                            <div className="text-center">
                                <h2 className="text-xl font-black text-[#1e3a5f] uppercase tracking-tight">
                                    {user?.full_name || 'Luka User'}
                                </h2>
                                <div className="mt-3">
                                    <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                                        {user?.role || 'Customer'}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full mt-10 pt-8 border-t border-gray-50 space-y-5">
                                <div className="flex items-center gap-4 text-gray-500">
                                    <Mail size={18} className="text-gray-300" />
                                    <p className="text-sm font-semibold truncate">{user?.email}</p>
                                </div>
                                <div className="flex items-center gap-4 text-gray-500">
                                    <Phone size={18} className="text-gray-300" />
                                    <p className="text-sm font-semibold">{user?.mobile || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Order History Link */}
                        <div onClick={() => navigate('/orders')} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform"><Package size={20} /></div>
                                <span className="font-bold text-[#1e3a5f] text-sm">Order History</span>
                            </div>
                            <span className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">→</span>
                        </div>
                    </div>

                    {/* RIGHT FORM SECTION */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleProfileUpdate} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px]">
                            <div className="flex items-center justify-between mb-10 border-b border-gray-50 pb-6">
                                <h3 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tight italic">Account <span className="text-blue-600">Settings</span></h3>
                                {!editMode && <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">View Only</span>}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input 
                                        disabled={!editMode}
                                        type="text" 
                                        value={formData.full_name}
                                        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#1e3a5f] outline-none focus:bg-white focus:border-blue-100 transition-all disabled:opacity-50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Number</label>
                                    <input 
                                        disabled={!editMode}
                                        type="text" 
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#1e3a5f] outline-none focus:bg-white focus:border-blue-100 transition-all disabled:opacity-50"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">City / Town</label>
                                    <input 
                                        disabled={!editMode}
                                        type="text" 
                                        value={formData.address.city}
                                        onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})}
                                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#1e3a5f] outline-none focus:bg-white focus:border-blue-100 transition-all disabled:opacity-50"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Building / Apartment / House No.</label>
                                    <input 
                                        disabled={!editMode}
                                        type="text" 
                                        value={formData.address.building_name}
                                        onChange={(e) => setFormData({...formData, address: {...formData.address, building_name: e.target.value}})}
                                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#1e3a5f] outline-none focus:bg-white focus:border-blue-100 transition-all disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {editMode && (
                                <div className="mt-12 flex justify-end">
                                    <button 
                                        type="submit"
                                        className="bg-[#4b70e2] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 animate-pulse-slow"
                                    >
                                        <Save size={18} /> Save Changes
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;