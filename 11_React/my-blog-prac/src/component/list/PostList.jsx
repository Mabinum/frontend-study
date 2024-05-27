import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;


function PostList(props) {
  const { posts } = props;

  return (
    <Wrapper>
      {posts.map((post)=>{
        return <PostListItem id = {post.id} title = {post.title} />;
      })}
      
    </Wrapper>
  );
};

export default PostList;