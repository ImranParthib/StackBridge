import React, { useState, useEffect } from "react";
import safayet from "../../assets/testimonials/AI Safayet.png";
import anonymous from "../../assets/testimonials/anonymous.png";
import Elival from "../../assets/testimonials/Elival.png";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      name: "Florence Ashman",
      role: "CEO, RF3 World UK",
      image: anonymous,
      content:
        "Gallant Digital did an exceptionally good job. They completed every aspect of the project with good attention to detail. They went above and beyond to render excellent service and took time to explain to me the progress of the project and made valuable suggestions as well. I am truly happy with the areas of my website he updated, exactly as I wanted to. I would certainly hire them again!",
    },
    {
      name: "Janelle Billingslea",
      role: "Author",
      image: safayet,
      content:
        "The seller was phenomenal! Patient, kind, understanding and most of all flexible. I am beyond pleased with what the seller created. I plan on working with them far into the future. Very highly recommended.",
    },
    {
      name: "Al Safayat",
      role: "Manager, Isam Auto",
      image: safayet,
      content:
        "They did a great job. They have delivered my work very fast. Best thing was the quality of work and the way they took care of it was very gentle and professional. I'm looking forward to work with them more in near future. Highly recommend.",
    },
    {
      name: "Elival",
      role: "Business Analyst",
      image: Elival,
      content:
        "Outstanding service and attention to detail. The team went above and beyond our expectations. Highly recommended for any digital projects.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = () => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-black">
          ✦
        </span>
      ))}
    </div>
  );

  const getVisibleTestimonials = () => {
    const visibleIndices = [...Array(visibleCount)].map(
      (_, i) => (activeIndex + i) % testimonials.length
    );
    return visibleIndices.map((i) => testimonials[i]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-16">
        <span className="text-red-500 text-sm font-medium uppercase tracking-wider relative inline-block">
          Testimonial
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-red-500"></span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold mt-4">
          WHAT SAY STACK
          <br />
          BRIDGE CLIENTS!
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-center gap-4 sm:gap-6 transition-transform duration-500">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 min-w-[280px] transition-all duration-500"
            >
              <div className="relative pt-12 pb-6 px-4 sm:p-8 border border-pink-200 mt-8">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-white">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-6">
                    "{testimonial.content}"
                  </p>
                  {renderStars()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 
              ${index === activeIndex ? "bg-red-500" : "bg-gray-300"} 
              border border-transparent
              ${index === activeIndex ? "border-red-500" : ""}`}
            aria-label={`Go to testimonial set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
