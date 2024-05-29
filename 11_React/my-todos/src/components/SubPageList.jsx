import styled from "styled-components";

const SubPageListWrapper = styled.div`
  width: 190px;
  height: 10px;
  font-size: 10px;
`;


function SubPageList(props) {
  const { key, text } = props;
  return (
    <SubPageListWrapper>
      <p id={key}>{text}</p>
    </SubPageListWrapper>
  );
};

export default SubPageList;