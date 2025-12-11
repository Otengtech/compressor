import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useScrollReveal } from "../../animation/useScrollReveal";

const OurTeam = () => {
  const { content, loading } = useContext(ContentContext);
  const data = content.ourteamSection;
  const titleRef = useScrollReveal();

  // SCROLL REVEAL REFS
  const textRef = useScrollReveal();
  const statsRef = useScrollReveal();

  // refs for each member card
  const cardRefs = Array.from({ length: data.members.length }, () =>
    useScrollReveal()
  );

  if (loading || !content) return null;

  const SocialIcon = ({ platform, size = "h-4 w-4" }) => {
    const icons = {
      facebook: Facebook,
      whatsapp: MessageCircle,
      twitter: Twitter,
      instagram: Instagram,
      linkedin: Linkedin,
    };
    const Icon = icons[platform];
    return Icon ? <Icon className={size} /> : null;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* TOP CONTENT - LEFT SIDE CONTENT ONLY */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
          {/* LEFT CONTENT - Takes full width on mobile, reduced on desktop */}
          <div className="lg:w-2/3 mx-auto">
            {/* TITLE */}
            <div
              ref={titleRef}
              className="scroll-reveal opacity-0 translate-y-8 mb-8"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-lime-600 bg-emerald-50 px-4 py-2 rounded-full">
                  Our Experts
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
                {data.title}
              </h1>

              <div className="h-1 w-20 bg-lime-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* TEXT */}
            <div
              ref={textRef}
              className="scroll-reveal opacity-0 translate-y-8 space-y-8"
            >
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                {data.text}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-lime-600 text-white font-semibold rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Read More
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>

                {/* Member Thumbnails */}
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {data.members.slice(0, 4).map((member) => (
                      <div
                        key={member.id}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className="scroll-reveal opacity-0 translate-y-8 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-lime-500">15+</div>
                  <div className="text-sm text-gray-500 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-lime-500">100%</div>
                  <div className="text-sm text-gray-500 font-medium">
                    Quality Products
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-lime-500">24/7</div>
                  <div className="text-sm text-gray-500 font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM GRID - BELOW THE CONTENT */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {data.members.map((member, index) => (
              <div
                key={member.id}
                ref={cardRefs[index]}
                className="scroll-reveal opacity-0 translate-y-8 rounded-2xl"
              >
                <div className="bg-lime-100 rounded-2xl shadow-md border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* IMAGE */}
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-lime-500/90 rounded-full">
                        {member.position}
                      </span>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                      {member.socials.map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="p-2 bg-white/90 rounded-full shadow-md hover:bg-lime-500 hover:text-white transition"
                        >
                          <SocialIcon platform={social} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;