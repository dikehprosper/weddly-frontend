/**
 * Coordinator Type Definition
 * Describes the properties associated with each coordinator.
 */
import {Coordinator} from "@/components/utils/services/coordinatorService";
import StarRating from "@/components/utils/starRating";

/**
 * SingleCoordinatorCard Component
 * @description Displays a single coordinator's key details, including profile photo,
 * name, location, price, and more, along with a Book Now button.
 *
 * @param coordinator - A single coordinator object with key display data
 * @param onBookNow - Function called when Book Now button is clicked
 */
const SingleCoordinatorCard: React.FC<{
  coordinator: Coordinator;
  onBookNow: () => void;
}> = ({coordinator, onBookNow}) => {
  return (
    // Main card container with light/dark mode and responsiveness
    <div className='bg-white/90 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col max-w-md mx-auto'>
      {/* Coordinator's profile picture */}
      <img
        src={coordinator.profilePhoto}
        alt={coordinator.name}
        className='w-full h-48 object-cover'
      />

      {/* Card content section */}
      <div className='p-5 flex-1 flex flex-col justify-between'>
        <div>
          {/* Coordinator's name */}
          <h2 className='justify-center text-xl font-semibold mb-1 text-gray-700 dark:text-gray-300 flex'>
            {coordinator.name}
          </h2>

          {/* Coordinator's bio/short description */}
          <div className='flex justify-center items-center w-full py-3'>
            <span className='text-gray-900 dark:text-white text-center'>
              {coordinator.bio}
            </span>
          </div>

          {/* Location */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Location:
            </span>
            <span className='text-gray-900 dark:text-white'>
              {coordinator.location}
            </span>
          </div>

          {/* Rating with star component */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Rating:
            </span>
            <div className='flex items-center space-x-2'>
              {/* StarRating component */}
              <StarRating rating={coordinator.rating} />
              <span className='text-gray-900 dark:text-white'>
                {coordinator.rating}
              </span>
            </div>
          </div>

          {/* Number of Reviews */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Reviews:
            </span>
            <div className='flex items-center space-x-2'>
              <span className='text-gray-900 dark:text-white'>
                {coordinator.reviews}
              </span>
            </div>
          </div>

          {/* Experience Level */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Experience:
            </span>
            <div className='flex items-center space-x-2'>
              <span className='text-gray-900 dark:text-white'>
                {coordinator.experience}
              </span>
            </div>
          </div>

          {/* Specialty */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Specialty:
            </span>
            <div className='flex items-center space-x-2'>
              <span className='text-gray-900 dark:text-white'>
                {coordinator.specialty}
              </span>
            </div>
          </div>

          {/* Languages spoken */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Languages:
            </span>
            <div className='flex items-center space-x-2'>
              <span className='text-gray-900 dark:text-white'>
                {/* Handles both string and array */}
                {Array.isArray(coordinator.languages)
                  ? coordinator.languages.join(", ")
                  : coordinator.languages}
              </span>
            </div>
          </div>

          {/* Unavailable dates mapped */}
          <div className='flex justify-between w-full py-1 flex-wrap'>
            <span className='font-semibold text-gray-700 dark:text-gray-300 mb-2'>
              Unavailable Dates:
            </span>
            <div className='flex flex-wrap justify-end align-center gap-2 flex-1'>
              {coordinator.unavailableDates.map(
                (date: string, index: number) => {
                  // Format dates to readable string like "Jul 15, 2025"
                  const formattedDate = new Date(date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  );
                  return (
                    <span
                      key={index}
                      className='bg-red-100 flex items-center justify-center text-red-700 dark:bg-red-800 dark:text-red-200 px-1 py-1 rounded-full text-[10px] font-medium leading-none h-fit'
                    >
                      {formattedDate}
                    </span>
                  );
                }
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className='flex justify-between w-full py-1'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Price:
            </span>
            <span className='text-gray-900 dark:text-white text-semi-bold'>
              ₦{coordinator.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Call-to-action Button */}
        <button
          onClick={onBookNow}
          className='cursor-pointer mt-8 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full'
        >
          Book {coordinator.name}
        </button>
      </div>
    </div>
  );
};

export default SingleCoordinatorCard;
