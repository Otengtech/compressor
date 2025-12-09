import React, { useState } from "react";
import { Mail, Award, Truck, Headphones, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Seasonal discounts"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      text: "Delivery updates"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      text: "Expert support"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-green-400 to-green-400 py-12 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Farming Network
              </h2>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-white/90">
                    <div className="p-2 bg-white/20 rounded-lg mr-3">
                      {benefit.icon}
                    </div>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white text-sm">
                  "The newsletter helped us improve our farm's efficiency by 30%"
                  <span className="block font-semibold mt-1">- Sarah, Farm Owner</span>
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-8 h-8 text--400" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
                    <p className="text-gray-600">Weekly insights & offers</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-full font-semibold flex items-center justify-center"
                >
                  Get Farming Updates
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;