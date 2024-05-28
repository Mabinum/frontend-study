import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  top: 30rem;
  left: 12rem;
`;

function Button() {
  return (
    <ButtonWrapper>
      <button type="button">다음으로 넘어가기</button>
    </ButtonWrapper>
  );
};

export default Button;