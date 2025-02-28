import React from "react";
import { NavLink } from "react-router-dom";

function MoviesCard() {
  return (
    <div className="border bg-white border-gray-400 rounded-xl py-4 px-4">
      <img
        className="w-56 rounded-xl"
        src="https://assetscdn1.paytm.com/images/cinema/_Officer-on-duty--600X800-d5fccfb0-cc2b-11ef-a259-4b3c6d26f4a9.jpg?format=webp&imwidth=576"
        alt=""
      />
      <p className="text-xl font-semibold mt-2">Officer duty</p>
      <p className="text-base  text-gray-800">comedy/action/drama</p>
      <div className="grid my-2">
        <NavLink to={'/select-theater'} className="border cursor-pointer text-center border-gray-700 rounded-lg hover:bg-gray-700 py-2 hover:text-white px-4">
          Book Now
        </NavLink>
      </div>
    </div>
  );
}

export default MoviesCard;
