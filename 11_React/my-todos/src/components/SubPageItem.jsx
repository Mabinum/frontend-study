import styled from "styled-components";
import SubPageList from "./SubPageList";

const SubPageItemWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow-y: hidden;
`;

function SubPageItem(props) {
  const {subTodos} = props;

  return (
    <SubPageItemWrapper>
      {subTodos.map((subTodo)=>{
        return <SubPageList key={subTodo.id} text={subTodo.text} />;
      })}
    </SubPageItemWrapper>
  );
};

export default SubPageItem;