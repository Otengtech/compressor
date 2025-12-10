import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { useScrollReveal } from "../../animation/useScrollReveal";

const Newsletter = () => {
  const sectionRef = useScrollReveal();
  const { content, loading } = useContext(ContentContext);
  
    if (loading || !content) return null;
  
    const newsletterContent = content.newsletterSection;

  return (
    <section
      ref={sectionRef}
      className="scroll-reveal opacity-0 translate-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10"
    >
      {/* Call to Action */}
      <div className="bg-lime-100 rounded-2xl p-8 lg:p-12 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {newsletterContent.title}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {newsletterContent.description}
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={newsletterContent.inputPlaceholder}
              className="flex-grow px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors duration-300">
              {newsletterContent.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
