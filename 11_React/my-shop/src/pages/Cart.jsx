import { Table } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
import { decreaseCount, increaseCount, selectCartList } from "../features/cart/cartSlice";
import { useState } from "react";

function Cart() {
  const cartList = useSelector(selectCartList);
  console.log(cartList);
  const formatter = new Intl.NumberFormat('ko-KR',{style: 'currency', currency: 'KRW'});
  const dispatch = useDispatch();
  
  const [value, setvalue] = useState('');

  const handleUP = () => {
    setvalue(value++);
  }; 
  const handleDOWN = () => {
    setvalue(value--);
  }; 

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz : cartList 반복 렌더링 및 데이터 바인딩 */}
          {cartList.map((list,index)=>{
            return (
              // <tr key={index}> or
              <tr key={list.id}>
                <td>{index+1}</td>
                <td>{list.title}</td>
                <td>
                  <button type="button" onClick={()=>dispatch(increaseCount(list.id))}>+</button>
                  {list.count}
                  <button type="button" onClick={()=>dispatch(decreaseCount(list.id))}>-</button>
                </td>
                <td>{formatter.format(list.price * list.count)}원</td>
              </tr>
            );
          })}
        </tbody>
      </Table>  
    </>
  );
};

export default Cart;