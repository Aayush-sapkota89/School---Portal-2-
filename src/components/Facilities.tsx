import React from 'react';
import { BookOpen, Microscope, Monitor, Dumbbell, Palette, Music } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Well-stocked library with books, digital resources, and quiet study areas.',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Microscope,
      title: 'Science Laboratory',
      description: 'Fully equipped labs for physics, chemistry, and biology experiments.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'Latest computers with high-speed internet for digital learning.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities for physical education.',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Palette,
      title: 'Art Studio',
      description: 'Creative space for painting, drawing, and crafts activities.',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Music,
      title: 'Music Room',
      description: 'Soundproof room with musical instruments for music education.',
      image: 'https://images.pexels.com/photos/7944008/pexels-photo-7944008.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            World-Class <span className="text-blue-700">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed to enhance learning and provide students with the best educational environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white p-2 rounded-lg">
                    <facility.icon className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Additional Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>✓ Air-conditioned classrooms</div>
            <div>✓ Medical room with nurse</div>
            <div>✓ Cafeteria with healthy meals</div>
            <div>✓ Transportation service</div>
            <div>✓ 24/7 security</div>
            <div>✓ WiFi campus</div>
            <div>✓ Playground equipment</div>
            <div>✓ Parent-teacher meeting rooms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;