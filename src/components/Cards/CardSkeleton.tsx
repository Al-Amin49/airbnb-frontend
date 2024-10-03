import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg border max-w-md">
      <div className="bg-gray-300 h-[300px] rounded-lg"></div>
      <div className="p-4 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
