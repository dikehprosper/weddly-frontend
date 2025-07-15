"use client";

import {createContext, useContext, useEffect, useState, ReactNode} from "react";

// -------------------------
// Type Definitions
// -------------------------

// Theme can either be "light" or "dark"
type Theme = "light" | "dark";

// Theme context value with theme state and toggle function
type ThemeContextType = {theme: Theme; toggleTheme: () => void};

// -------------------------
// Theme Context
// -------------------------

// Create React Context for theme management, defaulting to undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// -------------------------
// ThemeProvider Component
// -------------------------

/**
 * ThemeProvider component to manage and provide theme context across the app.
 *
 * Handles detecting user preferred theme, syncing with localStorage,
 * and toggling between light and dark themes.
 */
export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>("light");

  // On component mount, check for saved theme preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    // If user has saved 'dark' preference or system prefers dark mode
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Whenever theme changes, update the HTML root class and localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between light and dark theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// -------------------------
// useTheme Hook
// -------------------------

/**
 * Custom hook to access theme context.
 * Throws an error if used outside of ThemeProvider.
 *
 * @returns Current theme and toggle function
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
