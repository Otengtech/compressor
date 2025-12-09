import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVBAR MAIN ROW */}
        <div className="flex justify-between items-center h-16">
          {/* LEFT: LOGO + MOBILE MENU BUTTON */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-400 transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/"
              className="ml-2 lg:ml-0 text-xl font-bold text-green-400 transition-colors"
            >
              PoultryFarm
            </Link>
          </div>
          <div className="flex items-center justify-center">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex ml-10 space-x-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-green-400 px-3 py-2 text-sm font-medium transition duration-200 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* SEARCH BAR */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 bg-transparent pr-4 py-2.5 border placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent border-emerald-400 hover-border-emerald-400 rounded-full transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-green-100 border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-green-400 hover:bg-gray-50 
                             px-3 py-2 rounded-md text-base font-medium transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
