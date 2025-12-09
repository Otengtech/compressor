import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../context/ContentContext";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  // Add multiple title sets
  const titles = [
    { main: "Poultry", highlight: "Excellence" },
    { main: "Farm Fresh", highlight: "Quality" },
    { main: "Organic", highlight: "Nutrition" },
    { main: "Sustainable", highlight: "Growth" },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Cycle titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 5000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const hero = content.heroSection;

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full min-h-[80vh] bg-green-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#f4b63c 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* LEFT CONTENT */}
          <motion.div
            className="text-left space-y-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center space-x-2 text-gray-500 uppercase tracking-wider text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-white" />
                <span>{hero.badge.text}</span>
              </div>
            </motion.div>

            {/* Dynamic Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitleIndex} // Unique key triggers animation on change
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-6xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none"
              >
                {titles[currentTitleIndex].main}
                <span className="block text-transparent bg-clip-text bg-white">
                  {titles[currentTitleIndex].highlight}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 pt-2"
            >
              {hero.stats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-700">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <Link to={hero.cta.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-6 py-3 rounded-full text-md font-semibold flex items-center transition-all duration-300"
                >
                  {hero.cta.text}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE with bouncing */}
          <motion.div
            className="w-full bg-cover bg-center"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img
              src={hero.heroImage}
              alt="Hero"
              className="h-[450px] rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
