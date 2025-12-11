import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";
import { Star, MessageSquare, Send, User, Mail, Calendar } from "lucide-react";
import { Camera, X } from "lucide-react";
import { useScrollReveal } from "../animation/useScrollReveal";
import Footer from "../components/homecomponents/Footer";

const ReviewPage = () => {
  const { content, loading } = useContext(ContentContext);
  const [currentReview, setCurrentReview] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [filterRating, setFilterRating] = useState(0);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    content: "",
    role: "Customer",
  });
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use testimonial data from JSON
  const { testimonials } = content.testimonialSection || {};
  const allReviews = [...(testimonials || []), ...submittedReviews];

  // Reveal refs
  const titleRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const featuredRef = useScrollReveal();
  const formRef = useScrollReveal();
  const listRef = useScrollReveal();

  // Autoplay logic for featured review
  useEffect(() => {
    if (!autoplay || allReviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) =>
        prev === allReviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, allReviews.length]);

  if (loading || !content) return null;

  const handleDotClick = (index) => {
    setCurrentReview(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === allReviews.length - 1 ? 0 : prev + 1));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      const isValidType = validTypes.includes(file.type);

      // Validate file size (5MB max)
      const isValidSize = file.size <= 5 * 1024 * 1024;

      return isValidType && isValidSize;
    });

    setNewReview((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles].slice(0, 6), // Limit to 6 images max
    }));
  };

  // Handle image removal
  const handleRemoveImage = (index) => {
    setNewReview((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // Update your submit handler to handle images
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create new review object with timestamp
      const reviewToAdd = {
        ...newReview,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        likes: 0,
        avatar: null,
      };

      // Simulate API call
      setTimeout(() => {
        setSubmittedReviews((prev) => [reviewToAdd, ...prev]);
        setNewReview({
          name: "",
          email: "",
          rating: 5,
          title: "",
          content: "",
          role: "Customer",
        });
        setIsSubmitting(false);

        // Reset featured to show new review
        setCurrentReview(0);
      }, 1000);

      setNewReview({
        name: "",
        email: "",
        rating: 5,
        title: "",
        content: "",
        images: [],
      });

      // Clear file input
      const fileInput = document.getElementById("image-upload");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate review statistics
  const totalReviews = allReviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          allReviews.reduce((sum, review) => sum + review.rating, 0) /
          totalReviews
        ).toFixed(1)
      : 0;

  const ratingDistribution = Array(5)
    .fill(0)
    .map((_, i) => ({
      stars: 5 - i,
      count: allReviews.filter((r) => r.rating === 5 - i).length,
      percentage:
        totalReviews > 0
          ? (allReviews.filter((r) => r.rating === 5 - i).length /
              totalReviews) *
            100
          : 0,
    }));

  // Sort and filter reviews
  const sortedAndFilteredReviews = [...allReviews]
    .filter((review) => filterRating === 0 || review.rating === filterRating)
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.date || 0) - new Date(a.date || 0);
      if (sortBy === "highest") return b.rating - a.rating;
      if (sortBy === "lowest") return a.rating - b.rating;
      if (sortBy === "most-liked") return (b.likes || 0) - (a.likes || 0);
      return 0;
    });

  const featuredReview = allReviews[currentReview] || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lime-50">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-16 text-center">
          <h1
            ref={titleRef}
            className="scroll-reveal opacity-0 translate-y-8 text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Customer Reviews
          </h1>
          <p className="text-lime-100 text-lg lg:text-xl max-w-3xl mx-auto">
            See what our customers say about our products and services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div
            ref={statsRef}
            className="scroll-reveal opacity-0 translate-y-8 bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>

              {/* Total Reviews */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {totalReviews}
                </div>
                <div className="text-lime-400 mb-2">
                  <MessageSquare className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-gray-600">Total Reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 mb-4">
                  Rating Breakdown
                </h3>
                {ratingDistribution.map(({ stars, count, percentage }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-8">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-lime-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Featured Review */}
            <div className="lg:col-span-2">
              <div
                ref={featuredRef}
                className="scroll-reveal opacity-0 translate-y-8 bg-white rounded-3xl p-4 shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Review
                </h2>

                {/* Featured Review Card */}
                <div className="bg-lime-50 rounded-2xl p-8">
                  {/* Quote */}
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-lime-300"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "{featuredReview.content}"
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(featuredReview.rating)}
                    <span className="text-gray-600 ml-2">
                      {featuredReview.rating}.0
                    </span>
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-lime-100 border-4 border-white">
                          {featuredReview.avatar ? (
                            <img
                              src={featuredReview.avatar}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 text-lime-600 mx-auto mt-4">
                              <svg
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
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {featuredReview.name}
                        </h3>
                        <p className="text-gray-600">{featuredReview.role}</p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {featuredReview.date || "Recently"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="mt-8 flex justify-center items-center gap-2">
                  {allReviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentReview ? "bg-lime-600 w-8" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Prev/Next Buttons */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-lime-100 hover:bg-lime-200"
                  >
                    <svg
                      className="w-6 h-6 text-lime-600"
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

                  <span className="text-gray-600">
                    {currentReview + 1} / {allReviews.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-lime-100 hover:bg-lime-200"
                  >
                    <svg
                      className="w-6 h-6 text-lime-600"
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

              {/* All Reviews List */}
              <div
                ref={listRef}
                className="scroll-reveal hidden md:block opacity-0 translate-y-8 bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    All Reviews ({allReviews.length})
                  </h2>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-4">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 rounded-lg border border-gray-300 bg-white"
                    >
                      <option value="newest">Newest First</option>
                      <option value="highest">Highest Rated</option>
                      <option value="lowest">Lowest Rated</option>
                      <option value="most-liked">Most Liked</option>
                    </select>

                    <select
                      value={filterRating}
                      onChange={(e) => setFilterRating(Number(e.target.value))}
                      className="px-4 py-2 rounded-lg border border-gray-300 bg-white"
                    >
                      <option value="0">All Ratings</option>
                      <option value="5">★★★★★</option>
                      <option value="4">★★★★☆</option>
                      <option value="3">★★★☆☆</option>
                      <option value="2">★★☆☆☆</option>
                      <option value="1">★☆☆☆☆</option>
                    </select>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {sortedAndFilteredReviews.map((review, index) => (
                    <div
                      key={review.id || index}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                            {review.avatar ? (
                              <img
                                src={review.avatar}
                                alt=""
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <User className="w-6 h-6 text-lime-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">
                              {review.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {review.role}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-gray-500 text-sm">
                                {review.date
                                  ? new Date(review.date).toLocaleDateString()
                                  : "Recently"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {review.title && (
                        <h4 className="font-bold text-gray-900 mb-2">
                          {review.title}
                        </h4>
                      )}

                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Submit Review Form */}
            <div
              ref={formRef}
              className="scroll-reveal opacity-0 translate-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Share Your Experience
                </h2>

                <form onSubmit={handleSubmitReview} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                      <input
                        type="text"
                        name="name"
                        value={newReview.name}
                        onChange={handleReviewChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="John Farmer"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                      <input
                        type="email"
                        name="email"
                        value={newReview.email}
                        onChange={handleReviewChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Your Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className={`p-1 ${
                            newReview.rating >= star
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          <Star
                            className={`w-6 h-6 ${
                              newReview.rating >= star ? "fill-yellow-400" : ""
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-gray-600">
                        {newReview.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Upload Photos
                    </label>
                    <div className="space-y-4">
                      {/* File Input */}
                      <div className="relative">
                        <input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          multiple // Remove this if you only want single file upload
                        />
                        <label
                          htmlFor="image-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-lime-300 rounded-2xl cursor-pointer bg-lime-50 hover:bg-lime-100 transition-colors duration-200"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Camera className="w-10 h-10 text-lime-400 mb-3" />
                            <p className="mb-1 text-sm text-gray-700 font-medium">
                              <span className="text-lime-500">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG or WEBP (Max. 5MB each)
                            </p>
                          </div>
                        </label>
                      </div>

                      {/* Image Preview */}
                      {newReview.images && newReview.images.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">
                            Preview ({newReview.images.length} image
                            {newReview.images.length > 1 ? "s" : ""})
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {newReview.images.map((image, index) => (
                              <div key={index} className="relative group">
                                <div className="aspect-square rounded-xl overflow-hidden border border-lime-200">
                                  <img
                                    src={
                                      typeof image === "string"
                                        ? image
                                        : URL.createObjectURL(image)
                                    }
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveImage(index)}
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Review Title */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Review Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={newReview.title}
                      onChange={handleReviewChange}
                      className="w-full px-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      placeholder="Brief summary of your experience"
                    />
                  </div>

                  {/* Review Content */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Your Review *
                    </label>
                    <textarea
                      name="content"
                      value={newReview.content}
                      onChange={handleReviewChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      placeholder="Share your experience with our products..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-lime-400 to-lime-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Review
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReviewPage;
