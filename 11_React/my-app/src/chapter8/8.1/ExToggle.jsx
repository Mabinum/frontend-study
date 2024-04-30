import React ,{usestate}from 'react';

function ExToggle(props) {
    const [isToggleOn, setIsToggleOn] = usestate(true); //[초기값, 상태변경함수]
  
    // 방법1.함수 선언문 사용
    // function handleToggle(){
    //   setIsToggleOn(!isToggleOn);
    // }

    const handleToggle = () => {
      setIsToggleOn(!isToggleOn);
    }
  
  return (
    <button type='button' 
    onClick={handleToggle}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default ExToggle;
