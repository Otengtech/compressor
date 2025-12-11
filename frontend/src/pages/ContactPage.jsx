import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowRight,
  User,
} from "lucide-react";
import Footer from "../components/homecomponents/Footer";
import { useScrollReveal } from "../animation/useScrollReveal";

const ContactPage = () => {
  const leftRef = useScrollReveal();
  const formRef = useScrollReveal();

  const { content, loading } = useContext(ContentContext);
  if (loading || !content) return null;

  const data = content.contactPage;

  // Scroll reveal refs
  const bannerRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white">
      {/* Banner */}
      <div
        className="relative w-full h-96 lg:h-[420px] bg-cover bg-top"
        style={{ backgroundImage: `url(${data.banner.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            ref={bannerRef}
            className="scroll-reveal opacity-0 translate-y-10 text-5xl lg:text-7xl font-bold text-white text-center"
          >
            {data.banner.title}
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div
            ref={leftRef}
            className="scroll-reveal opacity-0 translate-y-10 space-y-6"
          >
            <h2 className="text-xl font-bold text-gray-700">
              {data.leftContent.heading}
            </h2>
            <h2 className="text-3xl font-bold text-lime-400">
              NAYA SUCCESS AXIS
            </h2>
            <p className="text-gray-700">{data.leftContent.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-lime-400" />
                <span>{data.leftContent.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Postal Code:</span>
                <strong>{data.leftContent.postalCode}</strong>
              </div>
              <div>
                <strong>{data.leftContent.pickUpLocation}</strong>
                <p>{data.leftContent.deliveryInfo}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Products:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {data.leftContent.products.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Contacts:</h3>
              <p>
                <span className="text-gray-900 font-medium">Phone:</span>{" "}
                <span className="text-gray-700">
                  {data.contacts.phoneNumbers.join(" / ")}
                </span>
              </p>
              <p>
                <span className="text-gray-900 font-medium">WhatsApp:</span>{" "}
                <span className="text-gray-700">{data.contacts.whatsapp}</span>
              </p>
              <p>
                <span className="text-gray-900 font-medium">Email:</span>{" "}
                <span className="text-gray-700">{data.contacts.email}</span>
              </p>
              <p>
                <span className="text-gray-900 font-medium">Facebook:</span>{" "}
                <span className="text-gray-700">{data.contacts.facebook}</span>
              </p>
              <p>
                <span className="text-gray-900 font-medium">Instagram:</span>{" "}
                <span className="text-gray-700">{data.contacts.instagram}</span>
              </p>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right Form */}
          <div
            ref={formRef}
            className="scroll-reveal opacity-0 translate-y-10 bg-white rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-lgray-700 mb-6">
              {data.rightForm.title}
            </h2>
            <form className="space-y-6">
              {data.rightForm.fields.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {field.label} {field.required && "*"}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      rows="5"
                      className="w-full px-4 py-3 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      placeholder={`Enter ${field.label}`}
                    ></textarea>
                  ) : (
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full pl-12 pr-4 py-3 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder={`Enter ${field.label}`}
                      />
                    </div>
                  )}
=======
      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-lime-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-700 mb-6">
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
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
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
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
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
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-lime-400 to-lime-500 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
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
                  <div className="flex items-start p-4 bg-white rounded-xl">
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
>>>>>>> 5092674510430cfcbd4455cbb07352723305a662
                </div>
              ))}

<<<<<<< HEAD
              <button
                type="submit"
                className="w-full bg-lime-500 text-gray-700 py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  {data.rightForm.buttonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
            </form>
=======
                {/* Map Preview */}
                <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-white relative border border-gray-400">
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
              <div className="bg-lime-100 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Facebook className="w-6 h-6 text-gray-700" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Twitter className="w-6 h-6 text-gray-700" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Instagram className="w-6 h-6 text-gray-700" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

>>>>>>> 5092674510430cfcbd4455cbb07352723305a662
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
