import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const data = content.whyChooseUs;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // stat
  const stats = [
    { label: "Live Poultry", value: "1,820" },
    { label: "Blog Articles", value: "357" },
    { label: "Satisfied Customers", value: "720" },
    { label: "Reliable Partners", value: "250" },
  ];

  // Icon mapping for lucide-react icons
  const iconMap = {
    GiChicken: Icons.Chicken,
    GiEggClutch: Icons.Egg,
    GiMeat: Icons.Drumstick,
    GiBabyFace: Icons.Baby,
  };

  return (
    <section className="bg-white py-16 lg:px-36 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-20"
        >
          {/* Left Column - Title & Text */}
          <motion.div variants={itemAnimation}>
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.title}
              </h1>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
              {data.text1}
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 color text-white font-medium rounded-sm duration-300 group"
                >
                  Read More
                  <Icons.ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {data.products.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Icons.Package;
            return (
              <motion.div
                key={item.id}
                variants={itemAnimation}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                className="group relative"
              >
                {/* Card container */}
                <div className="relative p-6 lg:p-8 cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl border border-lime-100 group-hover:border-lime-300 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-br from-lime-100 to-emerald-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl group-hover:from-lime-100 group-hover:to-emerald-100 transition-all duration-500">
                     {/* Pulsing ring effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-lime-200/30 rounded-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </div>

                    {/* Floating badge for featured items */}
                    {item.featured && (
                      <div className="absolute -top-2 -right-2">
                        <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content section */}
                  <div className="space-y-4 relative z-10">
                    {/* Category with gradient text */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent group-hover:from-lime-700 group-hover:to-emerald-700 transition-all duration-300">
                      {item.category}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.text}
                    </p>

                    {/* Stats or tags */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Learn more section with animated arrow */}
                  <div className="mt-8 pt-6 border-t border-lime-100 group-hover:border-lime-200 transition-colors duration-300 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-lime-600 group-hover:text-lime-700 transition-colors duration-300">
                          Learn more
                        </span>
                        <motion.div
                          className="flex items-center"
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.1,
                          }}
                        >
                          <Icons.ChevronRight className="h-4 w-4 text-lime-400 group-hover:text-lime-500 transition-colors duration-300" />
                        </motion.div>
                      </div>

                      {/* Optional price or rating */}
                      {item.price && (
                        <span className="text-sm font-bold text-emerald-600">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tl from-lime-400 to-emerald-400 rounded-tl-2xl" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-lime-400/0 to-lime-400/0 group-hover:to-lime-400/10 transition-all duration-500 transform rotate-45 translate-x-8 -translate-y-8" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center w-full"
        >
          <img src={data.image} alt="image" className="rounded-md max-h-72" />
        </motion.div>

        {/* another section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start my-16 lg:mb-20"
        >
          {/* Left Column - Title & Text */}
          <motion.div variants={itemAnimation}>
            <div className="my-6">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                They are Organic
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-3">
                {data.title2}
              </h1>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <p className="text-sm lg:text-lg text-gray-600 leading-6">
              {data.text2}
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 color text-gray-700 font-medium rounded-sm duration-300 group"
                >
                  Read More
                  <Icons.ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <section className="bg-lime-100 rounded-2xl py-16">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h1 className="text-5xl font-extrabold text-gray-700">
                    {stat.value}
                  </h1>
                  <p className="mt-2 text-lg text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
