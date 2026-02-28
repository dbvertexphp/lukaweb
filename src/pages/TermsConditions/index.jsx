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
                if (res.data.status) {
                    setContent(res.data.data.terms_condition || res.data.data.content);
                }
            } catch (error) {
                console.error("Error fetching Terms", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTerms();
        window.scrollTo(0, 0);
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