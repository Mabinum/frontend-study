import { useState } from "react";
import { addToProductList, selectnowState } from "./productSlice";
import {useDispatch, useSelector} from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const nowStates = useSelector(selectnowState);
  // ???  selector로 지정해줘야 하는 이유?

  const [name, setName] = useState('');

  return (
    <>
      <p>
        상품 추가:
        <input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      <button type="button"
        onClick={()=>dispatch(addToProductList(name))}
      >
        추가
      </button>
      </p>
      <p>상품 목록</p>
      <ul>
        {nowStates.map((nowState)=><li>{nowState}</li>)}
      </ul>
    </>
  );
};

export default ProductList;