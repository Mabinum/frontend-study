import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  cursor: pointer;

  &:hover {
    background: lightgrey;
  }
`;

function ComponentListItem(props) {
  const {key, content} = props;

  return (
    <Wrapper>
      <p id={key}>{content}</p>
    </Wrapper>
  );
};

export default ComponentListItem;