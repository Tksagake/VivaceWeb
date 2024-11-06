import React from 'react';
import { motion } from 'framer-motion';
import { Music, BookOpen, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Expert Music Lessons',
      description: 'Learn from industry professionals with years of experience.',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Comprehensive Curriculum',
      description: 'Structured learning paths for all skill levels.',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Flexible Scheduling',
      description: 'Choose from various time slots that suit your schedule.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Events',
      description: 'Regular performances and community gatherings.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Music Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Vivace Music School</h1>
          <p className="text-xl md:text-2xl mb-8">Where Music Comes to Life</p>
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
          >
            Start Your Musical Journey Today!
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vivace?</h2>
          <p className="text-xl text-gray-600">Discover the perfect harmony of learning and excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join our community of musicians and start learning today
            </p>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;