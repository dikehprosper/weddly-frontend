/**
 * Service file to handle API requests related to coordinators.
 *
 * Provides reusable functions to interact with the coordinator endpoints
 * of the backend API, including fetching all coordinators and retrieving
 * specific coordinator details by ID.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;
// Base API URL sourced from environment variables for environment flexibility (development, staging, production)

// -------------------------
// Type Definitions
// -------------------------

/**
 * Coordinator interface representing the data structure of a wedding coordinator.
 */
export interface Coordinator {
  _id: string; // Unique identifier of the coordinator
  name: string; // Full name
  location: string; // City or location where the coordinator operates
  price: number; // Coordinator's service price
  profilePhoto: string; // URL to coordinator's profile picture
  bio: string; // Short description or biography
  rating: number; // Average rating (e.g., 4.5 stars)
  reviews: number; // Total number of reviews
  experience: string; // Years or description of experience
  specialty: string; // Area of specialty (e.g., destination weddings, cultural weddings)
  languages: string[]; // Languages spoken by the coordinator
  unavailableDates: string[]; // Array of dates the coordinator is unavailable
}

// -------------------------
// API Requests
// -------------------------

/**
 * Fetch all wedding coordinators from the backend API.
 *
 * @returns Promise resolving to an array of Coordinator objects.
 * @throws Error if the API call fails.
 */
export const getCoordinators = async (): Promise<Coordinator[]> => {
  const res = await fetch(`${BASE_URL}/api/coordinators`);

  if (!res.ok) throw new Error("Failed to fetch coordinators");

  const data = await res.json();
  console.log(data, "coordinators fetched");

  return data;
};

/**
 * Fetch a single coordinator's details using their unique ID.
 *
 * @param id - Unique identifier of the coordinator
 * @returns Promise resolving to a single Coordinator object.
 * @throws Error if the API call fails.
 */
export const getSingleCoordinator = async (
  id: string
): Promise<Coordinator> => {
  const res = await fetch(`${BASE_URL}/api/coordinators/${id}`);

  if (!res.ok) throw new Error("Failed to fetch coordinator");

  return res.json();
};
