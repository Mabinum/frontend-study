import React, { useState } from 'react';

function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 해야함.
  let[ count , setCount] = useState(0); //초기값 0  
  console.log(useState(0));
  // useState()의 결과로 배열이 반환됨 -> [초기값, 상태변경함수]
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당
  // state 미사용 시 
  let wrongCount = 1;
  const [isClicked, setIsCliked] = React.useState(false);
  const [ color , setColor ] = useState('blue'); //글자색 상태
  const [content , setContent] = useState('버튼 내용 바꾸기');
  const [gudok , setgudok] = useState(false);
  return (
    <>
      <p>총 {count}번 클릭했습니다</p>

      {/* 1. state 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 않음 */}
      <button
        type='button'
        onClick={()=>{
          count ++;
          console.log(count);
        }}
      >
        클릭(잘못된 방법)
      </button>

      {/* 2. state 변경 함수를 이용한 수정 */}
      <button
        type='button'
        onClick={()=>{
          setCount(count+1);
          console.log(count);
        }}
      >
        클릭
      </button>

      {/* 3. state 미사용*/}
      {/* 값은 증가되지만 재렌더링이 일어나지 않음
        다른 이유로 재렌더링 발생 시 , 값이 초기화됨
      */}
      <p>총 {wrongCount}번 클릭했습니다</p>
      <button
        type='button'
        onClick={()=>{
          wrongCount ++;
          console.log(wrongCount);
        }}
      >
        클릭(잘못된 방법)
      </button>

      <hr/>

      {/* Quiz : 글자색 바꾸기, 버튼 내용 바꾸기 */}
      <p style={{color : 'blue'}}>현재 글자색 : {color}</p>
      <button type='button'
      onClick={()=>{
        setColor(color)
      }}>
        글자색 변경 </button>

      <p>{content}</p>
      <button onClick={()=>{
        setgudok(!gudok)
        setContent('성공')
        }}>{gudok ? '구독 완료' : '구독'}</button>
    </>
  );
}

export default Counter;