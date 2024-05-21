import { createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import reset, {Reset} from "styled-reset";
import TodoTemplate_prac from "./components/TodoTemplate_prac";
import TodoInsert_prac from "./components/TodoInsert_prac";
// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
/* reset css */
${reset}

/* 글로벌(공통) 스타일 */
body{
  background: #e9ecef;
  }
`;

function App() {
  // todos 배열 안에 객체 형태로 데이터가 존재

  const [todos, setTodos] = useState([
    {
      id : 1,
      text: '수업 교안 작성하기',
      done : true
    },
    {
      id : 2,
      text: '시험 채점하기',
      done : true
    },
    {
      id : 3,
      text: '단계별 실습 예제 만들기',
      done : false
    },
  ]);

  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  // ??? 여기에서 text를 어떻게 바로 넣어줄 수 있는거지?
  const handleInsert = (text) => {
    // const todo = {
    //   id : uuidv4(),
    //   text,
    //   done: false
    // };

    // 방법1
    const copyTodos = [...todos];
    copyTodos.push(todo);
    setTodos(copyTodos); //새로운 배열을 만들어 넣어줌



  }

  const [showModal, setShowModal] = useState(false); //모달 상태
  const [editTodo, setEditTodo] = useState({}); // 현재 수정할 todo 상태
  
  

  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <TodoTemplate_prac>
        <TodoInsert_prac onInsert={handleInsert}/>
        <TodoList/>
      </TodoTemplate_prac>
      
    </>
  );
}

export default App;
