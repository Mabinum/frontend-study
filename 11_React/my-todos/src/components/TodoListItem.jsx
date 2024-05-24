import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";
const TodoListItemWrapper = styled.div`
  width: 512px;
  height: 40px;
  border-bottom: 1px solid black;
  margin : 2px auto;
  background-color: orange;
  display: flex;
`;

const CheckBox = styled.div`

`;

const Text = styled.div`
  display: flex;
  margin-left: 0.5rem;
  /* flex: 1; //차지할 수 있는 영역 모두 차지 */
  font-size: 20px;
`;

function TodoListItem(props) {
  const {todo : {id,text,done}, CheckBoxClick} = props;

  return (
    <TodoListItemWrapper>
      <CheckBox onClick={()=>CheckBoxClick(id)}>
        {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <MdCheckBoxOutlineBlank/>
      </CheckBox>
      <Text>
        {text}
      </Text>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;