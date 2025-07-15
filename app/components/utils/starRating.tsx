"use client";

import React from "react";

// Props interface to accept a numeric rating value
interface StarRatingProps {
  rating: number;
}

// StarRating component to visually display star ratings (including half-stars)
const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  return (
    <div className='flex items-center space-x-1'>
      {/* Render 5 stars */}
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        // Determine if the star should be fully filled
        const isFull = rating >= starValue;

        // Determine if the star should be half-filled
        const isHalf = rating >= starValue - 0.5 && rating < starValue;

        return (
          <svg
            key={index}
            xmlns='http://www.w3.org/2000/svg'
            fill={
              isFull ? "#FFD700" : isHalf ? "url(#halfGradient)" : "#d1d5db"
            } // Gold for full, gradient for half, gray for empty
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            {/* Gradient definition for half-filled stars */}
            <defs>
              <linearGradient id='halfGradient'>
                <stop offset='50%' stopColor='#FFD700' />
                <stop offset='50%' stopColor='#d1d5db' />
              </linearGradient>
            </defs>

            {/* Star shape */}
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 17.27L18.18 21 16.54 13.97 
              22 9.24l-7.19-.62L12 2 9.19 8.62 
              2 9.24l5.46 4.73L5.82 21z'
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
