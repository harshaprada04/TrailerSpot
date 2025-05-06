import React from "react";

const ShimmerVideoPlayer = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white animate-pulse p-4 overflow-y-auto">
      <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden">
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="w-32 h-8 bg-gray-600 rounded"></div>
          <div className="w-24 h-6 bg-gray-600 rounded"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-lg w-20 h-12 flex items-center justify-center">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white transform rotate-90"></div>
        </div>
        <div className="absolute bottom-4 left-4 w-2/3 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerVideoPlayer;
