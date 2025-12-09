import React, { useState } from "react";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  MessageCircle,
  Eye
} from "lucide-react";

const BlogCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Poultry Nutrition Guide",
      excerpt: "Master the art of feeding your flock for optimal health and productivity.",
      author: "Dr. Emma Wilson",
      date: "Dec 20, 2024",
      image: "data:image/jpeg;base64,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",
      views: "1.2K",
      comments: 24,
      readTime: "7 min"
    },
    {
      id: 2,
      title: "Modern Poultry Housing Solutions",
      excerpt: "Innovative housing designs for better animal welfare and farm efficiency.",
      author: "Mark Builder",
      date: "Dec 18, 2024",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&h=500&fit=crop",
      views: "2.1K",
      comments: 42,
      readTime: "9 min"
    },
    {
      id: 3,
      title: "Sustainable Farming Practices",
      excerpt: "Eco-friendly methods to reduce environmental impact while maintaining productivity.",
      author: "Sarah Green",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1599155314565-f8d5b5c8e68f?w=800&h=500&fit=crop",
      views: "1.8K",
      comments: 31,
      readTime: "6 min"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#f4b63c 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-gray-500 uppercase tracking-wider text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4 text-[#f4b63c]" />
            <span>Latest From Our Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-4">
            Farm
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Knowledge Hub
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert insights and practical guides to help you succeed in poultry farming.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#f4b63c] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-[#f4b63c] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-96">
                <img
                  src={blogPosts[currentIndex].image}
                  alt={blogPosts[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-6 text-sm mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {blogPosts[currentIndex].author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {blogPosts[currentIndex].date}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {blogPosts[currentIndex].views} views
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {blogPosts[currentIndex].comments} comments
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">
                    {blogPosts[currentIndex].title}
                  </h2>
                  
                  <p className="text-white/90 mb-6 max-w-2xl">
                    {blogPosts[currentIndex].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {blogPosts[currentIndex].readTime} read
                    </span>
                    <button className="group flex items-center text-white font-semibold">
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex 
                    ? "bg-[#f4b63c]" 
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Recent Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#f4b63c]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <button className="flex items-center text-[#f4b63c] font-semibold">
                      Read
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogCarouselSection;