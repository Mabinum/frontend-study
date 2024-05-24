import styled from "styled-components";
import {Reset} from "styled-reset";
import {createGlobalStyle} from "styled-components";
import Todotemplate from "./components/Todotemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from "uuid";
import { useState } from "react";

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
        todo.id === id
      });
      copyTodos[Indexs].done = !copyTodos[Indexs].done;
      setTodos(copyTodos);
  };

  return (
    <>
    <Reset/>
    <createGlobalStyle/>
    <Todotemplate>
      <TodoInsert onInsert = {handleInsert}/>
      <TodoList todos = {todos} CheckBoxClick={CheckBoxClick}/>
    </Todotemplate>
    </>
  );
}

export default App;
