// rsf
import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name : '유재석',
    content : '리액트 재밌네~!'
  } ,
  {
    name : '이이경',
    content : '저도 리액트 배워보고 싶어요!!'
  } ,
  {
    name : '이미주',
    content : '리액트 너무 어려웡~~'
  } 
];


// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz : props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      <Comment name = '김석준' content = '안녕하세요'/>
      <Comment name = '김성준' content = '반갑습니다' />
      <Comment name = '김석중' content = '좋은 하루 되세요'/>

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map()함수를 사용 */}
      {/* 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment,index)=> {
        console.log(index,comment);
        return <Comment key = {index} name = {comment.name} content = {comment.content} />;
      })}

      {/* map() 함수의 결과 */}
      {
        [
          <Comment key = {0} name = {'========'} content = {'리액트 재밌네~!'} />,
          <Comment key = {1} name = {'이이경'} content = {'저도 리액트 배워보고 싶어요!!'} />,
          <Comment key = {2} name = {'이미주'} content = {'리액트 너무 어려웡~~'} />
        ]
      }
      {comments.map((comment,index) => <Comment key = {index} name = {comment.name} content = {comment.content} />)}
    </div>
  );
}

export default CommentList;