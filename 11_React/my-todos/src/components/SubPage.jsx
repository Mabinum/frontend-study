import styled from "styled-components";

const SubPageWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

function SubPage() {
  return (
    <SubPageWrapper>
    <div>안녕하세요</div>
    </SubPageWrapper>
  );
};

export default SubPage;