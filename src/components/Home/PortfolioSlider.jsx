import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tourist from "../../assets/portfolio/tourist.png";
import fashion from "../../assets/portfolio/fashion.png";
import xplore from "../../assets/portfolio/xplore.png";
import talent from "../../assets/portfolio/talent.jpg";
import tracking from "../../assets/portfolio/tracking.jpg";

const PortfolioSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const portfolioItems = [
    {
      image: talent,
      categories: ["Custom Software", "Digital Marketing"],
      title: "Talents Placement (Hiring Applications With Python Django)",
    },
    {
      image: tracking,
      categories: ["Custom Software"],
      title: "Total Tracks (A Comprehensive Agency Management Solution)",
    },
    {
      image: tourist,
      categories: ["Custom Software", "Design & Development"],
      title: "TixTrip (A B2B Air Ticket Booking App)",
    },
    {
      image: fashion,
      categories: ["Ecommerce Solutions"],
      title: "Girlize Gallery (A Dropshipping E-Commerce Website)",
    },
    {
      image: xplore,
      categories: ["Design & Development", "Digital Marketing"],
      title: "SmartBikes (A Business Analytical Website)",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === portfolioItems.length - visibleCount ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [portfolioItems.length, visibleCount]);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? portfolioItems.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === portfolioItems.length - visibleCount ? 0 : prev + 1
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % portfolioItems.length;
      items.push(portfolioItems[index]);
    }
    return items;
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-0 mb-20 mt-20">
      <div className="mb-12">
        <p className="text-red-500 text-sm font-medium uppercase tracking-wider relative inline-block">
          IT PORTFOLIO & PRODUCTS
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
        </p>
        <h2 className="text-4xl font-bold mt-4 mb-2">
          Stack Bridge Own
          <br />
          Recent Portfolio &<br />
          Products
        </h2>
        <p className="text-gray-600">
          Recently Completed Projects for clients of Stack Bridge.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-4 transition-all duration-500 ease-in-out">
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className={`${
                visibleCount === 5
                  ? "w-1/5"
                  : visibleCount === 3
                  ? "w-1/3"
                  : "w-full"
              } flex-shrink-0 transition-all duration-500`}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-navy-800 bg-opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-[#091F40] h-36">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.categories.map((category, idx) => (
                        <span key={idx} className="text-sm text-gray-300">
                          {idx > 0 && ", "}
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === activeIndex ? "bg-red-500 w-6" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;
