import React, {useState} from 'react';
// rfc
function ListKey() {
  const [list, setList] = useState(['과제하기','복습하기']);
  const [value, setValue] = useState('');
  const addToList = () => {
    // 잘못된 코드
    // 1) 직접 변경 -> 재렌더링이 안일어남
    // list.unshift(value);
    // console.log(list);
    // 2) set함수 사용 + 변경된 기존 배열 넣기
    // setList(list); // set함수를 쓴다고 하더라도 기존 배열을 넣어주면 값의 변경을 감지하지 못함

    // 올바른 코드 - 기존 배열을 복사하여 새로운 배열(새로운 주소값)을 만들어야 함.
    setList([value, ...list]);
    setList([...list,value]);
    
    // input에 입력한 이전값 초기화
    setValue('');
  };

  // 리스트 아이템 추가할 때마다 DOM에 무슨일이 일어나는지 개발자 도구로 확인해보기
  // 키 값이 없으면 추가된 아이템뿐만 아니라 전체가 다 DOM에 업데이트 됨(비효율적)
  // 각 아이템에 키를 추가하지 않았기 때문에 리액트는 어떤 항목이 업데이트 되었는지 알지 못함.
  // 100개, 1000개 항목이 많아질수록 성능 저하

  return (
    <>
      <input type="text" value={value} onChange={(event)=>{setValue(event.target.value);}}/>
      <button type="button" onClick={addToList}>추가</button>
      <ul>

      {/* 밑의 케이스들은 권장하지 않는 케이스들을 보여주는 것임 그러므로 각자의 id값을 하는 것을 권장함. */}
        {list.map((item,index) => {
          // return <li key={index}>{lists}</li>
          // return <li key={item}>{item}</li>
          return <li key={index}>{item}</li> //index를 키 값으로 사용하면 고유하지 않고 바뀔수도 있음.

        })}
      </ul>
    </>
  );
};

export default ListKey;