function ShimmerCard() {
  return (
    <div className=" flex-shrink-0 w-80 my-10 animate-pulse bg-gray-800 rounded-lg">
      <div className="w-full h-60 bg-gray-700 rounded-tr-lg rounded-tl-lg"></div>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-4 bg-gray-600 w-1/2 rounded"></div>
          <div className="h-4 bg-gray-600 w-6 rounded"></div>
        </div>
        <div className="flex mb-4">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full ml-4"></div>
        </div>
        <div className="h-3 bg-gray-600 w-full rounded mb-2"></div>
        <div className="h-3 bg-gray-600 w-3/4 rounded"></div>
      </div>
    </div>
  );
}

export default ShimmerCard;
