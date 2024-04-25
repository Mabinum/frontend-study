import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentEx(props) {
  return (
    <>
    {/* 원본
    <div className="comment">
      <div className="user-info">
        <Avatar 
          user={{
            name : props.author.name,
            avatarUrl: props.author.avatarUrl
          }}
        />
        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>

      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div> */}

    {/* Step 2:  */}
    <div className="comment">
      <UserInfo user = {props.user}/>
      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>     


  </>
  );
}

export default CommentEx;

// ============================================
// import React from 'react';

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function CommentEx(props) {
//   return (
//     <>
    //   {/* 원본 */}
    //   <div className="comment">
    //     <div className="user-info">
    //       <img className="avatar"
    //         src={props.author.avatarUrl}
    //         alt={props.author.name}
    //       />
    //       <div className="user-info-name">
    //         {props.author.name}
    //       </div>
    //     </div>

    //     <div className="comment-text">
    //       {props.text}
    //     </div>

    //     <div className="comment-date">
    //       {formatDate(props.date)}
    //     </div>
    //   </div>
    // </>
//   );
// }

// export default CommentEx;