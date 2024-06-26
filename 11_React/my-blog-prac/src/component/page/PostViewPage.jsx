import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import data from "../../data.json";
import Button from "../ui/Button";
import ComponentList from "../list/ComponentList";
import TextInput from "../ui/TextInput";



const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 600;
`;


function PostViewPage() {
  const navigate = useNavigate();

  const [comment, setComment] = useState('');
  console.log(useParams());
  const {postId} = useParams();

  const post = data.find((item)=>{
    return item.id === postId;
  });


  return (
    <Wrapper>
      <Container>

        <Button
          title = '뒤로 가기'
          onClick = { () => { navigate('/')}}
        />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <ComponentList
          comments = {post.comments}
        />
        <TextInput
          height = {40}
          value = {comment}
          onChange = {(e)=>setComment(e.target.value)}
        />
        
        <Button
          title = "댓글 등록"
          onClick = {()=>navigate('/')}
        />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;