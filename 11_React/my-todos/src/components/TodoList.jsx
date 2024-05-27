import styled from "styled-components";
import TodoListItem from "./TodoListItem";
const TodoListWrapper = styled.div`
  width: 512px;
  height: 30px;
  background-color: red;
`;
function TodoList(props) {
  const {todos , CheckBoxClick , DeleteBoxClick , OpenModal} = props;

  return (
    <TodoListWrapper>
      {/* {todos.map((todo) => {
        return todo.text;
      })} */}
    {todos.map((todo)=>{
      return <TodoListItem todo= {todo} CheckBoxClick={CheckBoxClick}
      DeleteBoxClick = {DeleteBoxClick} OpenModal={OpenModal}
      />;
    })}
    </TodoListWrapper>
  );
};

export default TodoList;