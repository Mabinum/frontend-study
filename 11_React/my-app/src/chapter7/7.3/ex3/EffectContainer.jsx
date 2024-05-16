import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible ? <EffectSummary /> : null}
      <hr />
      <button type="button" onClick={()=>setIsVisible(false)}>사라져랏</button>
      <button type="button" onClick={()=>setIsVisible(true)}>나타나랏</button>
    </>
  );
};

export default EffectContainer;