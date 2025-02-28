import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SeatButton from "../common/SeatButton";
import { totalAmount, totalSeats } from "../../redux/amountSlice";

function SelectSeat({ title, seats, price, seatSection }) {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const dispatch = useDispatch();
  const totalSeat = useSelector((state) => state?.amount);

  

  const totalSelectedSeats = totalSeat?.totalSeats;

  //function for select or deslect the seats
  const handleSetSeat = (seat) => {
    setSelectedSeat((prevValue) => {
      if (totalSelectedSeats >= 8 && !prevValue.includes(seat)) {
        toast.error("You can select a maximum of 8 seats");
        return prevValue;
      }

      const updateSeat = prevValue?.includes(seat)
        ? selectedSeat.filter((s) => s !== seat)
        : [...prevValue, seat];

      const total = {
        total: updateSeat.length * price,
        seat: seatSection,
        seatCount: updateSeat.length,
        seatId:updateSeat
      };
      dispatch(totalAmount(total));
      dispatch(totalSeats());

      return updateSeat;
    });
  };

  useEffect(() => {

   }, []);
  return (
    <div className="mt-10">
      <p className="text-gray-700 text-sm my-2">{title}</p>
      <div className="grid grid-cols-10 gap-4">
        {seats?.map((item) => (
          <SeatButton
            onclick={() => handleSetSeat(item.seatId)}
            className={
              selectedSeat.includes(item?.seatId)
                ? "bg-custum_blue text-white"
                : "bg-gray-200 "
            }
          >
            {item?.seatId}
          </SeatButton>
        ))}
      </div>
    </div>
  );
}

export default SelectSeat;
