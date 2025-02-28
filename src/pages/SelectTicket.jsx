import React from "react";
import { useSelector } from "react-redux";

import SelectSeat from "../components/seats/SelectSeat";
import ConfirmAlert from "../components/seats/ConfirmAlert";
import {  goldSeats,platinumSeats,silverSeats} from "../components/seats/Seats";

function SelectTicket() {
  const ticket = useSelector((state) => state?.amount);

  return (
    <>
      <div className="md:flex justify-center  gap-7 mt-20">
        <div className="bg-white p-8 md:w-[60%]">
          <p className="text-gray-700 font-semibold text-2xl">
            Movie Name: <span className="text-black">Oficer duty</span>
          </p>
          <SelectSeat
            seatSection={"Platinum"}
            title={" Rs.200 Platinum"}
            price={200}
            seats={platinumSeats}
          />
          <SelectSeat
            seatSection={"Gold"}
            title={" Rs.150 Gold"}
            price={150}
            seats={goldSeats}
          />
          <SelectSeat
            seatSection={"Silver"}
            title={"Rs.100 Silver"}
            price={100}
            seats={silverSeats}
          />
          <div className="flex justify-center mt-10">
            <img
              src="https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white p-6 md:w-[30%] h-96 shadow-md rounded-lg">
          <p className="font-semibold text-2xl mb-4">Payment Summary</p>

          <div className="grid gap-3">
            <div className="flex justify-between">
              <span>Platinum Seats:</span>
              <span className="text-right">
                {ticket?.platinum?.totalSeat || 0} x ₹200 = ₹
                {ticket?.platinum?.amount || 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Gold Seats:</span>
              <span className="text-right">
                {ticket?.gold?.totalSeat || 0} x ₹150 = ₹
                {ticket?.gold?.amount || 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Silver Seats:</span>
              <span className="text-right">
                {ticket?.silver?.totalSeat || 0} x ₹100 = ₹
                {ticket?.silver?.amount || 0}
              </span>
            </div>
          </div>

          <hr className="my-3 border-gray-300" />

          <div className="flex justify-between font-bold text-lg mt-8">
            <span>Grand Total:</span>
            <span>
              ₹
              {(ticket?.platinum?.amount || 0) +
                (ticket?.gold?.amount || 0) +
                (ticket?.silver?.amount || 0)}
            </span>
          </div>

          <div className="mt-5">
            <ConfirmAlert ticket={ticket} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectTicket;
