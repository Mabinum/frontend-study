import styled from "styled-components";
import Button from "./Button";

const TodotemplateWrapper = styled.div`
  width: 512px;
  height: 700px;
  background-color: royalblue;
  margin: 100px auto 0;
  border-radius: 3rem;
  /* display: flex; */

  .header{
    width: 512px;
    height: 70px;
    /* background-color: red; */
    /* border-radius: 3rem; */
    display: flex;
    justify-content: center;
    font-size: 35px;
    align-items: center;
    border-bottom: 3px solid black;
  }
`;




function Todotemplate(props) {
  const { children } = props;

  return (
    <TodotemplateWrapper>
      <div className="header">할일</div>
      <div className="todochildren">{children}</div>
      {/* <Button/> */}
    </TodotemplateWrapper>
  );
};

export default Todotemplate;