// rsf
import React from 'react';
import Comment from './Comment';

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

    </div>
  );
}

export default CommentList;