import styled from "styled-components";
import TodoListItem_prac from "./TodoListItem_prac";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map() 함수를 사용해 여러 개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList_prac({todos,onRemove,onToggle,onModal}) {
  return (
    <TodoListWrapper>
      {todos.map((todo)=>{
        console.log(todo);
        return <TodoListItem_prac key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal={onModal}/>
      })}
    </TodoListWrapper>
  );
};

export default TodoList_prac;