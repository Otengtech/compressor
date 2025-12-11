import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bannerVideo from "../../video/v2.mp4";

const HeroSection = () => {
  const { content, loading } = useContext(ContentContext);

  if (loading || !content) return null;

  const hero = content.heroSection;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative">
        {/* Background Video */}
        <video
          className="w-full h-[75vh] max-h-[75vh] object-cover"
          src={""}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/50 to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 z-10 container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Text */}
              <div className="text-white space-y-6 lg:space-y-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {hero.title}
                </h1>

                <p className="text-lg sm:text-xl md:text-lg text-gray-300 flex justify-center leading-relaxed">
                  <span className="max-w-2xl">{hero.description}</span>
                </p>

                {/* CTA Button */}
                <div className="flex justify-center items-center w-full">
                  <Link to="/products">
                    <button
                      className="group text-black px-6 py-3 rounded-sm text-lg
                flex items-center color justify-center gap-3 transition-all duration-300"
                    >
                      Discover More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
