import { useState } from "react";

function Coun_prac(props) {
  // const [number, setNumber] = useState(1);
  const { number , setNumber } = props;

  const handleMinusChange = () => {
    setNumber(Math.max(number-1,0));
  };

  const handlePlusChange = () => {
    setNumber(number+1);
  };


  return (
    <>
    {/* Local state */}
    <button type="button" onClick={handleMinusChange}>-</button>
    {number}
    <button type="button" onClick={handlePlusChange}>+</button>
    </>
  );
};

export default Coun_prac;