import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  productList: [

  ]
};

const productSlice = createSlice(
  {
    name : 'product',
    initialState,
    reducers:{
      addToProductList : (state,action) => {
        console.log(action);
        state.productList.push(action.payload);
      }
    }
  }
); 

console.log(productSlice.actions);

export const selectnowState = state => state.product.productList;
export const {addToProductList} = productSlice.actions;

export default productSlice.reducer;