import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import handShake from "../../assets/stats/handShake.png";
import satiesClient from "../../assets/stats/satiesClient.png";
import customSoft from "../../assets/stats/customSoft.png";
import ecommerce from "../../assets/stats/ecommerce.png";

const CounterItem = ({ icon, endValue, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const stepValue = endValue / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(stepValue * currentStep), endValue));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={label} className="w-12 h-12 mb-4" />
      <div className="text-4xl font-bold mb-2">
        {count}
        <sup>+</sup>
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

CounterItem.propTypes = {
  icon: PropTypes.string.isRequired,
  endValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
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
    <div className="container mx-auto px-32 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <CounterItem
            key={index}
            icon={stat.icon}
            endValue={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
