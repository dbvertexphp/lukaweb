import React from 'react';
import Header from "../../components/header"; // Header import kiya gaya hai
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <div className="font-sans text-[#0b143d]">
      {/* 1. Header Section */}
      <Header />

      {/* 2. Banner Section (Visual Highlight) */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        {/* Background Image - Aap yahan apna brand image path daal sakte hain */}
        <img 
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80" 
          alt="Luka Banner" 
          className="w-full h-full object-cover"
        />
        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-[#0b143d]/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter drop-shadow-2xl">
              About Us
            </h1>
            <div className="h-1.5 w-24 bg-[#fceef5] mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. Hero Section (Text Content) */}
      <section className="bg-[#fceef5] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-6">
            Beyond Just Cleaning
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Luka was born out of a simple realization: Laundry shouldn't be a messy chore, 
            and it definitely shouldn't harm your skin or the planet. We are here to 
            revolutionize your home laundry experience.
          </p>
        </div>
      </section>

      {/* 4. Our Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase italic mb-6 border-b-4 border-[#0b143d] inline-block">
            The Luka Story
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For decades, laundry meant heavy plastic jugs, messy spills, and harsh chemicals that stayed 
            in your clothes. We spent months in the lab to create the perfect balance of 
            <strong> Science and Nature.</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Luka Pods are designed for the modern lifestyle—fast, effective, and conscious. 
            From the biodegradable film to the plant-based surfactants, every detail is crafted 
            to give you the deepest clean without the toxins.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80" 
            alt="Clean Laundry" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="bg-[#0b143d] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center uppercase italic mb-16">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl bg-white/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">🌱</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">100% Plant-Based</h3>
              <p className="text-gray-400">Our ingredients come from nature, ensuring they are gentle on your skin and the environment.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl bg-white/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">⚡</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">Powerful Cleaning</h3>
              <p className="text-gray-400">Natural Bio-Enzymes that fight the toughest stains better than any traditional liquid.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl bg-white/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">🌍</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">Zero Waste</h3>
              <p className="text-gray-400">No plastic jugs. Our pods use biodegradable film that dissolves instantly in any cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The "Smarter" Difference Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center border-2 border-[#0b143d] rounded-[40px] p-10 md:p-20 relative overflow-hidden bg-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">Why Smarter Than Liquid?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Luka isn't just a detergent; it's a commitment to a better home. 
                With pre-measured doses, there's no wastage, no overdose, and 
                absolutely <strong>no secret toxins.</strong> Just pure cleaning power 
                delivered in a small, smart pod.
            </p>
            <button className="bg-[#0b143d] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#1a2b7a] transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Shop the Collection
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;