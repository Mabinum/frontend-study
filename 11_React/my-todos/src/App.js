import styled from "styled-components";
import {Reset} from "styled-reset";
import {createGlobalStyle} from "styled-components";
import Todotemplate from "./components/Todotemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from "uuid";
import { useState } from "react";
import Modal from "./components/Modal";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import SubPage from "./components/SubPage";


function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : "리액트 공부하기",
      done : false
    },
    {
      id : 2,
      text : "HTML 공부하기",
      done : true
    },
    {
      id : 3,
      text : "자바스크립트 공부하기",
      done : true
    },
    {
      id : 4,
      text : "자바 공부하기",
      done : false
    }
  ]);

  const handleInsert = (text) => {
    const todo = {
      id : uuidv4(),
      text,
      done : false
    };
    const copytodos = [...todos];
    copytodos.push(todo);
    setTodos(copytodos);
    console.log(copytodos);
  }

  const CheckBoxClick = (id) => {
      const copyTodos = [...todos];
      const Indexs = todos.findIndex((todo)=>{
        return todo.id === id;
      });
      copyTodos[Indexs].done = !copyTodos[Indexs].done;
      setTodos(copyTodos);
  };

  const DeleteBoxClick = (id) => {
    const copyTodos = [...todos];
    const Indexs = todos.findIndex((todo)=>{
      return todo.id == id;
    });
    copyTodos.splice(Indexs,1);
    setTodos(copyTodos);
  };

  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  const OpenModal = (id) => {
    setShowModal(true);
    console.log(showModal);
    setEditTodo(
      todos.find((todo)=>{
        return todo.id == id;
      }))
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    setTodos(todos.map((todo)=>{
      return editTodo.id == todo.id ? editTodo : todo;
    }))
    CloseModal();
  };

  return (
    <BrowserRouter>
      <Reset/>
      <createGlobalStyle/>
      <Todotemplate>
        <TodoInsert onInsert = {handleInsert}/>
        <TodoList todos = {todos} CheckBoxClick={CheckBoxClick} DeleteBoxClick={DeleteBoxClick} OpenModal={OpenModal}/>
      </Todotemplate>

      {showModal && <Modal CloseModal={CloseModal} editTodo={editTodo}
        setEditTodo = {setEditTodo} handleSubmit= {handleSubmit}
      />}

      <Routes>
        <Route path="/next" element={<SubPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
