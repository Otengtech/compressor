import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const hero = content.heroSection;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.heroImage})`,
            height: "75vh",
            maxHeight: "75vh",
          }}
        >
          {/* Mobile: Full screen height */}
          <div className="md:hidden absolute inset-0">
            <img
              src={hero.heroImage}
              alt={hero.title}
              className="w-full h-screen object-cover"
            />
          </div>

          {/* Desktop: Max 90vh */}
          <div className="hidden md:block absolute inset-0">
            <img
              src={hero.heroImage}
              alt={hero.title}
              className="w-full h-full max-h-[90vh] object-cover"
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/50 to-transparent" />

          {/* Content Container */}
          <div className="relative z-10 container px-4 sm:px-6 lg:px-8 h-full flex justify-center items-center">
            <div className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center text-center"
              >
                {/* Left Column - Content */}
                <motion.div
                  variants={slideLeftVariants}
                  className="text-white space-y-6 lg:space-y-8 text-center"
                >
                  {/* Title */}
                  <motion.h1
                    variants={slideUpVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  >
                    {hero.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={slideUpVariants}
                    className="text-lg sm:text-xl md:text-lg text-white flex justify-center leading-relaxed"
                  >
                    <p className="max-w-2xl">{hero.description}</p>
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    variants={scaleUpVariants}
                    className="flex justify-center items-center w-full"
                  >
                    <Link to="/products">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group text-black px-6 py-3 rounded-sm text-lg
                        flex items-center color justify-center gap-3 transition-all duration-300"
                      >
                        Discover More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
