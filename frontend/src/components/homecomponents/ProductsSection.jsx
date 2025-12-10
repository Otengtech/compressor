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

  return (
    <section className="">
      <section className="bg-gradient-to-b from-white to-green-50 py-16 lg:px-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div className="text-center mb-12">
            <h1 className="text-4xl mb-8 sm:text-4xl lg:text-6xl flex justify-center space-x-2 font-black text-gray-900 leading-none">
              {productsSection.title}
            </h1>
          </motion.div>

          {/* Products Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {productsSection.products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-lime-100 rounded-xl border border-gray-200 hover:border-amber-200 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                  <h2 className="text-xl font-bold text-center text-gray-700 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-md text-center leading-8 text-gray-500 mb-4">
                    {product.text}
                  </p>

                  {/* Action */}
                  <Link to="/products" className="flex justify-center">
                    <button className="group text-amber-900 px-6 py-2 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center">
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default ProductsSection;