import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정

  const [posts, setPosts] = useState(['리액트 잘 쓰려면?','자바스크립트 핵심 문법','스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <>
      <header className="header--dark">
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 01월 20일</p>
          <p>by goni kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 01월 20일</p>
          <p>by goni kim</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 01월 20일</p>
          <p>by goni kim</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((post,index) => {
          return (
            <div className='list' 
              onClick={()=> {
                setShowPostDetail(true);
                setCurrentIndex(index); //id값이 없으니 index로 대신함.
              }}>
              <h4 key={index} >{post}</h4>
              <p>2023년 01월 20일</p>
              <p>by goni kim</p>
            </div>
          ); 
        })}


        {/* 포스트 상세보기 */}
        {/* Quiz : 조건부 렌더링 */}
        {/* <PostDetail showPostDetail = {showPostDetail}/> */}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex}/>}



      </div>
    </>
  );
}

export default App;
