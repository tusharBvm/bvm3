import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  // actions
  name: "counter",
  initialState: {
    value: 0,
  },

  // reducers
  reducers: {
    increment: (state) => {

      state.value += 1;
    //  console.log("state=====>",state.value);

    },
    decrement: (state) => {
        
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
