import { MdCheckBox, MdCheckBoxOutlineBlank , MdBorderColor , MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
const TodoListItemWrapper = styled.div`
  width: 512px;
  height: 40px;
  border-bottom: 1px solid black;
  background-color: orange;
  display: flex;
  cursor: pointer;
`;

const CheckBox = styled.div`

`;

const Text = styled.div`
  display: flex;
  margin-left: 0.5rem;
  /* flex: 1; //차지할 수 있는 영역 모두 차지 */
  font-size: 20px;
`;

const Modify = styled.div`

`;

const Delete = styled.div`

`;

function TodoListItem(props) {
  const {todo : {id,text,done}, CheckBoxClick , DeleteBoxClick , OpenModal} = props;
  const navigate = useNavigate();

  return (
    <TodoListItemWrapper onClick={()=>{navigate('/next')}}>
      <CheckBox onClick={()=>CheckBoxClick(id)}>
        {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
      </CheckBox>
      <Text>
        {text}
      </Text>
      <Modify onClick={()=>OpenModal(id)}>
        <MdBorderColor />
      </Modify>
      <Delete onClick={()=>DeleteBoxClick(id)}>
        <MdDeleteForever />
      </Delete>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;