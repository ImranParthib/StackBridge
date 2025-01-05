import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-2 px-20 flex items-center justify-between shadow-sm transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white text-[#14294A]" : "bg-transparent , text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/src/images/logo.png"
          alt="Gallant Digital Logo"
          className="h-14"
        />
      </Link>

      {/* Main Navigation */}
      <div className="flex-1 flex justify-center ">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="  font-semibold hover:text-red-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className=" font-semibold hover:text-red-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="  font-semibold group-hover:text-red-600 transition-colors">
                Our Solutions
              </span>
              <ChevronDown className="w-4 h-4   group-hover:text-red-600" />
            </div>
            <ul className="absolute hidden group-hover:block   mt-2 py-2 px-4 rounded shadow-lg min-w-[200px] z-50">
              <li className="py-2">
                <Link
                  to="/services"
                  className="  hover:text-red-600 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/projects"
                  className="  hover:text-red-600 transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/products"
                  className="  hover:text-red-600 transition-colors"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/blogs"
              className="  font-semibold hover:text-red-600 transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="  font-semibold hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media Links and Free Consultation Button */}
      <div className="flex items-center space-x-10">
        <Link
          to="#"
          className="  hover:text-red-600 transition-colors font-semibold"
        >
          FB
        </Link>
        <Link
          to="#"
          className=" hover:text-red-600 transition-colors font-bold"
        >
          IN
        </Link>
        <Link
          to="/consultation"
          className="bg-[#dd0429] text-white px-4 py-3 hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
        >
          Free Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Header;
