/**
 * Service file to handle API requests related to bookings.
 *
 * This service abstracts HTTP requests for booking-related operations,
 * providing a clean, reusable API layer for creating bookings.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;
// Uses environment variable to dynamically target dev, staging, or production environments

// -------------------------
// Booking Type Definition
// -------------------------

/**
 * Booking interface defining the required structure of booking data.
 */
export interface Booking {
  coordinatorId: string; // ID of the coordinator being booked
  name: string; // Name of the client making the booking
  email: string; // Contact email of the client
  weddingDate: string; // Desired wedding date
  guestNumber: number; // Number of guests expected
}

// -------------------------
// Create a New Booking
// -------------------------

/**
 * Sends a POST request to create a new booking for a wedding coordinator.
 *
 * @param data - Booking details provided by the client
 * @returns Promise resolving with the booking confirmation response from the backend API
 * @throws Error if the request fails or the server returns an error status
 */
export const createBooking = async (data: Booking): Promise<unknown> => {
  const response = await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Throw error if booking creation fails
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create booking");
  }

  // Return response if successful
  return response.json();
};
