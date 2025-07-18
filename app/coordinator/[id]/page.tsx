"use client";

import Navbar from "@/components/shared/Navbar";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "@/components/utils/hooks/useTheme";
import Footer from "@/components/shared/Footer";
import {
  Coordinator,
  getSingleCoordinator,
} from "@/components/utils/services/coordinatorService";
import {useSearchParams} from "next/navigation";
import SingleCoordinatorCard from "@/components/cards/SingleCoordinatorCard";
import SingleCoordinatorCardForm from "@/components/cards/SingleCoordinatorCardForm";
import CancelBookingModal from "@/components/modals/CancelBookingModal";
import {createBooking} from "@/components/utils/services/bookingService";
import ResponseBookingModal from "@/components/modals/ResponseBookingModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({params}: {params: any}) {
  const {id} = params;

  // Access theme and toggle function from custom hook
  const {theme, toggleTheme} = useTheme();

  // Coordinator data state, initially null before loading
  const [coordinator, setCoordinator] = useState<Coordinator | null>(null);

  // Loading and error states for data fetching
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Next.js search parameters to check for fast render data
  const searchParams = useSearchParams();

  // Control modal visibility states
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState("");

  // Loading state specifically for booking submission
  const [isLoading, setIsLoading] = useState(false);

  // Refs for scrolling to booking form and top of page on mobile devices
  const bookingRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  // Booking form visibility state
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);

  // Show cancel booking confirmation modal
  const handleCancelClick = () => setShowCancelModal(true);

  // Confirm cancellation: hide booking form and modal, scroll to top on small screens
  const confirmCancel = () => {
    setShowBookingForm(false);
    setShowCancelModal(false);

    if (window.innerWidth < 768) {
      topRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  // Dismiss cancel modal without hiding booking form
  const dismissCancel = () => setShowCancelModal(false);

  // Called after successful booking modal confirmation
  const onSuccessConfirm = () => {
    setShowBookingForm(false);
    setShowResponseModal("");
    if (window.innerWidth < 768) {
      topRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  // Called after error modal confirmation
  const onErrorConfirm = () => {
    setShowResponseModal("");
  };

  // Effect to load coordinator data on mount or id change
  useEffect(() => {
    const coordinatorData = searchParams.get("coordinator");
    console.log(coordinatorData, "coordinatorData");
    if (coordinatorData) {
      // Attempt to parse coordinator data passed via URL param for faster render
      try {
        const parsed = JSON.parse(decodeURIComponent(coordinatorData));
        setCoordinator(parsed);
        setLoading(false);
      } catch (err) {
        console.error("Parsing failed, falling back to server fetch:", err);
        fetchFromServer();
      }
    } else {
      // No preloaded data, fetch from server
      fetchFromServer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Fetch coordinator details from backend by id
  const fetchFromServer = async () => {
    setLoading(true);
    try {
      const data = await getSingleCoordinator(params.id);
      setCoordinator(data);
    } catch (err) {
      console.error("Server fetch failed:", err);
      setError("Failed to load coordinator details.");
    } finally {
      setLoading(false);
    }
  };

  // Scroll to booking form on mobile devices when it appears
  useEffect(() => {
    if (showBookingForm && window.innerWidth < 768) {
      bookingRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }, [showBookingForm]);

  // Handles form submission for booking a coordinator
  const handleBookingSubmit = async (bookingData: {
    name: string;
    email: string;
    date: string;
    guestNumber: number;
    coordinatorId: string;
  }) => {
    let message = "";
    setIsLoading(true); // Start loading spinner on form

    try {
      // Prepare payload for backend API
      const payload = {
        ...bookingData,
        weddingDate: bookingData.date,
        guestNumber: bookingData.guestNumber,
      };

      // Call API to create booking
      const response = await createBooking(payload);
      console.log("Booking Successful:", response);
      message = `You have successfully booked ${coordinator?.name}`;
    } catch (err: unknown) {
      console.error("Booking Failed:", err);
      message = "Something went wrong, please try again.";
      if (err instanceof Error) {
        message = err.message;
      }
    } finally {
      // Show response modal with success or error message
      setShowResponseModal(message);
      setIsLoading(false); // Stop loading spinner
    }
  };

  // Render loading or error states before main UI
  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-red-500'>{error}</p>;
  if (!coordinator)
    return <p className='text-center'>Coordinator not found.</p>;

  return (
    <div className='min-h-screen bg-white dark:bg-gray-800 antialiased transition-colors duration-300'>
      {/* Modals for booking cancellation confirmation and booking response */}
      <CancelBookingModal
        show={showCancelModal}
        onConfirm={confirmCancel}
        onDismiss={dismissCancel}
      />
      <ResponseBookingModal
        show={showResponseModal}
        onSuccessConfirm={onSuccessConfirm}
        onErrorConfirm={onErrorConfirm}
      />

      {/* Navigation bar with theme controls */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className='py-22 px-6 max-w-7xl mx-auto'>
        {/* Coordinator details heading, linked to topRef for scrolling */}
        <h2
          className='text-3xl font-bold mb-10 text-center dark:text-white text-gray-900'
          ref={topRef}
        >
          Coordinator Details
        </h2>

        {/* Responsive grid layout adjusts based on booking form visibility */}
        <div
          className={`transition-all duration-500 grid gap-6 ${
            showBookingForm ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* Coordinator card component */}
          <SingleCoordinatorCard
            coordinator={coordinator}
            onBookNow={() => setShowBookingForm(true)}
          />

          {/* Conditional rendering of booking form */}
          {showBookingForm && (
            <div ref={bookingRef}>
              <SingleCoordinatorCardForm
                coordinator={coordinator}
                onCancel={handleCancelClick}
                onSubmit={handleBookingSubmit}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
