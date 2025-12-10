import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../animation/useScrollReveal";

const ProductsSection = () => {
  const { content: ctxContent, loading: isLoading } =
    useContext(ContentContext);

  // Create separate refs for each animated element
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();
  
  // Create a ref for each product item
  const productRefs = Array.from({ length: ctxContent?.productsSection?.products?.length || 0 }, () => useScrollReveal());

  if (isLoading || !ctxContent) return null;

  const productsSection = ctxContent.productsSection;

  return (
    <section>
      <section className="bg-gradient-to-b from-white to-green-50 py-16 lg:px-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div
            ref={titleRef}
            className="scroll-reveal opacity-0 translate-y-8 text-center mb-12"
          >
            <h1 className="text-4xl mb-8 sm:text-4xl lg:text-6xl flex justify-center space-x-2 font-black text-gray-900 leading-none">
              {productsSection.title}
            </h1>
          </div>

          {/* Products Grid */}
          <div
            ref={gridRef}
            className="scroll-reveal opacity-0 translate-y-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {productsSection.products.map((product, index) => (
              <div
                key={product.id}
                ref={productRefs[index]} // Use individual ref for each product
                className="scroll-reveal opacity-0 translate-y-8 bg-gray-200 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
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

                <div className="p-5">
                  {/* Content */}
                  <h2 className="text-xl font-bold text-center text-gray-700 mb-2">
                    {product.name}
                  </h2>

                  <p className="text-md text-center leading-8 text-gray-500 mb-4">
                    {product.text}
                  </p>

                  {/* Action */}
                  <Link to="/products" className="flex justify-center">
                    <button className="group text-gray-700 px-6 py-2 rounded-full text-md transition-all duration-300 transform hover:scale-105 flex items-center">
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsSection;