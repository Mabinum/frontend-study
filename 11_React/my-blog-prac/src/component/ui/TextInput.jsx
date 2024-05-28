import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  const {height,value,onChange} = props;

  return (
    <>
      <StyledTextarea height={height} value={value} onChange={onChange} />

    </>
  );
};

export default TextInput;