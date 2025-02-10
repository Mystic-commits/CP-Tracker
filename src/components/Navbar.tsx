import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">CP Tracker</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#developers" className="text-gray-600 hover:text-gray-900">Developers</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                Start now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <a href="#products" className="block text-gray-600 hover:text-gray-900">Products</a>
            <a href="#solutions" className="block text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#developers" className="block text-gray-600 hover:text-gray-900">Developers</a>
            <a href="#resources" className="block text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <div className="pt-4 space-y-4">
              <button className="w-full text-left text-gray-600 hover:text-gray-900">
                Sign in
              </button>
              <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                Start now
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;