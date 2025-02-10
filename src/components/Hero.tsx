import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-violet-50 to-transparent transform rotate-12 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-50 to-transparent transform -rotate-12 -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto"
          >
            Track your competitive programming journey with precision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            One platform to monitor your progress across LeetCode, CodeForces, and more. Get insights, track performance, and improve your skills.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2">
              Start tracking now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Contact sales
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 border-t border-gray-200 pt-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">10+</div>
            <div className="mt-2 text-base text-gray-600">Active users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">50+</div>
            <div className="mt-2 text-base text-gray-600">Problems tracked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">95%</div>
            <div className="mt-2 text-base text-gray-600">Success rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">24/7</div>
            <div className="mt-2 text-base text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;