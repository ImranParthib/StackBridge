import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerOne from "../../assets/banner/deal.png";
import bannerTwo from "../../assets/banner/strategy.png";
import HomeAboutUs from "./HomeAboutUs";
import Services from "./ServiceCard";
import Testimonial from "./Testimonial";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      subtitle: "ENHANCE DIGITAL PRESENCE",
      title: "COMPREHENSIVE\nDIGITAL SOLUTIONS",
      image: bannerOne,
    },
    {
      subtitle: "WELCOME TO GALLANT DIGITAL",
      title: "INNOVATIVE IT\nSOLUTIONS",
      image: bannerTwo,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative h-screen">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div
            className={`text-center transition-all duration-700 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-lg mb-4">{slides[currentSlide].subtitle}</p>
            <h1 className="text-5xl md:text-7xl font-bold whitespace-pre-line leading-tight mb-8">
              {slides[currentSlide].title}
            </h1>
            <button className="border border-red-600 hover:border-[#091f40] text-white px-8 py-3 hover:bg-[#091f40] transition-colors duration-300 inline-flex items-center space-x-2">
              <a
                href="https://wa.me/01756404302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span className="cursor-pointer text-2xl">LIVE CONTACT</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-20">
          <button
            onClick={handlePrev}
            className="text-white hover:text-red-600 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-red-600 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mouse Scroll Icon */}
        <div
          onClick={scrollToNextSection}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white">
        <HomeAboutUs />
      </section>
      {/* Services Section */}
      <section id="services" className="bg-white">
        <Services />
      </section>
      {/* Testimonial Section */}
      <section id="testimonial" className="bg-white">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;
