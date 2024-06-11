import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList : [],
  selectedProduct: null,
};


// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    getAllProducts: (state,action) => {
      // console.log(action.payload);
      state.productList = action.payload;
    },
    // 리듀서 함수
    getSelectedProduct: (state,action) => {
      console.log(action.payload);
      state.selectedProduct = action.payload;
    },
  }
});

// 액션을 내보낼 때의 함수라 위의 리듀서 함수랑은 다른 개념임
// function getSelectedProduct(data) {
//   return {
//     type: "product/getSelectedProduct",
//     payload: any,
//   };
// }

// 액션 생성 함수
export const {getAllProducts} = productSlice.actions;
export const {getSelectedProduct} = productSlice.actions;

// 선택자 함수
export const selectProductList = (state) => state.product.productList;
export const selectselectedProduct = (state) => state.product.selectedProduct;
// 리듀서 함수들
export default productSlice.reducer;
