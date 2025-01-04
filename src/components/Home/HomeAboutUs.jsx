import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeAboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-red-600 font-semibold mb-4">ABOUT US</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Digital Solution With 7 Years Of Experience.
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Empowering businesses through innovation and proven expertise. Our
            track record of success sets us apart, delivering tailored solutions
            to elevate your digital presence and drive sustainable growth.
          </p>

          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16">
                <img
                  src="/src/assets/mission/mission.png"
                  alt="Mission Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Gallant Digital, our mission is to revolutionize businesses
                through innovative tech solutions. Guided by client needs,
                integrity, and a commitment to social impact, we shape a future
                where technology propels success and positive change.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors duration-300"
          >
            <span>About More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Image Grid */}
        <div className="relative">
          {/* Decorative dots pattern */}
          <div
            className="absolute top-0 right-0 w-24 h-24 bg-gray-200 opacity-50 -translate-y-8 translate-x-8"
            style={{
              backgroundImage:
                "radial-gradient(circle, #888 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/src/assets/about/barChart.png"
              alt="Digital solutions 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/src/assets/about/barChart.png"
              alt="Digital solutions 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/src/assets/about/terminal.png"
              alt="Digital solutions 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/src/assets/about/bug.png"
              alt="Digital solutions 4"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Decorative curved line */}
          <div className="absolute left-0 bottom-0 w-32 h-32 -translate-x-16 translate-y-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-none stroke-red-200"
            >
              <path d="M 10 50 Q 50 10 90 50" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
