"use client";

import React, {useState, useEffect} from "react";
import {Menu, X, Moon, Sun} from "lucide-react";

// -------------------------
// Props Definition
// -------------------------

/**
 * NavbarProps defines the theme state and toggle function
 * received from the parent component (typically for global theme control).
 */
interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// -------------------------
// Navbar Component
// -------------------------

/**
 * Responsive Navbar component with theme toggle and scroll-based styling.
 *
 * Features:
 * - Dynamic background and shadow on scroll
 * - Theme toggle (light/dark mode)
 * - Mobile responsive menu with smooth transitions
 */
const Navbar: React.FC<NavbarProps> = ({theme, toggleTheme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu open/close
  const [scrolled, setScrolled] = useState(false); // State to track page scroll for styling

  // Listen to window scroll event to update `scrolled` state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links (extendable if needed)
  const navLinks = [{name: "Home", href: "/"}];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo / Brand */}
          <div className='flex-shrink-0'>
            <a
              href='#home'
              className='text-lg sm:text-xl font-bold tracking-tighter text-purple-600 dark:text-purple-400'
            >
              WED<span className='text-gray-800 dark:text-white'>DLY</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-gray-700 hover:text-purple-500 dark:text-gray-300 transition-colors'
              >
                {link.name}
              </a>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className='md:hidden flex items-center'>
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className='p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Menu Open/Close Toggle */}
            <button
              onClick={toggleMenu}
              className='p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              aria-expanded={isMenuOpen}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className='px-4 py-2 space-y-1 bg-white dark:bg-gray-900 shadow-lg'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-800 transition-colors'
              onClick={() => setIsMenuOpen(false)} // Closes menu after navigation
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
