import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <nav className="bg-white py-4 px-20 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/src/images/logo.png"
          alt="Gallant Digital Logo"
          className="h-14"
        />
      </Link>

      {/* Main Navigation */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-[#14294A] font-semibold hover:text-red-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="text-[#14294A] font-semibold hover:text-red-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-[#14294A] font-semibold group-hover:text-red-600 transition-colors">
                Our Solutions
              </span>
              <ChevronDown className="w-4 h-4 text-[#14294A] group-hover:text-red-600" />
            </div>
            <ul className="absolute hidden group-hover:block bg-white mt-2 py-2 px-4 rounded shadow-lg min-w-[200px] z-50">
              <li className="py-2">
                <Link
                  to="/services"
                  className="text-[#14294A] hover:text-red-600 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/projects"
                  className="text-[#14294A] hover:text-red-600 transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/products"
                  className="text-[#14294A] hover:text-red-600 transition-colors"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-[#14294A] font-semibold hover:text-red-600 transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-[#14294A] font-semibold hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media Links and Free Consultation Button */}
      <div className="flex items-center space-x-4">
        <Link
          to="#"
          className="text-black hover:text-red-600 transition-colors font-semibold"
        >
          FB
        </Link>
        <Link
          to="#"
          className="text-black hover:text-red-600 transition-colors font-bold"
        >
          IN
        </Link>
        <Link
          to="/consultation"
          className="bg-[#dd0429] text-white px-6 py-4   hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
        >
          Free Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Header;
