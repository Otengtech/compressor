import React, { useContext, useState } from "react";
import { ContentContext } from "../context/ContentContext";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  User,
  Send,
  Clock,
} from "lucide-react";
import Footer from "../components/homecomponents/Footer";
import { useScrollReveal } from "../animation/useScrollReveal";

const ContactPage = () => {
  const { content, loading } = useContext(ContentContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const bannerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const formRef = useScrollReveal();

  if (loading || !content) return null;

  const data = content.contactPage;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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

      {/* Main Content */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div ref={leftRef} className="scroll-reveal opacity-0 translate-y-10 space-y-6">
            <h2 className="text-xl font-bold text-gray-700">{data.leftContent.heading}</h2>
            <h2 className="text-3xl font-bold text-lime-400">NAYA SUCCESS AXIS</h2>
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
                <span className="text-gray-700">{data.contacts.phoneNumbers.join(" / ")}</span>
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

          {/* Right Form */}
          <div ref={formRef} className="scroll-reveal opacity-0 translate-y-10 bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.rightForm.title}</h2>
            {isSubmitted ? (
              <div className="text-center py-12">
                <Send className="w-20 h-20 text-lime-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                    ) : (
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lime-400" />
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          className="w-full pl-12 pr-4 py-3 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                          placeholder={`Enter ${field.label}`}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </div>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-lime-500 text-white py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span className="flex items-center gap-2">
                    {data.rightForm.buttonText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
