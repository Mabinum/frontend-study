import Library from "../../chapter3/3.4/library"
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";
import Footer from "./Footer";

function PropsUse (){
  return (
    <>
      <Profile name = "고니" introduction = "안녕하세요" viewCount={1500}/>
        {/* 
        키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음
        정수, 변수 , 다른 컴포넌트 등 값을 넣을 때는 {}사용
        문자열은 {} 생략 가능 
        Quiz
        name(문자), introduction(문자), viewCount(숫자) */}
      
      <Layout 
        width = {2560}
        height = {1440}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header = {<Header title = "타이틀"/>}
        footer = {<Footer />}
      />
    </>
  );
}

export default PropsUse;