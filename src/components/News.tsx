import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Annual Sports Day 2024',
      date: '2024-03-15',
      time: '9:00 AM',
      image: 'https://images.pexels.com/photos/8613293/pexels-photo-8613293.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Join us for our annual sports day featuring various competitions and fun activities for all students.',
      category: 'Event'
    },
    {
      title: 'Science Fair Winners Announced',
      date: '2024-03-10',
      time: '2:00 PM',
      image: 'https://images.pexels.com/photos/8471905/pexels-photo-8471905.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Congratulations to our brilliant students who showcased innovative projects at the inter-school science fair.',
      category: 'Achievement'
    },
    {
      title: 'New Computer Lab Inauguration',
      date: '2024-03-05',
      time: '10:00 AM',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'State-of-the-art computer laboratory with latest technology inaugurated to enhance digital learning.',
      category: 'Infrastructure'
    }
  ];

  const events = [
    {
      title: 'Parent-Teacher Meeting',
      date: '2024-03-25',
      time: '2:00 PM - 5:00 PM',
      location: 'School Auditorium'
    },
    {
      title: 'Cultural Program',
      date: '2024-04-02',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Hall'
    },
    {
      title: 'Field Trip - Class 8',
      date: '2024-04-10',
      time: '8:00 AM - 4:00 PM',
      location: 'National Museum'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Latest <span className="text-blue-700">News & Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings and upcoming events at Bal Batika School
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent News</h3>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                        <div className="ml-4 flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          {item.time}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                      <button className="text-blue-700 font-semibold hover:text-blue-800 flex items-center transition-colors duration-300">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-500 pl-4 py-3 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h5 className="font-semibold text-gray-800 mb-1">{event.title}</h5>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                      <div>📍 {event.location}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                View All Events
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 bg-orange-500 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
              <p className="mb-4 text-orange-100">Subscribe to our newsletter for latest updates</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;