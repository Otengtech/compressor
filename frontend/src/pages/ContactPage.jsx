import React, { useState } from "react";
import banner from "..//assets/blog4.jpg"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  Building,
  ArrowRight,
  ChevronRight,
  Leaf
} from "lucide-react";
import Footer from "../components/homecomponents/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white">
 
      {/* Banner */}
      <div
        className="relative w-full h-96 lg:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">
            CONTACT PAGE
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 lg:py-10 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              Have questions about our organic poultry products or need farming advice? 
              Our dedicated team is here to help you succeed in sustainable farming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-lime-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-lime-200">
                <h2 className="text-3xl font-bold text-lime-400 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-lime-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                            placeholder="John Farmer"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 mt-4 font-medium">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-xl border border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-lime-400 to-lime-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-lime-200">
                <h3 className="text-2xl font-bold text-lime-400 mb-6">
                  Visit Our Site
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-lime-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700">
                        Adenta, Accra-Ghana<br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-lime-50 rounded-xl">
                    <Clock className="w-6 h-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Preview */}
                <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-lime-100 to-emerald-100 relative border border-lime-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-lime-400 mx-auto mb-3 animate-bounce" />
                      <p className="text-gray-800 font-semibold text-lg">Organic Poultry Farm Location</p>
                      <button className="mt-3 px-6 py-2 bg-lime-400 text-white rounded-full font-medium hover:bg-lime-500 transition-all flex items-center gap-2 mx-auto">
                        View on Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-lime-400 to-lime-500 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;