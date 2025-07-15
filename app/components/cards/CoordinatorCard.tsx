import Link from "next/link";

/**
 * Coordinator Type Definition
 * Describes the properties associated with each coordinator.
 */
import {Coordinator} from "@/components/utils/services/coordinatorService";

/**
 * CoordinatorCard Component
 * @description Displays a summarized card view of a coordinator, showing photo,
 * name, location, price, and a link to a detailed page.
 *
 * @param coordinator - Coordinator data to render inside the card.
 */
const CoordinatorCard: React.FC<{coordinator: Coordinator}> = ({
  coordinator,
}) => {
  return (
    // Outer container for the coordinator card with styling for light/dark mode, rounded corners and hover effect
    <div className='bg-white/90 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col'>
      {/* Coordinator's profile image */}
      <img
        src={coordinator.profilePhoto}
        alt={coordinator.name}
        className='w-full h-48 object-cover'
      />

      {/* Main content container */}
      <div className='p-5 flex-1 flex flex-col justify-between'>
        <div>
          {/* Coordinator's name displayed prominently */}
          <h2 className='justify-center text-xl font-semibold mb-1 text-gray-700 dark:text-gray-300 flex'>
            {coordinator.name}
          </h2>

          {/* Coordinator's location */}
          <div className='flex justify-between w-full py-3'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Location:
            </span>
            <span className='text-gray-900 dark:text-white'>
              {coordinator.location}
            </span>
          </div>

          {/* Coordinator's pricing information */}
          <div className='flex justify-between w-full'>
            <span className='font-semibold text-gray-700 dark:text-gray-300'>
              Price:
            </span>
            <span className='text-gray-900 dark:text-white'>
              ₦{coordinator.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Link to detailed coordinator page */}
        <Link
          href={{
            pathname: `/coordinator/${coordinator._id}`, // dynamic routing to specific coordinator page
            query: {
              // passing coordinator data through query string (stringified)
              coordinator: encodeURIComponent(JSON.stringify(coordinator)),
            },
          }}
          passHref
        >
          {/* Button to view more details about coordinator */}
          <button className='cursor-pointer mt-8 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full'>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoordinatorCard;
