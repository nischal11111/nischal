
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={theme === "dark" ? "bg-black text-gray-200 py-12 px-6 border-t border-gray-800" : "bg-gray-900 text-white py-12 px-6"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Nischal<span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Creations</span>
            </h3>
            <p className={theme === "dark" ? "text-gray-400 mb-6 max-w-md" : "text-gray-400 mb-6 max-w-md"}>
              Creating timeless pencil portraits that capture the essence of your cherished moments and memories.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                Home
              </a>
              <a href="#portfolio" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                Portfolio
              </a>
              <a href="#order" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                Order
              </a>
              <a href="#testimonials" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                Testimonials
              </a>
              <a href="#about" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                About
              </a>
              <a href="#contact" className={theme === "dark" ? "block text-gray-400 hover:text-gray-200 transition-colors" : "block text-gray-400 hover:text-white transition-colors"}>
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Subscribe</h4>
            <p className={theme === "dark" ? "text-gray-400 mb-4" : "text-gray-400 mb-4"}>
              Stay updated with my latest artworks and special offers.
            </p>
            <form className="flex space-x-0">
              <input
                type="email"
                placeholder="Your email address"
                className={theme === "dark" ? "px-4 py-2 bg-gray-900 text-gray-200 border-0 focus:ring-2 focus:ring-gray-700 outline-none flex-grow rounded-l-md" : "px-4 py-2 bg-gray-800 text-white border-0 focus:ring-2 focus:ring-gray-700 outline-none flex-grow rounded-l-md"}
              />
              <button
                type="submit"
                className={theme === "dark" ? "bg-gray-200 text-gray-900 px-4 py-2 font-medium rounded-r-md hover:bg-gray-300 transition-colors" : "bg-white text-gray-900 px-4 py-2 font-medium rounded-r-md hover:bg-gray-100 transition-colors"}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nischal_Creation. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={theme === "dark" ? "text-gray-500 hover:text-gray-300 transition-colors text-sm" : "text-gray-500 hover:text-white transition-colors text-sm"}>
              Privacy Policy
            </a>
            <a href="#" className={theme === "dark" ? "text-gray-500 hover:text-gray-300 transition-colors text-sm" : "text-gray-500 hover:text-white transition-colors text-sm"}>
              Terms of Service
            </a>
            <a href="#" className={theme === "dark" ? "text-gray-500 hover:text-gray-300 transition-colors text-sm" : "text-gray-500 hover:text-white transition-colors text-sm"}>
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
