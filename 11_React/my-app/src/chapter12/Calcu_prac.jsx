import { useState } from "react";
import Coun_prac from "./Coun_prac";

function Calcu_prac() {
  const [num, setNum] = useState(1);

  const handlenumChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
    단위 변환 계산기
    <input type="number" value={num} onChange={handlenumChange}/>
    <hr />
    
    <Coun_prac number = {num} setNumber = {setNum} />
    <br />
    <Coun_prac number = {num} setNumber = {setNum} />

    </>
  );
};

export default Calcu_prac;