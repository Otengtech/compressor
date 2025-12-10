import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const { content, loading } = useContext(ContentContext);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  if (loading || !content) return null;

  const test = content.testimonialSection;
  const { title, testimonials, images } = test;

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    const next =
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1;
    setCurrentTestimonial(next);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handlePrev = () => {
    const prev =
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1;
    setCurrentTestimonial(prev);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="bg-lime-50 py-12 lg:py-24 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Testimonials */}
          <div className="lg:w-1/2 bg-transparent rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-lime-300"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed italic mb-6">
                  "{currentTestimonialData.content}"
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {renderStars(currentTestimonialData.rating)}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-lime-100 flex items-center justify-center">
                    {currentTestimonialData.avatar ? (
                      <img
                        src={currentTestimonialData.avatar}
                        alt={currentTestimonialData.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 text-lime-600">
                        <svg
                          className="w-full h-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {currentTestimonialData.name}
                  </h3>
                  <p className="text-gray-600">{currentTestimonialData.role}</p>
                </div>
              </div>
            </div>

            {/* Pagination Dots and Navigation */}
            <div className="mt-8 lg:mt-12">
              {/* Dots */}
              <div className="flex justify-center items-center gap-2 mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-lime-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev/Next Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex justify-center items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-lime-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-gray-600 text-sm">
                  {currentTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-lime-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
              {images.map((image) => (
                <div
                  key={image.id}
                  className={`rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105`}
                >
                  <div className="relative h-full">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={image.img}
                        alt={`Farm image ${image.id}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-lime-100 hover:bg-lime-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-lime-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-gray-700 font-medium">
            {currentTestimonial + 1} / {testimonials.length}
          </span>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-lime-100 hover:bg-lime-200 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-lime-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
