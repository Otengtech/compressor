import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, MessageCircle, Twitter, Instagram, Linkedin } from "lucide-react";

const OurTeam = () => {
  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const data = content.ourteamSection;

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const SocialIcon = ({ platform, size = "h-4 w-4" }) => {
    const icons = {
      facebook: Facebook,
      whatsapp: MessageCircle,
      twitter: Twitter,
      instagram: Instagram,
      linkedin: Linkedin
    };
    
    const Icon = icons[platform];
    if (!Icon) return null;
    
    return <Icon className={size} />;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Content */}
          <div className="lg:w-2/5">
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-lime-600 bg-emerald-50 px-4 py-2 rounded-full">
                  Our Experts
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {data.title}
              </h1>
              <div className="h-1 w-20 bg-lime-500 rounded-full mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {data.text}
              </p>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 bg-lime-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Read More
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {data.members.slice(0, 4).map((member) => (
                      <div 
                        key={member.id}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                        title={member.name}
                      >
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {/* <span className="ml-2 hidden md:block font-semibold text-lime-500">{data.members.length}+</span> Team Members */}
                </div>
              </div>

              {/* Stats Section */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100"
              >
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-lime-500">15+</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-lime-500">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Quality Products</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-lime-500">24/7</div>
                  <div className="text-sm text-gray-500 font-medium">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Team Cards */}
          <div className="lg:w-3/5 mx-auto">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-center gap-6"
            >
              {data.members.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                  className="group rounded-2xl"
                >
                  <div className="bg-lime-100 rounded-2xl cursor-pointer shadow-md transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&crop=faces&fit=facearea&facepad=2&w=256&h=256&q=80`;
                        }}
                      />
                      
                      {/* Position Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-lime-500/90 backdrop-blur-sm rounded-full">
                          {member.position}
                        </span>
                      </div>
                      
                      {/* Social Icons Overlay */}
                      <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                        {member.socials.map((social) => (
                          <motion.a
                            key={social}
                            href="#"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-lime-500 hover:text-white transition-colors duration-300"
                          >
                            <SocialIcon platform={social} />
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      {/* Contact Button */}
                      <div className="flex items-center justify-between">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 text-sm font-medium text-lime-400 hover:text-lime-500 rounded-lg transition-colors duration-300"
                        >
                          Contact {member.name.split(' ')[0]}
                        </motion.button>
                        <span className="text-xs text-gray-400">
                          Member #{member.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;