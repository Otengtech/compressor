import React from "react";
import {
  Target,
  Users,
  Leaf,
  Shield,
  CheckCircle,
  Heart,
  Calendar,
  Star,
} from "lucide-react";
import banner from "../assets/banner2.jpg";
import Footer from "../components/homecomponents/Footer";
import { useScrollReveal } from "../animation/useScrollReveal";

const AboutSection = () => {
  // REVEAL REFS
  const bannerRef = useScrollReveal();
  const heroTitleRef = useScrollReveal();
  const heroTextRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const visionRef = useScrollReveal();
  const valuesTitleRef = useScrollReveal();

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Welfare",
      description:
        "Humane treatment and comfortable living conditions for all our birds",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-friendly practices that protect our environment",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous health checks and quality control standards",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Supporting local farmers and building lasting partnerships",
    },
  ];

  // Create reveal refs for value cards
  const valueRefs = values.map(() => useScrollReveal());

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Banner Section */}
      <div
        className=" opacity-0 translate-y-10 relative w-full h-96 lg:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div
          ref={bannerRef}
          className="absolute scroll-reveal inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">
            ABOUT PAGE
          </h1>
        </div>
      </div>

      {/* Hero About Section */}
      <section className="relative py-6 lg:py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#f4b63c 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              {/* Story Title */}
              <div
                ref={heroTitleRef}
                className="scroll-reveal opacity-0 translate-y-10 mb-8 items-center"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      Since 1985
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                      Our Story
                    </h1>
                  </div>

                  {/* Story Text */}
                  <div
                    ref={heroTextRef}
                    className="scroll-reveal opacity-0 translate-y-10 md:w-1/2"
                  >
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      For over three decades, we've been dedicated to raising
                      the highest quality poultry while maintaining our
                      commitment to sustainability, animal welfare, and
                      community support.
                    </p>

                    <p className="text-gray-600">
                      What began as a small family farm has grown into a trusted
                      partner for hundreds of farms nationwide, but our core
                      values remain unchanged: integrity, quality, and respect
                      for nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              ref={missionRef}
              className="scroll-reveal opacity-0 translate-y-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8"
            >
              <div className="mb-6">
                <Target className="w-12 h-12 text-[#f4b63c] mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide the healthiest, most sustainable poultry products
                  while setting new standards for animal welfare and
                  environmental stewardship in the farming industry.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Deliver premium quality poultry products",
                  "Promote sustainable farming practices",
                  "Ensure animal welfare in all operations",
                  "Support local farming communities",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div
              ref={visionRef}
              className="scroll-reveal opacity-0 translate-y-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8"
            >
              <div className="mb-6">
                <Star className="w-12 h-12 text-[#f4b63c] mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize poultry farming through innovation, creating
                  a sustainable model that benefits farmers, consumers, and the
                  planet for generations to come.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Lead in sustainable poultry farming",
                  "Expand nationwide with quality standards",
                  "Innovate with eco-friendly technologies",
                  "Educate next-generation farmers",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesTitleRef}
            className="scroll-reveal opacity-0 translate-y-10 text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from farm management to
              customer relationships.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                ref={valueRefs[index]}
                className="scroll-reveal opacity-0 translate-y-10 bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#f4b63c] hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-amber-100 text-[#f4b63c]">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutSection;
