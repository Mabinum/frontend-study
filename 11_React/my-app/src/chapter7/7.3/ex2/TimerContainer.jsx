import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);

  const handleTimer = () => {
    setShowTimer(!showTimer);

  };

  return (
    <>
      {showTimer ? <Timer showTimer = {showTimer} setShowTimer = {setShowTimer}/> : null}
      <button type="button" onClick={handleTimer}> on/off 토글</button>
    </>
  );
};

export default TimerContainer;