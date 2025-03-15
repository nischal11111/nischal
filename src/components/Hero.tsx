
import React from 'react';
import { ArrowDown } from 'lucide-react';
import "../Name.css";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with mask effect */}
      <div className="absolute inset-0 mask-image">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/60 to-white/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('images/coverpage.jpg')] 
                   bg-cover bg-center animate-pulse-slow"
        ></div>
      </div>

      {/* Content */}
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="artistic-text" id='mytxt'>Nischal Bhandari</h3>
        <br/>
        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6 animate-fade-in">
          Pencil Portrait Artist
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in">
          <span className="block">Transforming Moments</span>
          <span className="block mt-1">Into Timeless Art</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-balance animate-fade-in-up">
          I create handcrafted pencil portraits that capture the essence and emotion of your most cherished memories.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            View My Work
          </a>
          <a 
            href="#order" 
            className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Order a Portrait
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#portfolio" className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
