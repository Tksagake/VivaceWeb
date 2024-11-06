import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Target } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Malcolm W. Sikolia',
      role: 'Founder & Director',
      image: 'src/components/IMG_0041.JPG',
      bio: 'A musical mastermind with the touch of technology, especially in digital audio workstations and notation software applications',
    },
    {
      name: 'Sir Elvis A. Salano',
      role: 'Lead Instructor',
      image: 'src/components/sirlano.jpg',
      bio: 'A vast music scholar and researcher who opted into the Music teaching sector. He is currently the Head of Music Department in Nova Pioneer School',
    },
    {
      name: 'Ms Norah Pamela Ondiek',
      role: 'Quality and Assurance Officer',
      image: 'src/components/pamnorah.jpg',
      bio: 'A dedicated educator of music theory and musical instrumentation. She is currently the Head of Music Department in Rangala Girls School',
    },
    {
      name: 'Mr Tom B Brown',
      role: 'Head of Instrumental Studies',
      image: 'src/components/sir tom.webp',
      bio: 'A dedicated educator of music theory and musical instrumentation. Currently doing his Major in Music at Maseno University',
    },
  ];

  return (
    <div className="space-y-20 py-16">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Vivace Music School, we believe in nurturing musical talent through personalized education,
            fostering creativity, and building a supportive community of musicians.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-8 w-8" />,
              title: 'Vision',
              description: 'To be the leading online music education institution, inspiring the next generation of musicians.',
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: 'Values',
              description: 'Excellence, creativity, inclusivity, and dedication to musical growth.',
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: 'Excellence',
              description: 'Committed to providing the highest quality music education and guidance.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-indigo-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced instructors are passionate about music education and dedicated to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
  src={member.image}
  alt={member.name}
  className="w-48 h-48 object-cover rounded-full mx-auto mb-4" // Adjust width, height, and margins
/>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;