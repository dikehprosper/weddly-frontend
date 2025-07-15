import React from "react";
import {Github, Linkedin, Twitter} from "lucide-react";

// -------------------------
// Footer Component
// -------------------------

/**
 * Global Footer component for the application.
 * Includes branding, navigation links, legal links, and social icons.
 * Uses responsive design for optimal display across devices.
 */
const Footer: React.FC = () => {
  // Dynamically fetch current year for auto-updated copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className='dark:bg-gray-900 bg-white/60 text-white py-12 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.5)]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Brand and Developer Info */}
          <div className='mb-8 md:mb-0'>
            <a
              href='#home'
              className='text-xl font-bold tracking-tighter text-purple-600 dark:text-purple-400'
            >
              DIKE<span className='dark:text-white text-gray-900'>PROSPER</span>
            </a>
            <p className='mt-2 text-gray-500 text-sm'>
              Full Stack Developer specializing in modern web technologies.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12'>
            {/* Navigation Links */}
            <div>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-white mb-4'>
                Navigation
              </h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#home'
                    className='text-gray-500 hover:text-purple-500 transition-colors'
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-white mb-4'>
                Legal
              </h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-purple-500 transition-colors'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-purple-500 transition-colors'
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-white mb-4'>
                Social
              </h3>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/dikehprosper'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-purple-500 transition-colors'
                >
                  <Github size={20} />
                </a>
                <a
                  href='https://github.com/dikehprosper/weddly-frontend'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-purple-500 transition-colors'
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href='https://x.com/DikeProsper_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-purple-500 transition-colors'
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
