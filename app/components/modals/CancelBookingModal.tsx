"use client";

/**
 * CancelBookingModal component
 *
 * This modal prompts the user to confirm or dismiss the cancellation of a booking.
 * Designed to prevent accidental form cancellations with clear affirmative and dismissal actions.
 */

interface CancelBookingModalProps {
  show: boolean; // Boolean flag to control the modal visibility
  onConfirm: () => void; // Callback when user confirms cancellation
  onDismiss: () => void; // Callback when user dismisses/cancels the modal
}

const CancelBookingModal: React.FC<CancelBookingModalProps> = ({
  show,
  onConfirm,
  onDismiss,
}) => {
  return (
    show && (
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Modal background overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Modal box */}
        <div
          className={`relative bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full space-y-4 z-50 shadow-lg mx-4 transform transition-all duration-300 ${
            show ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Modal message */}
          <p className='text-lg font-semibold text-center text-gray-900 dark:text-white'>
            Are you sure you want to cancel?
          </p>

          {/* Modal action buttons */}
          <div className='flex flex-col gap-4'>
            {/* Confirm Cancellation Button */}
            <button
              className='px-4 py-2 rounded-md bg-red-500 text-white w-full'
              type='button'
              onClick={(e) => {
                e.preventDefault();
                onConfirm();
              }}
            >
              Yes, Cancel
            </button>

            {/* Dismiss Modal Button */}
            <button
              className='px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white w-full'
              type='button'
              onClick={(e) => {
                e.preventDefault();
                onDismiss();
              }}
            >
              No, Go Back
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CancelBookingModal;
