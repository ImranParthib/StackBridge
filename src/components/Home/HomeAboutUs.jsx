import { ArrowRight, Target, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mission from "../../assets/mission/mission.png";
import barChart from "../../assets/about/barChart.png";
import terminal from "../../assets/about/terminal.png";
import code from "../../assets/about/code.png";
import bug from "../../assets/about/bug.png";

const HomeAboutUs = () => {
  const stats = [
    { label: "Projects Completed", value: "500+", icon: Code },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Target },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-red-600 font-semibold mb-4 tracking-wider">
              ABOUT US
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Digital Solution With{" "}
              <span className="text-red-600">7 Years</span> Of Experience.
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            Empowering businesses through innovation and proven expertise. Our
            track record of success sets us apart, delivering tailored solutions
            to elevate your digital presence and drive sustainable growth.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 py-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                <img
                  src={mission}
                  alt="Mission Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Stack Bridge, our mission is to revolutionize businesses
                through innovative tech solutions. Guided by client needs,
                integrity, and a commitment to social impact, we shape a future
                where technology propels success and positive change.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center space-x-2  bg-[#dd0429] text-white px-4 py-3 hover:bg-[#091f40] hover:text-red-600 transition-colors font-semibold"
          >
            <span className="font-semibold ">Discover More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Right Image Grid */}
        <div className="relative ">
          {/* Decorative dots pattern */}
          <div
            className=" absolute top-0 right-0 w-32 h-32 opacity-50 -translate-y-8 translate-x-8   "
            style={{
              backgroundImage:
                "radial-gradient(circle, #888 2px, transparent 2px)",
              backgroundSize: "10px 10px",
              zIndex: -1,
            }}
          />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img
                  src={barChart}
                  alt="Bar Chart"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img
                  src={terminal}
                  alt="Code Terminal"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img
                  src={code}
                  alt="Coding"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img
                  src={bug}
                  alt="Bug Fixing"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Decorative curved line */}
          <div className="absolute left-0 bottom-0 w-32 h-32 -translate-x-16 translate-y-16 opacity-50">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-none stroke-red-200"
            >
              <path
                d="M 10 50 Q 50 10 90 50"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
