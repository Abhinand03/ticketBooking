import React from "react";
import { NavLink } from "react-router-dom";

function TheaterList({name}) {
  const showTime=['1.00pm','4.30pm','6.30pm']
  return (
    <div className="flex gap-20 justify-center mt-10 ">
      <div className=" flex bg-white px-6 py-8 md:gap-20 gap-4">
        <div>
          <p className="md:text-xl  text-sm font-semibold mb-2">{name}</p>
          <NavLink to={'https://www.google.com/maps'} target="blank" className='border text-sm py-1  border-gray-700 rounded-xl px-6 text-gray-700'>
            Direction
          </NavLink>
        </div>
        <div>
          <div className="flex gap-5 ">
            {
              showTime.map((item)=>(
            <NavLink key={item} to={'/select-ticket'} className="text-green-700 font-bold md:text-lg text-sm border md:px-4 px-2 py-2 rounded-lg ">
              {item}
            </NavLink>

              ))
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterList;
