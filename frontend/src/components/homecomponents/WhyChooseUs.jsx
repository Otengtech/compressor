import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const about = content.whyChooseUs;
  const { subtitle, heading, paragraphs, cta, qualities } = about;

  const renderIcon = (iconName, className = "w-8 h-8") => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-16 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} // triggers every time in view
            variants={slideInLeft}
          >
            {/* Subtitle */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium mb-6"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              {renderIcon(subtitle.icon, "w-4 h-4 mr-2")}
              <span>{subtitle.text}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl mb-8 sm:text-4xl lg:text-6xl flex space-x-2 font-black text-gray-900 leading-none"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              {heading.main}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500">
                {heading.highlight}
              </span>
            </motion.h1>

            {/* Paragraphs */}
            {paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                className="text-md text-gray-600 mb-8 leading-relaxed"
                variants={slideInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
              >
                {p}
              </motion.p>
            ))}

            {/* CTA Button */}
            <motion.div
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <Link
                to={cta.url}
                className="group max-w-48 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                {cta.text}
                {renderIcon(
                  cta.icon,
                  "ml-3 group-hover:translate-x-2 transition-transform"
                )}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Qualities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                className="group rounded-xl p-6 cursor-pointer border border-gray-100 hover:border-[#f4b63c]/30 hover:shadow-xl transition-all duration-300"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} // triggers every scroll into view
              >
                <div className="flex flex-col items-center text-start">
                  <div className="text-green-400 mb-2">
                    {renderIcon(quality.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {quality.title}
                  </h3>
                  <p className="text-gray-600">{quality.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
