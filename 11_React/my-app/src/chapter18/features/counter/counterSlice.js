import { createSlice } from "@reduxjs/toolkit";
// 3. Redux State Slice 만들기(features/counter/counterSlice.js)

// state 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용 가능
// 주로 객체 형태로 사용함
// 가독성도 좋고 state 관리(추가 및 변경)가 편함
const initialState = {
  value: 0,
  count: 1,
};

// 전역 state 만드는 방법
// useState()랑 비슷한 역할을 하는데 Redux에서는 state 하나를 slice라고 부름 
// createSlice() 함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
const counterSlice = createSlice(
  {
    name: 'counter', //state 이름(추가로 action 타입을 만드는데도 쓰임)
    initialState, // state 초기값(위에서 객체 형태로 정의)
    // 생략가능하게 하려고 속성명이랑 일부로 같게 정의함
    reducers: { //reducer들을 정의
      increment:(state) => { // 첫번째 파라미터 : 현재 state를 받아옴(실제로는 state의 복사본)
        // 원래의 react 에서는 직접복사본을 만들어서 변경을 한후 set함수에 넣어주는 방식을 했었는데
        // redux 에서는 그것이 생략하고 직접변경이 가능하도록 함. 
        state.value += 1; //배열 또는 객체의 경우에도 직접 수정하는 형태로 작성 가능!!
        // 어떻게? Immer 라이브러리 내장되어 불변성 관리를 해주기 때문
        // 실제로는 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 그 복사본을 변경하고
        // 새로운 상태로 반환함
      },
      decrement:(state) => {
        state.value -= 1; 
      },
    }
  }
);

console.log(counterSlice);

export default counterSlice.reducer; // 위에서 정의한 리듀서 함수들 