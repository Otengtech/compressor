import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../animation/useScrollReveal";

const AboutSection = () => {
  // Hooks for scroll animation
  const titleRef = useScrollReveal();
  const rightTextRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const secondTitleRef = useScrollReveal();
  const secondRightTextRef = useScrollReveal();
  const statsRef = useScrollReveal();

  
  
  const { content, loading } = useContext(ContentContext);
  const productRefs = Array.from({ length: content?.productsSection?.products?.length || 0 }, () => useScrollReveal());

  if (loading || !content) return null;

  const data = content.whyChooseUs;

  const stats = [
    { label: "Live Poultry", value: "1,820" },
    { label: "Blog Articles", value: "357" },
    { label: "Satisfied Customers", value: "720" },
    { label: "Reliable Partners", value: "250" },
  ];

  // Icon map
  const iconMap = {
    GiChicken: Icons.Chicken,
    GiEggClutch: Icons.Egg,
    GiMeat: Icons.Drumstick,
    GiBabyFace: Icons.Baby,
  };

  return (
    <section className="bg-gray-100 py-16 lg:px-28 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
          {/* Left Column */}
          <div ref={titleRef} className="scroll-reveal">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 md:mb-6">
                {data.title}
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightTextRef} className="scroll-reveal space-y-6">
            <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
              {data.text1}
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 color text-gray-700 font-medium rounded-sm duration-300 group"
              >
                Read More
                <Icons.ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div
          ref={gridRef}
          className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {data.products.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Icons.Package;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div ref={productRefs[index]} className="w-full h-48">
                  <img
                    src={item.image}
                    alt="product image"
                    className="w-full h-full object-conver rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-bold bg-gray-700 bg-clip-text text-transparent">
                      {item.category}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex mt-3 items-center justify-between">
                    <Link to={item.link} className="flex items-center space-x-3">
                      <span className="text-sm font-semibold text-lime-600 group-hover:text-lime-700 transition-colors duration-300">
                        Learn more
                      </span>

                      <Icons.ChevronRight className="h-4 w-4 text-lime-400 group-hover:text-lime-500 transition-colors duration-300" />
                    </Link>

                    {item.price && (
                      <span className="text-sm font-bold text-emerald-600">
                        {item.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IMAGE */}
        <div
          ref={imageRef}
          className="scroll-reveal mt-20 flex justify-center w-full"
        >
          <img
            src={data.image}
            alt="image"
            className="rounded-md shadow-md max-h-72"
          />
        </div>

        {/* SECOND SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start my-16 lg:mb-20">
          {/* Left */}
          <div ref={secondTitleRef} className="scroll-reveal">
            <div className="my-6">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                They are Organic
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 md:mb-6 mt-3">
                {data.title2}
              </h1>
            </div>
          </div>

          {/* Right */}
          <div ref={secondRightTextRef} className="scroll-reveal space-y-6">
            <p className="text-sm lg:text-lg text-gray-600 leading-6">
              {data.text2}
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 color text-gray-700 font-medium rounded-sm duration-300 group"
              >
                Read More
                <Icons.ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* STATS */}
        <section
          ref={statsRef}
          className="scroll-reveal bg-lime-50 rounded-2xl py-14"
        >
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h1 className="text-3xl font-extrabold text-gray-700">
                    {stat.value}
                  </h1>
                  <p className="mt-2 text-lg text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
