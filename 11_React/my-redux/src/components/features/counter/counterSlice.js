import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  number : 1,
  upcount : 2,
  downcount : 1
};

const counterSlice = createSlice(
  {
    name : 'connect',
    initialState,
    reducers:{
      increment : (state) => {
        state.number += 2;
      },
      decrement : (state) => {
        state.number -= 1;
      }
    }
  }
);

export default counterSlice.reducer;