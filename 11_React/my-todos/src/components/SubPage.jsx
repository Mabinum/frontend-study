import styled from "styled-components";
import { useNavigate , useParams } from "react-router-dom";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import SubPageItem from "./SubPageItem";


const SubPageWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  `;


function SubPage(props) {
  const [subTodos, setSubTodos] = useState([]);
  const [values, setValues] = useState('');
  
  const handleSubChange = (e) => {
    setValues(e.target.value);
  };

  const handleSubClick = () => {
    const subTodo = {
      id : uuidv4(),
      text : values
    };
    setSubTodos([...subTodos,subTodo])
  };

  const { todos } = props;
  const navigate = useNavigate();
  const {nextId} = useParams();
  console.log(nextId);
  const page = todos.find((todo)=>{
    return todo.id == nextId;
  })
  console.log(page);

  return (
    <SubPageWrapper>
    <div>추가적 할 일들</div>
    <div>{page.text}</div>
    <input type="text" value={values} onChange={handleSubChange} />
    <SubPageItem subTodos = {subTodos}/>
    <button type="button" onClick={handleSubClick}>저장</button>
    <button type="button" onClick={()=>{navigate('/')}}>메인페이지로</button>
    </SubPageWrapper>
  );
};

export default SubPage;