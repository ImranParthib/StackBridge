import React from "react";
import {
  Code,
  Globe,
  Brain,
  ShieldCheck,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import Stats from "./stats";

const ServiceCard = ({ number, icon: Icon, title, description }) => (
  <div className="p-6 md:p-8 border rounded-lg hover:shadow-lg transition-shadow relative">
    <div className="absolute top-4 right-4 text-4xl md:text-6xl text-gray-100">
      {number}
    </div>
    <div className="mb-6">
      <Icon
        className={`w-10 h-10 md:w-12 md:h-12 ${
          number === "2" ? "text-red-500" : "text-gray-700"
        }`}
      />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      className={`flex items-center ${
        number === "2" ? "text-red-500" : "text-gray-700"
      } hover:opacity-80`}
    >
      Read more
      <svg
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Custom software development at Stack Bridge. We specialize in providing high-quality, customized software solutions that perfectly match your business needs.",
    },
    {
      icon: Globe,
      title: "Web Application Design & Development",
      description:
        "Web Design and Development. A well-designed website can make all the difference in the success of your business. Your website is often the first point of contact.",
    },
    {
      icon: Brain,
      title: "Advanced AI Business Intelligence",
      description:
        "Advanced AI Business Intelligence at Stack Bridge. In today's data-driven world, businesses need more than just insights—they need actionable intelligence.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions to protect your digital assets. We provide advanced threat detection, prevention, and response strategies.",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing & SEO",
      description:
        "Strategic digital marketing and SEO services to boost your online presence. We help you reach your target audience and achieve measurable results.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "End-to-end e-commerce development services. We create scalable online stores with seamless payment integration and optimal user experience.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-4">SERVICE LIST</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stack Bridge CORE SERVICES
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your One-Stop Digital Partner- Creating Websites, Custom
            Applications, Elevating eCommerce, and Enhancing Visibility with
            Expert SEO Services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={(index + 1).toString()}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Services;
