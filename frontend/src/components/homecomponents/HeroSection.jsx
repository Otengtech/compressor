import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { useScrollReveal } from "../../animation/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = ({content}) => {
  const { loading } = useContext(ContentContext);
  const sectionRef = useScrollReveal();

  if (loading || !content) return null;

  const hero = content;

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
          <div ref={sectionRef} className="scroll-reveal relative z-10 container px-4 sm:px-6 lg:px-8 h-full flex justify-center items-center">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center text-center">
                {/* Left Column - Content */}
                <div className="text-white space-y-6 lg:space-y-8 text-center">
                  {/* Title */}
                  <p className="text-lg sm:text-xl md:text-xl text-lime-300 flex justify-center leading-relaxed">
                    <span className="max-w-2xl">EGGXCELLENTLY YOURS</span>
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {hero.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg sm:text-xl md:text-lg text-gray-100 flex justify-center leading-relaxed">
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
      </div>
    </section>
  );
};

export default HeroSection;
