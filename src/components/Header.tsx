
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Order', href: '#order' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
        isScrolled 
          ? isDark 
            ? "bg-black/90 shadow-md backdrop-blur-md" 
            : "bg-white/80 shadow-md backdrop-blur-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className={cn(
          "text-2xl font-serif font-bold tracking-tight",
          isDark ? "text-gray-100" : ""
        )}>
          Nischal<span className={isDark ? "text-gray-500" : "text-gray-500"}> Creations</span>
        </a>

        <div className="flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isDark 
                ? "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700" 
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors font-medium",
                  isDark 
                    ? "text-gray-400 hover:text-gray-100" 
                    : "text-gray-600 hover:text-black"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden transition-colors",
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-black"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out z-40",
          isDark ? "bg-black" : "bg-white",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl py-2 border-b transition-colors font-medium",
                isDark 
                  ? "text-gray-400 hover:text-gray-100 border-gray-800" 
                  : "text-gray-600 hover:text-black border-gray-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
