import { createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import reset, {Reset} from "styled-reset";
import TodoTemplate_prac from "./components/TodoTemplate_prac";
import TodoInsert_prac from "./components/TodoInsert_prac";
import TodoList_prac from "./components/TodoList_prac";
import {v4 as uuidv4 }from "uuid";
import Modal_prac from "./components/Modal_prac";

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
  
  const [showModal, setShowModal] = useState(false); //모달 상태
  const [editTodo, setEditTodo] = useState({}); // 현재 수정할 todo 상태

  const handleOpenModal = (id) => {
    // 모달 열면서 현재 수정할 todo를 state에 저장
    setEditTodo(todos.find(todo => todo.id ===id ));
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleChange = (e) => { //제어 컴포넌트로 관리
    setEditTodo({
      ...editTodo,
      text : e.target.value
    })
  }

  // 실제 수정
  const handleEdit = () => {
    setTodos(todos.map((todo)=>todo.id=== editTodo.id? editTodo:todo));
    handleCloseModal();
  }

// 로컬 스토리지에서 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || []; //초기에 'todos'가 없으면 null을 반환함
    setTodos(dbTodos);
  }, []);
  
  // 로컬 스토리지에 저장하기(주의: DB가 아님, DB처럼 쓰면 안됨!!)
  // 추가 ,수정 , 삭제 각 함수에 로직을 넣어도 되지만, useEffect()를 활용하면 한번에 처리 가능!
  // todos가 변경될 때마다 실행해라!!
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  // 새 객체를 만들 때마다 id값에 1씩 더해줘야 하는데
  // id값은 렌더링되는 정보가 아님
  // 단순히 새로운 항목을 만들 때 참조되는 겂임
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);

  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  // ??? 여기에서 text를 어떻게 바로 넣어줄 수 있는거지?
  // 완료
  const handleInsert = (text) => {
    const todo = {
      id : uuidv4(),
      text,
      done: false
    };

    // 방법1
    const copyTodos = [...todos];
    copyTodos.push(todo);
    setTodos(copyTodos); //새로운 배열을 만들어 넣어줌
    
    // (편법)
    // setTodos(todos.concat(todo));
    // nextId.current += 1; //nextId에 1씩 더하기
  }

  const handleRemove = (id) => {
    const copyTodos = [...todos];
    const targetIndex = todos.findIndex(todo => todo.id ===id);
    copyTodos.splice(targetIndex, 1);
    setTodos(copyTodos);
  }

  // todos 배열의 특정 요소를 수정하기 위한 함수
  const handleToggle = (id) => {
    const copyTodos = [...todos];
    const targetIndex = todos.findIndex(todo => todo.id === id);
    copyTodos[targetIndex].done = !copyTodos[targetIndex].done;
    setTodos(copyTodos);
  }
  
  

  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <TodoTemplate_prac>
        <TodoInsert_prac onInsert={handleInsert}/>
        <TodoList_prac todos={todos} onRemove = {handleRemove} onToggle={handleToggle} onModal = {handleOpenModal}/>
      </TodoTemplate_prac>
      
       {/* 수정하기 모달 */}
       {showModal && (
        <Modal_prac
          title="할 일 수정"
          onCloseModal={handleCloseModal}
          onEdit={handleEdit}
        >
          <input type="text" value={editTodo.text} onChange={handleChange} />
        </Modal_prac>
      )}
    </>
  );
}

export default App;
