import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Users, BookOpen, Calendar, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Instrumental Lessons',
      description: 'One-on-one instruction in piano, violin, guitar, and more.',
      price: 'From Ksh 500/session',
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Vocal Training',
      description: 'Professional vocal coaching for all genres and levels.',
      price: 'From Ksh 500/session',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Individual Classes',
      description: 'Solo and tailored learning experiences in music theory.',
      price: 'From Ksh 500/person/week',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Group Classes',
      description: 'Collaborative learning experiences in music theory.',
      price: 'From Ksh 350/person/week/group',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Music Theory',
      description: 'Comprehensive understanding of musical concepts.',
      price: 'From Ksh 500/session',
    },
  ];

  const events = [
    {
      title: 'Harmonize and Groove II 2024',
      date: 'December 2-6, 2024',
      description: 'Learn key concepts of Music theory.',
    },
    {
      title: 'Comprehensive Music Course',
      date: 'January 5- March 24, 2025',
      description: 'Intensive three-month program for music enthusiasts',
    },
    {
      title: 'Master Classes',
      date: 'Monthly',
      description: 'Learn from our professional musicians and instructors.',
    },
  ];

  return (
    <div className="space-y-20 py-16">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of music education services designed to help you achieve your musical goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-indigo-600 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant community events and enhance your musical journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <Calendar className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-indigo-600 mb-4">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              text: "The instructors at Vivace are exceptional. They've helped me grow tremendously as a musician.",
              author: "Alfayo Ateya",
              role: "Vihiga, Kenya",
            },
            {
              text: "The personalized attention and structured curriculum have made learning music enjoyable and effective.",
              author: "Dan Wamalwa",
              role: "Mount Kenya University, Thika",
            },
            {
              text: "I enjoyed the content delivery of the classes. Epic!",
              author: "Shama Bernard",
              role: "Nairobi Kenya",
            },

          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-indigo-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;