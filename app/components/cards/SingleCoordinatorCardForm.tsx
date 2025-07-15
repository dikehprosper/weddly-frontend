/**
 * Coordinator Type Definition
 * Describes the properties associated with each coordinator.
 */
import {Coordinator} from "@/components/utils/services/coordinatorService";

/**
 * SingleCoordinatorCardForm Component
 *
 * Renders a booking form for a selected coordinator with validation logic for
 * name, email, date, and guest number. Handles form submission and cancellation.
 */

import React, {useState, useEffect} from "react";

// Component Props definition
const SingleCoordinatorCardForm: React.FC<{
  coordinator: Coordinator;
  onCancel: () => void;
  onSubmit: (data: {
    name: string;
    email: string;
    date: string;
    guestNumber: number;
    coordinatorId: string;
  }) => void;
  isLoading: boolean;
}> = ({coordinator, onCancel, onSubmit, isLoading}) => {
  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guestNumber, setGuestNumber] = useState("");

  // Error states for each input
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [nameError, setNameError] = useState("");
  const [guestError, setGuestError] = useState("");

  // Coordinator's unavailable booking dates
  const unavailableDates = coordinator.unavailableDates || [];

  // Makes sure the page starts at the top onload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Form Validation Logic
   * Checks if all form fields are properly filled out and valid.
   * Shows appropriate error messages for each invalid input.
   */
  const validateForm = () => {
    console.log("iiiiiiiiiiii"); // debug log
    let isValid = true;

    // Validate Name
    if (!name.trim()) {
      setNameError("Name is required.");
      isValid = false;
    } else if (name.trim().length < 2) {
      setNameError("Please enter a valid name.");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate Date (should be a future date and not in unavailable dates)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize today's date

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    if (!date) {
      setDateError("Please select a wedding date.");
      isValid = false;
    } else if (selectedDate <= today) {
      setDateError("You cannot select today or a past date.");
      isValid = false;
    } else if (unavailableDates.includes(date)) {
      setDateError(`Coordinator is unavailable on ${date}`);
      isValid = false;
    } else {
      setDateError("");
    }

    // Validate Guest Number (must be a positive number)
    const numericGuestNumber = Number(guestNumber);

    if (!guestNumber.trim()) {
      setGuestError("Guest number is required.");
      isValid = false;
    } else if (isNaN(numericGuestNumber) || numericGuestNumber <= 0) {
      setGuestError("Please enter a valid guest number.");
      isValid = false;
    } else {
      setGuestError("");
    }

    // Submit booking data if valid
    if (isValid) {
      const bookingData = {
        name,
        email,
        date,
        guestNumber: numericGuestNumber,
        coordinatorId: coordinator._id,
      };
      console.log(bookingData);
      onSubmit(bookingData);
    }
  };

  return (
    <div className='bg-white/90 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col max-w-md mx-auto p-6'>
      <h3 className='text-2xl font-semibold mb-4 dark:text-white text-gray-900 text-center'>
        Book {coordinator.name}
      </h3>

      <form
        className='space-y-8 pt-10'
        onSubmit={(e) => {
          e.preventDefault();
          validateForm();
        }}
      >
        <div className='relative'>
          {nameError && (
            <p className='text-red-500 text-sm absolute right-[0px] top-[-20px]'>
              * {nameError}
            </p>
          )}
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 rounded-md border border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-gray-900 dark:text-white'
          />
        </div>

        <div className='relative'>
          {emailError && (
            <p className='text-red-500 text-sm absolute right-[0px] top-[-20px]'>
              * {emailError}
            </p>
          )}
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 rounded-md border border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-dark dark:text-white'
          />
        </div>

        <div className='relative'>
          {dateError && (
            <p className='text-red-500 text-sm absolute right-[0px] top-[-20px]'>
              * {dateError}
            </p>
          )}
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-dark dark:text-white'
          />
        </div>

        <div className='relative'>
          {guestError && (
            <p className='text-red-500 text-sm absolute right-[0px] top-[-20px]'>
              * {guestError}
            </p>
          )}
          <input
            type='string'
            placeholder='Guest Number'
            value={guestNumber}
            onChange={(e) => setGuestNumber(e.target.value)}
            className='w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-gray-900 dark:text-white'
          />
        </div>

        <div className='flex w-full gap-4 mt-10'>
          <button
            disabled={isLoading}
            type='button'
            onClick={(e) => {
              e.preventDefault();
              onCancel();
            }}
            className='w-1/2 py-2 rounded-md dark:text-white text-gray-700 border border-black dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer'
          >
            Cancel
          </button>

          <button
            disabled={isLoading}
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              validateForm();
            }}
            className='cursor-pointer w-1/2 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition'
          >
            {isLoading ? "Proceeding..." : "Proceed"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default SingleCoordinatorCardForm;
