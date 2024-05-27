import styled from "styled-components";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";



const MainTitleText = styled.p`
  font-size : 24px;
  font-weight: bold;
  text-align: center;
`;


function App() {
  return (
    <>
    <div>안녕하세요 실행</div>
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
