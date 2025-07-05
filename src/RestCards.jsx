import React from "react";

const RestCards = () => {
  return (
    <div className="m-2 p-1 hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="border h-72 w-48 rounded overflow-hidden bg-white">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/grqh1zb1kv8uhkmyercb"
          className="h-36 w-full object-cover"
        />
        <div className="p-2">
          <h2 className="font-semibold">Bismillah Biryanis</h2>
          <h4 className="text-sm text-gray-600">
            Biryanis, North Indian, Asian
          </h4>
          <h4 className="text-sm text-yellow-600">4.4 Stars</h4>
          <h4 className="text-sm text-gray-500">37 Minutes</h4>
        </div>
      </div>
    </div>
  );
};

export default RestCards;
