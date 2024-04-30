import React from 'react';

function ExMailBox(props) {
  const unread = props.unread;

  return (
    <>
      <h1>안읽은 메일 보관함</h1>
      {unread.length > 0 && (
        <>
        <h2>{unread.length}개의 읽지 않은 메일이 있습니다.</h2>
        {unread.map((unreadm,index) => {
          return <p key = {index}>제목: {unreadm}</p>
        })}
        </>
      )}

      {true  && <h1>Messages : {unread.length}</h1> }
    </>
  );
}

export default ExMailBox;