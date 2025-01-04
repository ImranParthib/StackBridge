import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-6 flex flex-col items-center">
        <button
          onClick={scrollToTop}
          className="bg-white text-red-600 p-2 rounded-full shadow-xl hover:shadow-2xl transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 flex flex-col items-center"
          aria-label="Back to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7-7-7 7M12 4v16"
            />
          </svg>
          <span className="text-xs font-bold">TOP</span>
        </button>
      </div>
    )
  );
};

export default BackToTopButton;
