import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/homecomponents/Footer";

const BlogCarouselSection = () => {
  const { content, loading } = useContext(ContentContext);
  
  if (loading || !content) return null;
  
  const data = content.blogSection;
  
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-lime-50 to-white overflow-hidden">
      {/* Banner Section */}
      <div 
        className="relative w-full h-96 lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${data.banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">BLOG PAGE</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.blogs.map((blog) => (
            <div 
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={blog.img} 
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-lime-100 text-lime-600 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-lime-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {blog.description}
                </p>
                
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-lime-100 rounded-2xl p-8 lg:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest farming tips, market trends, and sustainable practices directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default BlogCarouselSection;