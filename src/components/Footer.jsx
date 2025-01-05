import { Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#091f40] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Stack Bridge Logo" className="h-20 w-36" />
            </div>
            <p className="text-gray-300 max-w-sm">
              Stack Bridge is your tech buddy. We help businesses by being super
              smart and experienced. Our success history makes us special,
              creating custom solutions to boost your online presence and make
              your business grow.
            </p>
          </div>

          {/* Contact & Address */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact & Address</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:list-disc hover:text-red-600 transition-all duration-300">
                contact@stackbridge360.com
              </li>
              <li className="hover:list-disc hover:text-red-600 transition-all duration-300">
                Bangladesh: Salaha Limelight, House- 1/2, Block- A, Bank Colony,
                Savar, Dhaka-1340
              </li>
              <li className="hover:list-disc hover:text-red-600 transition-all duration-300">
                BD: +{880} 1324-417651
              </li>
              <li className="hover:list-disc hover:text-red-600 transition-all duration-300">
                USA: Grand Rapids, Michigan, 49514
              </li>
              <li className="hover:list-disc hover:text-red-600 transition-all duration-300">
                USA: +{517} 280-1720
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6 ">
            <h3 className="text-xl font-bold">Company</h3>
            <nav>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Our Products",
                  "Custom Software Development",
                  "Web Application Design & Development",
                  "Advanced AI Business Intelligence",
                  "Blog & News",
                  "Career",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:list-disc hover:text-red-600 hover:font-semibold hover:text-lg transition-all duration-300"
                  >
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get The Updates</h3>
            <p className="text-gray-300">
              Sign up to receive the best offers on any kind of software.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Type your Email"
                className="px-4 py-2 bg-gray-800 rounded text-white"
              />
              <button className="px-6 py-2 hover:bg-[#dd0429] text-white rounded bg-[#1a58b4] transition-colors duration-300">
                Subscribe Now
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 hover:animate-spin"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © Copyright {new Date().getFullYear()} Stack Bridge
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/support-policy"
                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300"
              >
                Support Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
