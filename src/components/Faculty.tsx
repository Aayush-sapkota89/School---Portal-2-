import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const teachers = [
    {
      name: 'Mrs. Sita Sharma',
      position: 'Principal',
      qualification: 'M.Ed, B.Ed',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Educational Leadership'
    },
    {
      name: 'Mr. Ram Prasad Koirala',
      position: 'Vice Principal',
      qualification: 'M.A. in Mathematics',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Mathematics & Science'
    },
    {
      name: 'Mrs. Kamala Devi',
      position: 'Head Teacher (Primary)',
      qualification: 'M.Ed in Primary Education',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Early Childhood Education'
    },
    {
      name: 'Mr. Bishnu Thapa',
      position: 'Science Teacher',
      qualification: 'M.Sc. in Physics',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Physics & Chemistry'
    },
    {
      name: 'Mrs. Gita Adhikari',
      position: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'English Literature'
    },
    {
      name: 'Mr. Prakash Shrestha',
      position: 'Computer Teacher',
      qualification: 'B.Sc. in Computer Science',
      experience: '6+ years',
      image: 'https://images.pexels.com/photos/5212360/pexels-photo-5212360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Programming & IT'
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Dedicated <span className="text-blue-700">Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced and passionate educators committed to nurturing every student's potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{teacher.name}</h3>
                  <p className="text-blue-200">{teacher.position}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="text-sm">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">{teacher.specialization}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">{teacher.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Our Faculty Stands Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                  <Award className="h-8 w-8 mx-auto text-orange-300" />
                </div>
                <h4 className="font-semibold mb-2">Highly Qualified</h4>
                <p className="text-blue-100 text-sm">Advanced degrees and certifications in their respective fields</p>
              </div>
              <div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                  <BookOpen className="h-8 w-8 mx-auto text-orange-300" />
                </div>
                <h4 className="font-semibold mb-2">Continuous Learning</h4>
                <p className="text-blue-100 text-sm">Regular training and professional development programs</p>
              </div>
              <div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                  <Users className="h-8 w-8 mx-auto text-orange-300" />
                </div>
                <h4 className="font-semibold mb-2">Student-Centered</h4>
                <p className="text-blue-100 text-sm">Dedicated to individual student growth and success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;