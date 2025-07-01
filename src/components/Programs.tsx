import React from 'react';
import { BookOpen, Users, Clock, Trophy } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Early Childhood (Nursery - UKG)',
      age: 'Ages 3-5',
      icon: BookOpen,
      features: ['Play-based learning', 'Montessori methods', 'Creative activities', 'Language development'],
      image: 'https://images.pexels.com/photos/8613120/pexels-photo-8613120.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Primary Level (Class 1-5)',
      age: 'Ages 6-10',
      icon: Users,
      features: ['Foundation subjects', 'Hands-on learning', 'Sports activities', 'Art & music'],
      image: 'https://images.pexels.com/photos/8471916/pexels-photo-8471916.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Lower Secondary (Class 6-8)',
      age: 'Ages 11-13',
      icon: Clock,
      features: ['Core curriculum', 'Science labs', 'Computer education', 'Project work'],
      image: 'https://images.pexels.com/photos/8613354/pexels-photo-8613354.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Secondary Level (Class 9-10)',
      age: 'Ages 14-16',
      icon: Trophy,
      features: ['SEE preparation', 'Career guidance', 'Advanced subjects', 'Leadership programs'],
      image: 'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Academic <span className="text-blue-700">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education programs designed to nurture students at every stage of their learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {program.age}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <program.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;