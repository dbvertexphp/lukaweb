import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import Footer from '../../components/Footer';

const TermsConditions = () => {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;

   useEffect(() => {
    const fetchTerms = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/CompanyDetails/getTermsConditions`);
            console.log("Terms API Response:", res.data); // 👈 Console mein check karein structure

            if (res.data.status) {
                // Backend structures vary, ye 3 possible options check karega:
                const dataObj = res.data.data;
                
                if (dataObj) {
                    // Option A: res.data.data.terms_condition
                    // Option B: Agar data array hai toh: res.data.data[0].terms_condition
                    const contentValue = Array.isArray(dataObj) 
                        ? dataObj[0]?.terms_condition 
                        : dataObj.terms_condition;
                        
                    setContent(contentValue || "No terms content found.");
                } else {
                    // Option C: res.data.terms_condition (Agar seedha data mein ho)
                    setContent(res.data.terms_condition || "Content is missing in API.");
                }
            }
        } catch (error) {
            console.error("Error fetching Terms:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchTerms();
}, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-blue-900/5 border border-gray-100">
                    <h1 className="text-4xl font-black text-[#1e3a5f] uppercase italic tracking-tighter mb-10 border-b pb-6">
                        Terms & <span className="text-blue-600">Conditions</span>
                    </h1>
                    
                    {loading ? (
                        <div className="animate-pulse space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </div>
                    ) : (
                        <div 
                            className="prose prose-blue max-w-none text-gray-600 leading-relaxed text-sm md:text-base"
                            dangerouslySetInnerHTML={{ __html: content }} 
                        />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsConditions;