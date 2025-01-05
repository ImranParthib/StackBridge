import bgImage from "../assets/background/contactUs.png";

function ContactUs() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white leading-tight tracking-wider">
          We&aposd Love to Hear from You!
        </h2>
        <p className="text-lg mb-8 text-gray-300 font-semibold">
          Reach out with any questions or feedback.
        </p>
        <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6 transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow-lg appearance-none border-2 border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow-lg appearance-none border-2 border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="email"
              type="email"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="shadow-lg appearance-none border-2 border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
