import {useDispatch} from "react-redux";

function Counter() {

  const dispatch = useDispatch();

  return (
    <>
    <button type="button"
      onClick={()=>dispatch({type:"connect/increment"})}
    >증가</button>
    <button type="button"
      onClick={()=>dispatch({type:"connect/decrement"})}
    >감소</button>
    </>
  );
};

export default Counter;