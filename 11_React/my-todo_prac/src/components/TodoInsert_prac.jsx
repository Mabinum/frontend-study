import styled from "styled-components";
import {MdAdd as AddIcon} from "react-icons/md";
import { useState } from "react";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; //버튼을 제외한 영역을 모두 차지하기
  & ::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;


// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert_prac({onInsert}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  유효성 검사 추가
    if(!value){
      alert('무엇을 할 지 내용을 입력하세요!');
      return ; //함수종료
    }

    onInsert(value);
    setValue('');


  }

  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={value}
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert_prac;