import {Button, Container, Nav, Navbar} from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
// app.css,index.css 지우고 app.js위에있는 기본설정들도 삭제하기
// index.js 에서 index.css 기본설정도 삭제하기

// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  

  body{
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  #root{
    text-align: center;
  } //예제니깐 편하게 가운데정렬하려고 넣은 것. 실무에서는 하나하나씩 손봐가면서 해야함

  .cursor-pointer{
    cursor: pointer;
  }
`;

// styled(Button){
  
// }

function App() {
  return (
  <>
    {/* 부트스트랩 연습 */}
    {/* 1) 리액트 부트스트랩 */}
    {/* <Button variant="primary">Primary</Button>{' '} */}
    {/* 2) 기존 부트스트랩 */}
    {/* <button type="button" className="btn btn-primary">Primary</button> */}
    <GlobalStyle/>

    
    {/* Quiz : Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
        <Route path="test" element={<Main/>} />
      </Route>
      <Route path="/1" element={<Layout/>}>
        {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
        <Route path="test" element={<gogo/>} />
          
      </Route>
    </Routes>

  </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/