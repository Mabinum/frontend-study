import styled from "styled-components";
import {MdAdd} from "react-icons/md"
import { useState } from "react";
const TodoInsertWrapper = styled.form`
  display: flex;
  height: 50px;
  background : red;
`;

const StyledInput = styled.input`
  width: 400px;
  font-size: 30px;
  
`;

const StyledButton = styled.button`
  width: 112px;
  background-color: pink;
  cursor: pointer;
  &:hover{
    background-color: red;
  }
`;



function TodoInsert(props) {
  const { onInsert } = props;

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) {
      alert("값을 입력해주세요");
      return;
    }
    onInsert(value);
    setValue('');
  }
  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput value={value} onChange={handleChange}/>
      <StyledButton type="submit">
        <MdAdd/>
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;