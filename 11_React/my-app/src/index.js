import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/3.4/library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import CommentEx from './chapter5/5.6/CommentEx';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropsUse />
  // <CommentEx
  //   date={new Date()}
  //   text="리액트를 즐기세요!"
  //   user={{
  //     name : 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/200/300'    
  //   }} 
  // /> 

  <CommentList />
);
// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// setInterval(() => {
//   root.render(<Clock/>);
// },1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
