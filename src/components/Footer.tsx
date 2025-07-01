import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bal Batika</h3>
                <p className="text-gray-400 text-sm">School of Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nurturing young minds with excellence in education since 2009. 
              Building tomorrow's leaders through innovative teaching and strong values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors duration-300">Academic Programs</a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-white transition-colors duration-300">Facilities</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-white transition-colors duration-300">Faculty</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors duration-300">News & Events</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Admission Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Fee Structure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Curriculum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Downloads</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">
                    Balkumari, Lalitpur<br />
                    Nepal - 44700
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-gray-400">+977-1-5555123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <p className="text-gray-400">info@balbatikaschool.edu.np</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Office Hours</h5>
              <p className="text-gray-400 text-sm">
                Sunday - Friday: 7:00 AM - 4:00 PM<br />
                Saturday: 7:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bal Batika School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;