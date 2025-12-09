import React, { useState } from "react";
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
  ArrowRight
} from "lucide-react";

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
  const [activeContact, setActiveContact] = useState("general");

  const contactMethods = [
    {
      id: "general",
      title: "General Inquiries",
      description: "Questions about our products or services",
      icon: <MessageSquare className="w-6 h-6" />,
      email: "info@poultryfarm.com",
      phone: "+1 (555) 123-4567"
    },
    {
      id: "sales",
      title: "Sales & Orders",
      description: "Product information and order placement",
      icon: <Building className="w-6 h-6" />,
      email: "sales@poultryfarm.com",
      phone: "+1 (555) 123-4568"
    },
    {
      id: "support",
      title: "Farm Support",
      description: "Technical support and farming advice",
      icon: <User className="w-6 h-6" />,
      email: "support@poultryfarm.com",
      phone: "+1 (555) 123-4569"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-6">
              Contact
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Our Team
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions about our poultry products or need farming advice? 
              Our team is here to help you succeed.
            </p>

            {/* Contact Methods Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setActiveContact(method.id)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeContact === method.id
                      ? "bg-[#f4b63c] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {method.icon}
                    {method.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4b63c] focus:border-transparent"
                            placeholder="John Farmer"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4b63c] focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4b63c] focus:border-transparent"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Company/Farm Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4b63c] focus:border-transparent"
                            placeholder="Sunrise Farms"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4b63c] focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-[#f4b63c] to-orange-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Active Contact Info */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 bg-white rounded-2xl">
                    <div className="text-[#f4b63c]">
                      {contactMethods.find(m => m.id === activeContact)?.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {contactMethods.find(m => m.id === activeContact)?.title}
                    </h3>
                    <p className="text-gray-600">
                      {contactMethods.find(m => m.id === activeContact)?.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#f4b63c] mr-3 flex-shrink-0" />
                    <a 
                      href={`mailto:${contactMethods.find(m => m.id === activeContact)?.email}`}
                      className="text-gray-700 hover:text-[#f4b63c] transition-colors"
                    >
                      {contactMethods.find(m => m.id === activeContact)?.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#f4b63c] mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${contactMethods.find(m => m.id === activeContact)?.phone}`}
                      className="text-gray-700 hover:text-[#f4b63c] transition-colors"
                    >
                      {contactMethods.find(m => m.id === activeContact)?.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Visit Our Farm
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#f4b63c] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Farm Road<br />
                        Poultry City, PC 45001<br />
                        Agricultural Zone
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#f4b63c] mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Preview */}
                <div className="mt-8 rounded-xl overflow-hidden h-48 bg-gradient-to-r from-amber-100 to-orange-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-[#f4b63c] mx-auto mb-2" />
                      <p className="text-gray-700 font-medium">Poultry Farm Location</p>
                      <button className="mt-2 text-sm text-[#f4b63c] font-semibold">
                        View on Google Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 block">
                Questions
              </span>
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What are your delivery options and timelines?",
                a: "We offer next-day delivery for most products within 100 miles. Nationwide shipping takes 2-3 business days with climate-controlled transport."
              },
              {
                q: "Do you offer farm tours for potential partners?",
                a: "Yes! We schedule farm tours every Tuesday and Thursday. Contact us to book your visit."
              },
              {
                q: "What certifications does your farm have?",
                a: "We are USDA certified organic, Animal Welfare Approved, and follow all FDA regulations for poultry farming."
              },
              {
                q: "How do I place a bulk order for my farm?",
                a: "For bulk orders over $500, contact our sales team directly for special pricing and customized delivery schedules."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Call our emergency farm support line for urgent poultry health concerns
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-bold text-lg">+1 (555) 123-4570</span>
              </div>
              <p className="text-sm text-white/80">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;