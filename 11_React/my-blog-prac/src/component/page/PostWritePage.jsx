import { useState } from "react";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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


function PostWritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <TextInput
         height = {20}
         value = {title}
         onChange = {(e)=>{setTitle(e.target.value)}}
        />
        <TextInput
          height = {20}
          value = {content}
          onChange = {(e)=>{setContent(e.target.value)}}
        />
        <Button
          title= "글 등록"
          onClick = {()=>navigate('/')}
        />
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;