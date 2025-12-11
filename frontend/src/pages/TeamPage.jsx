import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";
import Footer from "../components/homecomponents/Footer";

const OurTeam = () => {
  const { content, loading } = useContext(ContentContext);
  const data = content.ourteamSection;

  const titleRef = useScrollReveal();
  const textRef = useScrollReveal();
  const statsRef = useScrollReveal();

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
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* HEADER */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div
              ref={titleRef}
              className="scroll-reveal opacity-0 translate-y-8"
            >
              <span className="text-sm font-semibold text-lime-600 bg-emerald-50 px-4 py-2 rounded-full inline-block mb-4">
                Our Experts
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {data.title}
              </h1>

              <div className="h-1 w-20 bg-lime-500 mx-auto rounded-full"></div>
            </div>

            {/* Description + CTA */}
            <div
              ref={textRef}
              className="scroll-reveal opacity-0 translate-y-8 mt-8 space-y-8"
            >
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {data.text}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-lime-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  Read More
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                {/* Member thumbnails */}
                <div className="flex -space-x-3">
                  {data.members.slice(0, 4).map((member) => (
                    <img
                      key={member.id}
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="scroll-reveal opacity-0 translate-y-8 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "100%", label: "Quality Products" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-sm text-center hover:shadow-lg transition-all"
                >
                  <div className="text-3xl font-bold text-lime-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.members.map((member, index) => (
              <div
                key={member.id}
                ref={cardRefs[index]}
                className="scroll-reveal opacity-0 translate-y-8"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Position Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-lime-600/90 rounded-full">
                      {member.position}
                    </span>

                    {/* Social icons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href="#"
                          className="p-2 bg-white/90 rounded-full shadow hover:bg-lime-500 hover:text-white transition"
                        >
                          <SocialIcon platform={social} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {member.shortBio || "Expert team member"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurTeam;
