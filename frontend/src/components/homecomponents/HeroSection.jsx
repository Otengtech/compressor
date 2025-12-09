import React from "react";
import { ArrowRight, Sparkles, Egg, Feather } from "lucide-react";
import HeroImage from "../../assets/heroimage.png";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[80vh] bg-green-100 overflow-hidden">
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
          {/* Left Content */}
          <div className="text-left space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 text-gray-500 uppercase tracking-wider text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Premium Quality</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none">
                Poultry
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                  Excellence
                </span>
              </h1>
            </div>

            <p className="text-md text-gray-600 leading-relaxed">
              Experience the finest quality eggs and chicks, nurtured with care
              and delivered with the promise of health and vitality for your
              farm.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-500">Happy Farms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98.5%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center">
                View Products
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual - Chick & Eggs */}
          <div className="w-full bg-cover bg-center">
            <img src={HeroImage} alt="" className="h-[450px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
