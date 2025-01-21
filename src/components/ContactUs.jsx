import bgImage from "../assets/background/contactUs.png";

import { useState } from "react";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="p-8 mt-8">
          <h2 className="text-5xl font-bold mb-6 text-white leading-tight text-center animate-fade-in">
            We'd Love to Hear from You!
          </h2>
          <p className="text-xl text-gray-200 text-center font-medium mb-12">
            Reach out with any questions or feedback - we're here to help 24/7.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl backdrop-blur-md bg-white/10 shadow-2xl p-8 transform hover:scale-[1.01] transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  Name
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-4 flex items-center transition-colors duration-200 group-hover:text-red-400">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </span>
                  <input
                    className="w-full bg-white/90 text-gray-800 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-200"
                    type="text"
                    placeholder="Your Name"
                    defaultValue="Imran Parthib"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  Email
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-4 flex items-center transition-colors duration-200 group-hover:text-red-400">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input
                    className="w-full bg-white/90 text-gray-800 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-200"
                    type="email"
                    placeholder="your.email@example.com"
                    defaultValue="imranparthib13@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  Message
                </label>
                <div className="relative group">
                  <span className="absolute top-3 left-4 transition-colors duration-200 group-hover:text-red-400">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <textarea
                    className="w-full bg-white/90 text-gray-800 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-200"
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-lg font-medium hover:from-red-700 hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
