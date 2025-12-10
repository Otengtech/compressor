import React from "react";

const Newsletter = () => {

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Call to Action */}
      <div className="bg-lime-100 rounded-2xl p-8 lg:p-12 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated with Our Latest Insights
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest farming tips, market
          trends, and sustainable practices directly in your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
