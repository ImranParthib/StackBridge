import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full py-2 px-4 md:px-20 flex items-center justify-between shadow-sm transition-all duration-300 z-50 ${
          isScrolled ? "bg-white text-[#14294A]" : "bg-transparent text-white"
        }`}
      >
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Stack Bridge Logo" className="h-12 md:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="font-semibold hover:text-red-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="font-semibold hover:text-red-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li className="relative group">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="font-semibold group-hover:text-red-600 transition-colors">
                  Our Solutions
                </span>
                <ChevronDown className="w-4 h-4 group-hover:text-red-600" />
              </div>
              <ul className="absolute hidden group-hover:block bg-white text-[#14294A] mt-2 py-2 px-4 rounded shadow-lg min-w-[200px] z-50">
                <li className="py-2">
                  <Link
                    to="/services"
                    className="hover:text-red-600 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/projects"
                    className="hover:text-red-600 transition-colors"
                  >
                    Our Projects
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/products"
                    className="hover:text-red-600 transition-colors"
                  >
                    Our Products
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/blogs"
                className="font-semibold hover:text-red-600 transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="font-semibold hover:text-red-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Social Links and Consultation Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link
            to="#"
            className="hover:text-red-600 transition-colors font-semibold"
          >
            FB
          </Link>
          <Link
            to="#"
            className="hover:text-red-600 transition-colors font-bold"
          >
            IN
          </Link>
          <Link
            target="_blank"
            to="https://calendly.com/imranparthib13/30min?preview_source=et_card&month=2025-01"
            className="bg-[#dd0429] text-white px-4 py-3 hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden z-40 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[60%] bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Logo and Company Name */}
          <div className="p-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/images/logo.png"
                alt="Stack Bridge Logo"
                className="h-12"
              />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-red-600" />

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="px-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-[#14294A] font-semibold hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="block text-[#14294A] font-semibold hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-[#14294A] font-semibold hover:text-red-600 transition-colors"
                >
                  <span>Our Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`ml-4 mt-2 space-y-2 ${
                    isServicesOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      to="/services"
                      className="block text-[#14294A] hover:text-red-600 transition-colors py-2"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="block text-[#14294A] hover:text-red-600 transition-colors py-2"
                    >
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="block text-[#14294A] hover:text-red-600 transition-colors py-2"
                    >
                      Our Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block text-[#14294A] font-semibold hover:text-red-600 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block text-[#14294A] font-semibold hover:text-red-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Social Links and Consultation Button */}
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Link
                to="#"
                className="text-[#14294A] hover:text-red-600 transition-colors font-semibold"
              >
                FB
              </Link>
              <Link
                to="#"
                className="text-[#14294A] hover:text-red-600 transition-colors font-bold"
              >
                IN
              </Link>
            </div>
            <Link
              to="#"
              className="block w-full bg-[#dd0429] text-white px-4 py-3 text-center hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
