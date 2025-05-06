import React from "react";
import { useNavigate } from "react-router"; 

const NoData = (props) => {
  const navigate = useNavigate(); 

  return (
    <div className="w-full h-full text-white p-4 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center p-6 shadow-lg">
        <img
          src="../src/assets/noDataFound.png"
          alt="No video"
          className="w-24 h-24 mb-4 filter invert"
        />

        <p className="font-semibold text-xl mb-2 text-center">{props.header}</p>
        <p className="text-sm text-gray-300 mb-6 text-center">
          {props.title}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-5 py-1 cursor-pointer bg-white text-gray-900 rounded-md hover:bg-gray-200 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NoData;
