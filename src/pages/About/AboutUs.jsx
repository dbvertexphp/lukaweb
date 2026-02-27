import React from 'react';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <div className="font-sans text-[#0b143d]">
      {/* 1. Hero Section */}
      <section className="bg-[#fceef5] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6">
            Beyond Just Cleaning
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Luka was born out of a simple realization: Laundry shouldn't be a messy chore, 
            and it definitely shouldn't harm your skin or the planet. We are here to 
            revolutionize your home laundry experience.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
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

      {/* 3. Core Values (Icons/Features se inspired) */}
      <section className="bg-[#0b143d] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center uppercase italic mb-16">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Value 1 */}
            <div className="space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="text-xl font-bold uppercase">100% Plant-Based</h3>
              <p className="text-gray-400">Our ingredients come from nature, ensuring they are gentle on your skin and the environment.</p>
            </div>
            {/* Value 2 */}
            <div className="space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-bold uppercase">Powerful Cleaning</h3>
              <p className="text-gray-400">Natural Bio-Enzymes that fight the toughest stains better than any traditional liquid.</p>
            </div>
            {/* Value 3 */}
            <div className="space-y-4">
              <div className="text-4xl">🌍</div>
              <h3 className="text-xl font-bold uppercase">Zero Waste</h3>
              <p className="text-gray-400">No plastic jugs. Our pods use biodegradable film that dissolves instantly in any cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The "Smarter" Difference */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center border-2 border-[#0b143d] rounded-[40px] p-10 md:p-20 relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">Why Smarter Than Liquid?</h2>
            <p className="text-gray-600 text-lg mb-8">
                Luka isn't just a detergent; it's a commitment to a better home. 
                With pre-measured doses, there's no wastage, no overdose, and 
                absolutely <strong>no secret toxins.</strong> Just pure cleaning power 
                delivered in a small, smart pod.
            </p>
            <button className="bg-[#0b143d] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-900 transition-all">
                Shop the Collection
            </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;