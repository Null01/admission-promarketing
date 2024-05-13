import React from 'react';

export const LoadingSkeleton = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-20 h-20 rounded-full bg-gray-200 animate-spin scale-100 opacity-75">
        <div className="w-10 h-10 rounded-full bg-gray-400 absolute animate-ping"></div>
      </div>
    </div>
  );
};
