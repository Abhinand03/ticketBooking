import totalAmount  from "./amountSlice";

import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        amount:totalAmount
    }
})

export default store