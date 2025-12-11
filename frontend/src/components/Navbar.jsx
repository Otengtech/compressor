import React, { useState } from "react";
import { Search, Menu, X, ChevronDown, Facebook, MessageCircle, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Our Service", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  const pagesDropdownItems = [
    { label: "Privacy", href: "/privacy" },
    { label: "FAQ", href: "/faq" },
    { label: "Our Team", href: "/team" },
    { label: "Reviews", href: "/review" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "https://whatsapp.com" },
    { icon: <Youtube size={20} />, label: "TikTok", href: "https://youtube.com" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVBAR MAIN ROW */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-lime-400 transition-colors"
            >
              <img src={logo} alt="logo" className="w-16 h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-lime-500 px-4 py-2 text-sm font-medium transition duration-200 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Pages Dropdown for Desktop */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-lime-600 px-4 py-2 text-sm font-medium transition duration-200 hover:scale-105">
                Pages
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                {pagesDropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-lime-600 transition-colors first:rounded-t-md last:rounded-b-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-green-600 px-4 py-2 text-sm font-medium transition duration-200 hover:scale-105"
              >
                {item.icon}
              </Link>
            ))}
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU - Full page overlay with slide animation */}
        <div className={`lg:hidden fixed inset-0 z-40 overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sliding Menu */}
          <div 
            className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Menu Header with Logo */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold text-green-400"
              >
                <img src={logo} alt="logo" className="w-16 h-16" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-green-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-80px)] flex flex-col">
              {/* Navigation Links */}
              <div className="flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-md text-base font-medium transition-colors mb-1"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Pages Dropdown for Mobile */}
                <div className="mb-1">
                  <button
                    onClick={() => setIsPagesOpen(!isPagesOpen)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  >
                    Pages
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Dropdown Items */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isPagesOpen ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}>
                    {pagesDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-600 hover:text-green-600 hover:bg-green-50 pl-8 pr-4 py-2.5 rounded-md text-sm font-medium transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media Links - At the bottom of mobile menu */}
              <div className="pt-6 mt-6 border-t">
                <p className="text-sm text-gray-500 mb-3 px-4">Follow Us</p>
                <div className="flex space-x-4 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 hover:bg-green-50 p-2 rounded-full transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;