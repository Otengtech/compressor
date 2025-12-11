import React, { useState, useMemo, useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import Footer from "../components/homecomponents/Footer"
import bannerVideo from "../video/video.mp4";

const ProductsSection = () => {
  const { content, loading } = useContext(ContentContext);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal

  const { categories, products } = content.productsPage;

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, products]);

  if (loading || !content) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-[60vh] overflow-hidden rounded-xl">
  <video
    className="w-full h-full object-cover"
    src={bannerVideo}
    autoPlay
    muted
    loop
    playsInline
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 className="text-white text-4xl md:text-6xl font-bold">
      SERVICES PAGE
    </h1>
  </div>
</div>


      {/* Controls Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-xl shadow-md">
          <div className="mb-6 md:mb-0 md:mr-6 w-full md:w-auto">
            <label
              htmlFor="category-select"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Filter by Category
            </label>
            <div className="relative">
              <select
                id="category-select"
                onChange={(e) => setActiveCategory(e.target.value)}
                value={activeCategory}
                className="appearance-none w-full md:w-64 bg-white border border-gray-300 rounded-lg py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <label
              htmlFor="search-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search Products
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                id="search-input"
                type="text"
                placeholder="Search by product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-80 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-10">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
              {filteredProducts.length === 1 ? "Product" : "Products"} Found
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-lime-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md cursor-pointer overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">
                      <svg
                        className="h-16 w-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-lime-600">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      {categories.find((c) => c.id === product.category)
                        ?.name || "Uncategorized"}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-sm transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <svg
              className="h-24 w-24 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any products matching your search. Try adjusting
              your filters or search term.
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white text-gray-700 rounded-xl relative max-w-lg max-h-[90vh] w-full flex flex-col">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-800 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100"
            >
              ×
            </button>

            {/* Scrollable content container */}
            <div className="overflow-y-auto custom-scrollbar">
              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="mb-2">
                  <strong>Price:</strong> ${selectedProduct.price}
                </p>
                <p className="mb-2">
                  <strong>Features:</strong>{" "}
                  {selectedProduct.features.join(", ")}
                </p>
                <p className="mb-2">
                  <strong>Description:</strong> {selectedProduct.description1}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductsSection;
