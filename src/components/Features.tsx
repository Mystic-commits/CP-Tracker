import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Target, Code2 } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Progress Analytics',
    description: 'Track your growth with advanced analytics and insights across all platforms.'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Smart Calendar',
    description: 'Never miss a contest with intelligent scheduling and reminders.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Goal Tracking',
    description: 'Set and achieve your competitive programming goals with personalized roadmaps.'
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Code Analysis',
    description: 'Get instant feedback on your solutions with our advanced analysis engine.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Everything you need to excel in competitive programming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Powerful tools and features designed to help you improve your skills and track your progress.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group flex flex-col"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-violet-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex-grow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
