import React from "react";
import {
  Shield,
  Heart,
  Truck,
  Award,
  Sprout,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AboutSection = () => {
  const qualities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "Rigorous health checks ensure only the healthiest poultry reaches your farm.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Welfare",
      description:
        "Ethical treatment and spacious living conditions for all our birds.",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Natural Feed",
      description:
        "100% organic, antibiotic-free feed for optimal health and growth.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in poultry farming standards.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Heading & CTA */}
          <div>
            <div className="mb-8">
              {/* Subtitle */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl mb-8 sm:text-4xl lg:text-6xl flex spce-x-2 font-black text-gray-900 leading-none">
                Quality
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500">
                  Service
                </span>
              </h1>

              {/* Description */}
              <p className="text-md text-gray-600 mb-8 leading-relaxed">
                For over 35 years, we've dedicated ourselves to raising the
                highest quality poultry with a commitment to sustainability,
                health, and ethical farming practices that set us apart.
              </p>

              <p className="text-md text-gray-600 mb-8 leading-relaxed">
                Our family-owned farm combines traditional values with modern 
                technology to deliver poultry products you can trust. Every egg 
                and chick is a testament to our unwavering dedication to quality.
              </p>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center">
                Read More
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Qualities Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="group rounded-xl p-6 cursor-pointer border border-gray-100 hover:border-[#f4b63c]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon Container */}

                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="text-center text-green-400 mb-2">{quality.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
                        {quality.title}
                      </h3>
                      <p className="text-gray-600">{quality.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
