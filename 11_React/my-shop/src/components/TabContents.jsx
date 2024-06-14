function TabContents(props) {
  const {currentTabIndex} = props;

  let tabContent;
  if(currentTabIndex === 0){
    tabContent = <div>탭내용 1</div>;
  } else if(currentTabIndex === 1){
    tabContent = <div>탭내용 2</div>;
  } else if(currentTabIndex === 2){
    tabContent = <div>탭내용 3</div>;
  } else if(currentTabIndex === 3){
    tabContent = <div>탭내용 4</div>;
  }

  return (
    <>
      {/* {currentTabIndex === 0 ?
        <div>탭내용1</div> : currentTabIndex === 1 ?
          <div>탭내용2</div>  : currentTabIndex === 2 ?
            <div>탭내용3</div>  : currentTabIndex === 3 ?
              <div>탭내용4</div> : null
      } */}
      {tabContent}
    </>
  );
};

export default TabContents;