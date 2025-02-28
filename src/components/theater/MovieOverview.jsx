import React from "react";

import { cast } from "./cast";

function MovieOverview() {
  return (
    <div className="mt-10 px-5  md:flex justify-evenly bg-white p-4 py-6">
      <div className="border border-gray-300 rounded-2xl flex px-4 py-2 items-center gap-10 ">
        <div className="text-gray-700">
          <p className="md:text-3xl text-xl font-semibold text-black">Officer on duty </p>
          <p className="md:text-base text-xs">Malayalm</p>
          <div className="flex md:text-base text-xs gap-3 my-2">
            <p>2h45m</p>
            <p>U/A</p>
          </div>
          <p className="w-64 text-justify md:text-sm text-xs">
            Harishankar, a demoted Circle Inspector, takes on a fake gold
            jewellery case that spirals into a deadly game with vengeful
            criminals.
          </p>
        </div>
        <div>
          <img
            className="w-32"
            src="https://assetscdn1.paytm.com/images/cinema/_Officer-on-duty--600X800-d5fccfb0-cc2b-11ef-a259-4b3c6d26f4a9.jpg?format=webp&imwidth=576"
            alt=""
          />
        </div>
      </div>
      <div >
        <p className="text-xl md:mt-0 mt-5 font-semibold">cast and crew</p>
        <div className="flex gap-4 flex-wrap mt-6">
          {cast?.map((item) => (
            <div className="text-xs  text-gray-700 flex flex-col items-center">
              <img
                className="w-16 mt-2 rounded-full h-16"
                src={item?.image}
                alt=""
              />
              <p className="mt-2">{item?.name}</p>
              <p>{item?.destination}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieOverview;
