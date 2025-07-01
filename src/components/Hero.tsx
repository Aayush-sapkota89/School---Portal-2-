import React from 'react';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to
              <span className="block text-orange-400">Bal Batika School</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Nurturing young minds with excellence in education, building tomorrow's leaders 
              through innovative teaching methods and strong values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8613354/pexels-photo-8613354.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nepali students in classroom"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Excellence Award</p>
                  <p className="text-gray-600 text-sm">2024 Achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-blue-100">Happy Students</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <BookOpen className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <Award className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;