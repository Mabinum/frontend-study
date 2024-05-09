import './SplitPaneSection.css'

function Contacts() {
  return <div className='Contacts'></div>
}

function Chat() {
  return <div className='Chat'></div>
}

function SplitPane(props) {
  console.log(props);
  return(
    // 1)
    // <div className='SplitPane'>
    //   <div className='SplitPane-left'>
    //     {props.children[0]}
    //   </div>
    //   <div className='SplitPane-right'>
    //     {props.children[1]}
    //   </div>
    // </div>

    // 2
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
    </div>
  );
  
}

// 1. 리액트는 props.children을 통해 하위 자식 엘리먼트를 하나로 모아서 제공
// 2. children 하나에 다 담아서 쓰고 싶지 않다면?
// 별도로 props를 정의해서 각각 원하는 컴포넌트(엘리먼트)를 넣어주면 됨.

function SplitPaneSection() {
  return (
    // 1
    // <SplitPane>
    //   <Contacts />
    //   <Chat />
    // </SplitPane>

    // 2
    <SplitPane left={<Contacts/>} right={<Chat/>}
      > </SplitPane>
  );
};

export default SplitPaneSection;