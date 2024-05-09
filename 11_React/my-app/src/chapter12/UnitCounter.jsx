import { useState } from "react";

function UnitCounter(props) {
  const {length,onLengthChange} = props

  // Local State 실습
  // 컴포넌트마다 각각 개별적인 상태를 갖게 됨
  const [localLength, setLocalLength] = useState(1);

  return (
    <>
      {/* Local State
      <button type="button" onClick={()=>{
        setLocalLength(Math.max(localLength-1,0));
        // set함수가 비동기함수라 실행시킨다음에 바로 넘어가기에 값을 확인하려면 렌더링 후의 값을 확인해야함 useref쓴거처럼
        console.log(localLength);
      }}>-</button>
        {localLength}
      <button type="button" onClick={()=>{setLocalLength(localLength+1);
        console.log(localLength);
      }}>+</button> */}

      {/* Shared State */}
      <button type="button" onClick={()=>{
        onLengthChange(Math.max(length-1,0));
        // console.log(length);
      }}>-</button>
        {length}
      <button type="button" onClick={()=>{onLengthChange(length+1);
        // console.log(length);
      }}>+</button>
    </>
  );
};

export default UnitCounter;