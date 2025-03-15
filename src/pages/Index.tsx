
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import OrderForm from '../components/OrderForm';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-white"}`}>
      <Header />
      <Hero />
      <Portfolio />
      <OrderForm />
      <Testimonials />
      <About />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <button
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 focus:outline-none z-50 ${
          theme === "dark" 
            ? "bg-gray-800 text-gray-100 hover:bg-gray-700" 
            : "bg-gray-900 text-white hover:bg-gray-800"
        } ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
