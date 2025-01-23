import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">BrandName</h1>
            <p className="text-sm text-gray-400">Your tagline here</p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10">
            <div>
              <h2 className="text-lg font-semibold mb-2">Company</h2>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Support</h2>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.5c-.9.4-1.8.7-2.8.8a4.8 4.8 0 0 0 2.1-2.6 9.6 9.6 0 0 1-3.1 1.2A4.8 4.8 0 0 0 16.7 3c-2.7 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.2A13.6 13.6 0 0 1 1.7 3.6a4.8 4.8 0 0 0 1.5 6.4 4.6 4.6 0 0 1-2.2-.6c0 2.3 1.6 4.3 3.8 4.8a5 5 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3A9.6 9.6 0 0 1 0 20.2a13.6 13.6 0 0 0 7.4 2.2c8.9 0 13.8-7.4 13.8-13.8v-.6c.9-.7 1.7-1.5 2.3-2.4z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 5.64c-.8.36-1.7.6-2.63.7a4.62 4.62 0 0 0 2-2.56 9.4 9.4 0 0 1-2.93 1.12 4.61 4.61 0 0 0-7.84 4.2A13.07 13.07 0 0 1 1.64 4.16a4.6 4.6 0 0 0 1.43 6.13A4.54 4.54 0 0 1 .8 9.15v.05a4.61 4.61 0 0 0 3.7 4.53 4.67 4.67 0 0 1-2.08.08 4.61 4.61 0 0 0 4.3 3.2A9.24 9.24 0 0 1 .46 19a13 13 0 0 0 7.1 2.08c8.56 0 13.23-7.1 13.23-13.23v-.6A9.53 9.53 0 0 0 24 4.64a9.3 9.3 0 0 1-2.64.72 4.6 4.6 0 0 0 2-2.53z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;