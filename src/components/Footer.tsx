import React from 'react';
import { Music2, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music2 className="h-8 w-8 text-indigo-400" />
              <span className="font-bold text-xl">Vivace Music School Kenya</span>
            </div>
            <p className="text-gray-400">
              Inspiring musical excellence through education and innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>P.O. Box 52000-00200</li>
              <li>Phone: (254) 794-068-508</li>
              <li>Phone: (254) 795-958-448</li>
              <li>Email: vivacemusicke@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/VivaceOnlineMusicSchoolKenya/?_rdc=1&_rdr#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vivace Music School. All rights reserved.</p>
          <p> Powered by DiversiWorks Times Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;