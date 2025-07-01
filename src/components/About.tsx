import React from 'react';
import { Target, Heart, Star, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Nurturing each child with love, respect, and individual attention.'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology for better learning.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Preparing students for success in an interconnected world.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-700">Bal Batika School</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in 2009, Bal Batika School has been a beacon of educational excellence 
              in Nepal. We are committed to providing quality education that nurtures not just 
              academic growth but also the moral and social development of our students.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedicated faculty and modern facilities create an environment where every 
              child can discover their potential and develop the skills needed for future success.
            </p>
            <div className="bg-blue-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-blue-100">
                To provide holistic education that empowers students to become confident, 
                responsible, and successful global citizens.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8471796/pexels-photo-8471796.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="School building and students"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
              Est. 2009
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;