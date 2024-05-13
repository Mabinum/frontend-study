import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: lightgray;
`;

const Block = styled.div`
  padding: ${props => props.$padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.$backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [  
  {
    label : '1',
    padding : '1rem',
    backgroundColor: 'red'
  } ,
  {
    label : '2',
    padding : '3rem',
    backgroundColor: 'green'
  },
  {
    label : '3',
    padding : '2rem',
    backgroundColor : 'blue'
  }
];


function Blocks() {
  console.log(blockItems);
  return (
    <Wrapper>
      {/* Quiz: 배열 반복 렌더링 및 스타일링 완성 */}
      {blockItems.map(items=>{
        return (
          // 키값을 꼭 넣어주기
          <Block key={items.label} $padding = {items.padding}  $backgroundColor = {items.backgroundColor}>
            {items.label}
          </Block>
        );
      })}
    </Wrapper>
  );
};

export default Blocks;