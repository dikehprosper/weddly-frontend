"use client";

/**
 * Modal component for displaying booking response messages.
 * Dynamically shows success or error messages based on booking outcomes.
 * Includes actions to acknowledge success or retry/cancel on error.
 */

interface ResponseBookingModalProps {
  show: string; // Message to display in the modal (empty string means hidden)
  onErrorConfirm: () => void; // Callback for error confirmation (close modal)
  onSuccessConfirm: () => void; // Callback for success confirmation (close modal and trigger any post-success actions)
}

const ResponseBookingModal: React.FC<ResponseBookingModalProps> = ({
  show,
  onSuccessConfirm,
  onErrorConfirm,
}) => {
  return (
    show !== "" && (
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
          show !== "" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Modal Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            show !== "" ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Modal Content */}
        <div
          className={`relative bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full space-y-4 z-50 shadow-lg mx-4 transform transition-all duration-300 ${
            show !== "" ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Dynamic message based on booking result */}
          <p className='text-lg font-semibold text-center text-gray-900 dark:text-white'>
            {show}
          </p>

          {/* Action buttons: success shows "Done", error shows "Close" */}
          <div className='flex flex-col gap-4'>
            {show.startsWith("You have successfully booked") ? (
              <button
                className='px-4 py-2 rounded-md bg-green-500 text-white w-full'
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  onSuccessConfirm(); // Handle success acknowledgment
                }}
              >
                Done
              </button>
            ) : (
              <button
                className='px-4 py-2 rounded-md bg-red-500 text-white w-full'
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  onErrorConfirm(); // Handle error acknowledgment
                }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ResponseBookingModal;
