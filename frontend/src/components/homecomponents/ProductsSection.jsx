import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const { content: ctxContent, loading: isLoading } =
    useContext(ContentContext);

  if (isLoading || !ctxContent) return null;

  const productsSection = ctxContent.productsSection;

  // Motion variants
  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 lg:px-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={slideInUp}
        >
          <h1 className="text-4xl mb-8 sm:text-4xl lg:text-6xl flex justify-center space-x-2 font-black text-gray-900 leading-none">
            {productsSection.heading.main}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500">
              {productsSection.heading.highlight}
            </span>
          </h1>
          <p className="text-gray-600">
            Everything you need for successful poultry farming
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={staggerContainer}
        >
          {productsSection.products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 hover:border-green-300 cursor-pointer hover:shadow-lg transition-all duration-300"
              variants={slideInUp}
            >
              {/* Icon */}
              {product.icon && (
                <div className="mb-4">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-full object-cover rounded-t-xl"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {product.price}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Link to="/products">
                  <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-2 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center">
                    View Product
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
