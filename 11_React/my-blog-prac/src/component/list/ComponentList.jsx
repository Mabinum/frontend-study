import styled from "styled-components";
import ComponentListItem from "./ComponentListItem";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function ComponentList(props) {
  const {comments} = props;
  return (
    <Wrapper>
      {comments.map((comment)=>{
        return <ComponentListItem key = {comment.id} content = {comment.content} />
      })}
    </Wrapper>
  );
};

export default ComponentList;