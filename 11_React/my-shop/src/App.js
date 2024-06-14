import {Button, Container, Nav, Navbar} from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
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
        <Route index element={<Main/>} />
        <Route path="detail/:productId" element={<ProductDetail/>} />
        {/* <Route path="detail" element={<ProductDetail/>} /> */}
        {/* Quiz : 상품별 상세페이지 여러 개를 라우팅하려면? URL 파라미터 사용 */}
        {/* 예: /detail/1로 접속하면 productId에 1이 담기도록 설정 */}
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>페이지가 존재하지 않습니다</div>} />
      </Route>
    </Routes>
    
    {/* 리액트 라우터에도 있기에 토스티파이에 있는 명령어인지 확인하기 */}
    {/* 토스트 컨테이너 하나로 재사용 */}
    {/* 만약 다른 옵션의 토스트를 쓰고 싶다면 컨테이너 여러 개 사용 */}
    <ToastContainer 
      position="top-center"
      autoClose={100}
      pauseOnFocusLoss={false}
      theme="dark"
    />

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