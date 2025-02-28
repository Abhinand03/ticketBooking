import { createSlice } from "@reduxjs/toolkit";
const Initial_State = {
  platinum: { amount: 0, totalSeat: 0,seatId:[] },
  gold: { amount: 0, totalSeat: 0 ,seatId:[]},
  silver: { amount: 0, totalSeat: 0,seatId:[] },
  totalSeats: 0,
};

const amountSlice = createSlice({
  name: "amount",
  initialState: Initial_State,
  reducers: {
    totalAmount: (state, action) => {
      console.log("actio", action);
      if (action.payload.seat == "Platinum") {
        state.platinum.amount = action.payload.total;
        state.platinum.totalSeat = action.payload.seatCount
        state.platinum.seatId=action.payload.seatId
       
      } else if (action.payload.seat == "Gold") {
        state.gold.amount = action.payload.total
          state.gold.totalSeat = action.payload.seatCount
          state.gold.seatId=action.payload.seatId

      } else {
        state.silver.amount = action.payload.total;
        state.silver.totalSeat = action.payload.seatCount
        state.silver.seatId=action.payload.seatId

      }
    },
    totalSeats: (state) => {
      state.totalSeats =
        state.gold.totalSeat +
        state.platinum.totalSeat +
        state.silver.totalSeat;
    },
  },
});

export const { totalAmount,totalSeats } = amountSlice.actions;
export default amountSlice.reducer;
