import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px;
  border-radius: 8px;
  cursor: pointer;
`;


function Button(props) {
  const { title, onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      {title || '버튼'}
      {/* 안녕하세요 */}
    </StyledButton>
  );
};

export default Button;