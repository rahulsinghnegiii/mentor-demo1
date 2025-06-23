import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const FeaturedMentorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mentors = [
    {
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      rating: 4.9,
      sessions: 250,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Arjun Patel",
      role: "Product Manager",
      company: "Microsoft",
      rating: 4.8,
      sessions: 180,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sneha Reddy",
      role: "Data Scientist",
      company: "Amazon",
      rating: 4.9,
      sessions: 320,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rahul Kumar",
      role: "DevOps Engineer",
      company: "Netflix",
      rating: 4.7,
      sessions: 145,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Anita Singh",
      role: "UX Designer",
      company: "Adobe",
      rating: 4.9,
      sessions: 200,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Vikram Mehta",
      role: "AI Research Scientist",
      company: "OpenAI",
      rating: 5.0,
      sessions: 85,
      image: "https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Mentors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn from industry leaders who've built successful careers at top tech companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mentor-card rounded-2xl p-6 min-w-[320px] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 group-hover:border-purple-400 transition-colors"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                    <p className="text-purple-300">{mentor.role}</p>
                    <p className="text-gray-400 text-sm">{mentor.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{mentor.rating}</span>
                    <span className="text-gray-400 text-sm">({mentor.sessions} sessions)</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  Book Session
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="glassmorphism text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            View All Mentors
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMentorsSection;