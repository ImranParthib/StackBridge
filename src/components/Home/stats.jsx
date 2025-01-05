import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import handShake from "../../assets/stats/handShake.png";
import satiesClient from "../../assets/stats/satiesClient.png";
import customSoft from "../../assets/stats/customSoft.png";
import ecommerce from "../../assets/stats/ecommerce.png";

const CounterItem = ({ icon, endValue, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay before starting animation
          setTimeout(() => {
            const duration = 2000;
            const steps = 50;
            const stepValue = endValue / steps;
            const stepDuration = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              setCount(Math.min(Math.round(stepValue * currentStep), endValue));

              if (currentStep >= steps) {
                clearInterval(timer);
                setHasAnimated(true);
              }
            }, stepDuration);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [endValue, delay, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="relative group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative flex flex-col items-center">
        {/* Icon container with animation */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-red-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-150" />
          <img
            src={icon}
            alt={label}
            className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Counter with dynamic font size */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-800 flex items-center">
          <span className="tabular-nums">{count}</span>
          <sup className="text-red-600 ml-1 text-2xl sm:text-3xl">+</sup>
        </div>

        {/* Label with responsive text */}
        <div className="text-center">
          <h3 className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
};

CounterItem.propTypes = {
  icon: PropTypes.string.isRequired,
  endValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const Stats = () => {
  const stats = [
    {
      icon: handShake,
      value: 80,
      label: "Project Completed",
    },
    {
      icon: satiesClient,
      value: 25,
      label: "Satisfied Clients",
    },
    {
      icon: customSoft,
      value: 15,
      label: "Custom Software",
    },
    {
      icon: ecommerce,
      value: 50,
      label: "ECommerce Solutions",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 font-semibold mb-2">OUR ACHIEVEMENTS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Numbers Speak For Themselves
          </h3>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Stats grid with responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              icon={stat.icon}
              endValue={stat.value}
              label={stat.label}
              delay={index * 200} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
