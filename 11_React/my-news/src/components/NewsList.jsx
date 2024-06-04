import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {PacmanLoader} from "react-spinners";

import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플 데이터 렌더링 해보기
const sampleArticle = {
  title : '제목',
  description : '내용',
  URL : 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList() {
  // useParams();
  const { category = 'all' } = useParams();
  console.log(category);

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  // 로딩을 상태로 관리하여 API 요청이 대기중인지 판별

  // NewsList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  // useEffect() 안썼을 때 문제점? api 요청 + set함수에 의한 재렌더링 무한 반복
  useEffect(()=>{
    const fetchNewsData = async () => {
      setLoading(true);
      try{
        // API 호출 시 카테고리 지정하기
        // 카테고리가 all 일때는 아무것도 들어가면 안되고, 그 외엔 해당 카테고리 값이 들어감
        // 예시:
        // https://newsapi.org/v2/top-headlines?country=kr&apiKey=cd744db8d35f45859f6b88856c5e9bfe
        // https://newsapi.org/v2/top-headlines?country=kr&
        // category=sports&apiKey=cd744db8d35f45859f6b88856c5e9bfe
        const query = category === 'all' ? '' : `category=${category}`;

        const logs = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=cd744db8d35f45859f6b88856c5e9bfe`);
        setArticles(logs.data.articles);
        console.log(logs.data.articles);
      } catch(err){
        console.error(err);
      }
      setLoading(false);
    };
    fetchNewsData();
  },[category]);
  // category를 안넣어주면 렌더링이 시작할때 한번하고 끝나기에 category를 넣어줘야 
  // 렌더링 될때마다 변할거임


  // article 값이 없을 때 렌더링 막기
  // 1)
  // if(!articles) {
  //   return null;
  // }
  // 2)
  // {articles &&} 넣어주기
  // 3)
  // /* 또는 옵셔널 체이닝 사용

  // 로딩중일 때 처리
  // 추천: react-spinners 또는 Lottie Files
  if(loading) {
    return <PacmanLoader color="#36d7b7">로딩중</PacmanLoader>;
  }

  return (
    <NewsListBlock>
      {/* {articles && articles.map((article)=>{
        return <NewsItem key={article.url} article={article}/>;
      })} */}
      {articles?.map((article)=>{
        return <NewsItem key={article.url} article={article}/>;
      })}

    </NewsListBlock>
  );
};

export default NewsList;