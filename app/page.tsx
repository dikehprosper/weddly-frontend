"use client";

import Navbar from "@/components/shared/Navbar";
import {useEffect, useState} from "react";
import {useTheme} from "@/components/utils/hooks/useTheme";
import Footer from "@/components/shared/Footer";
import CoordinatorCard from "@/components/cards/CoordinatorCard";
import {
  Coordinator,
  getCoordinators,
} from "@/components/utils/services/coordinatorService";

export default function ClientHome() {
  // Access current theme and function to toggle between light/dark mode
  const {theme, toggleTheme} = useTheme();

  // State to hold the list of coordinators fetched from API
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);

  // State for the search input value
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Loading and error states to manage UI feedback during API call
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch coordinators once on component mount
  useEffect(() => {
    const fetchCoordinators = async () => {
      setLoading(true); // Show loading indicator
      setError(null); // Clear any previous errors
      try {
        const data = await getCoordinators(); // API call
        setCoordinators(data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching coordinators:", err);
        setError("Failed to load coordinators."); // Show error message
      } finally {
        setLoading(false); // Hide loading indicator regardless of outcome
      }
    };

    fetchCoordinators();
  }, []);

  // Filter coordinators by name or location matching the search term (case-insensitive)
  const filteredCoordinators = coordinators.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.location &&
        c.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className='min-h-screen bg-white dark:bg-gray-800 antialiased transition-colors duration-300'>
      {/* Navigation bar with theme toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Coordinators listing section */}
      <section className='py-22 px-6 max-w-7xl mx-auto '>
        <h2 className='text-3xl font-bold mb-10 text-center dark:text-white text-gray-900'>
          Wedding Coordinators
        </h2>

        {/* Search input to filter coordinators */}
        <div className='flex justify-center mb-10'>
          <input
            type='text'
            placeholder='Search by name or location...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-purple-00'
          />
        </div>

        {/* Loading state feedback */}
        {loading && (
          <p className='text-center text-gray-600'>Loading coordinators...</p>
        )}

        {/* Error message display */}
        {error && <p className='text-center text-red-500'>{error}</p>}

        {/* Display coordinator cards or no results message */}
        {!loading && !error && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-10'>
            {filteredCoordinators.length > 0 ? (
              filteredCoordinators.map((coordinator) => (
                <CoordinatorCard
                  key={coordinator._id}
                  coordinator={coordinator}
                />
              ))
            ) : (
              <p className='text-center text-gray-600 col-span-full'>
                No coordinators match your search.
              </p>
            )}
          </div>
        )}
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
