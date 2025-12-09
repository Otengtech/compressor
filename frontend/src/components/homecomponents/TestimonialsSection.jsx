import React, { useContext } from "react";
import { ContentContext} from "../../context/ContentContext"
import { Star, Quote, User } from "lucide-react";

const TestimonialSection = () => {
  const {content, loading} = useContext(ContentContext)

  if (loading || !content) return null;

  const test = content.testimonialSection;
  

  return (
    <section className="bg-green-100 py-16 lg:py-24 lg:px-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Customer Stories
          </div>
          <h2 className="text-3xl mb-4 flex justify-center mr-2 sm:text-4xl lg:text-5xl font-black text-gray-900 leading-none">
            What Our Farmers 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500">
              Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 500+ farms who trust us for their poultry needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {test.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-green-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-green-400 text-green-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#f4b63c] rounded-full flex items-center justify-center">
                    <User className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
