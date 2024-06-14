import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { clearSelectedProduct, getSelectedProduct, selectProductList, selectselectedProduct } from "../features/product/productSlice";
import { useEffect, useState  } from "react";
import axios from "axios";
import {useDispatch , useSelector} from "react-redux";
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";
import TabContents from "../components/TabContents";

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from{ background-color : yellow}
  50%{background-color : lightgreen}
  to{background-color : yellow}
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
  /* linear 일정하게 / infinite 반복횟수 무한으로 */

`;

function ProductDetail() {

  const dispatch = useDispatch();
  const {productId} = useParams();
  const product = useSelector(selectselectedProduct);
  


  // function useSelector(callback) {

  //   //  코드들이 수행


  //   callback(전역 상태);
  // }

  // const test = (state) => state.product.selectedProduct;
  // console.log(test());
  
  const formatter = new Intl.NumberFormat('ko-KR',{style: 'currency', currency: 'KRW'});

  const [state, setState] = useState(true); // Alert창 상태
  const [orderCount, setOrderCount] = useState(1); //주문수량 상태
  const [currentTabIndex, setCurrentTabIndex] = useState('0');
  // 현재 탭 상태

  const [currentTab, setCurrentTab] = useState('detail');


  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try  {
        const response =  await axios.get(`https://my-json-server.typicode.com/Mabinum/db-shop/products/${productId}`);
        console.log(response.data);
        dispatch(getSelectedProduct(response.data));
        // 액션 생성 함수
      } catch(err) {
        console.error(err);
      }
    };
    fetchProductById();

    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, []);

  useEffect(() => {

    const timeout = setTimeout(() => {
      return setState(false);
    }, 3000);

    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleChangOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if(isNaN(e.target.value)){
      toast.error('숫자만 입력하시라구요!');
      return;
    }

    setOrderCount(Number(e.target.value)) ;
  };

  // if (!product) {
  //   return null;
  // }

  return (
    
    <Container className="pt-3">
      {/* Quiz : Alert을 띄우고 3초 뒤에 사라지게 만들기 */}
      {/* 힌트 : 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 + 조건부 렌더링 */}
      {
        state &&
          <StyledAlert variant="info" onClose={() => setState(false)} dismissible>
            현재 100명이 이 상품을 보고 있습니다.
          </StyledAlert>
      }

      <Row>
        {/* Quiz : 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath}width="80%" alt="" />
        </Col>
        <Col md={6}>
          {/* <h4>상품명</h4> 
          <p>상품설명</p>
          <p>1000원</p> */}
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>

          <Col md={4} className="m-auto mb-3">
            {/* Quiz : text input을 제어 컴포넌트로 만들기 */}
            {/* npm install --save react-toastify */}
            <Form.Control type="text" border value={orderCount} onChange={handleChangOrderCount}/>
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>

      {/* 탭 버튼 UI */}
      {/* defaultActiveKey: 기본으로 active할 탭, active 클래스가 들어가있음 */}
      {/* <Nav variant="tabs" defaultActiveKey="link-0" className="my-3">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setCurrentTabIndex(0)
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setCurrentTabIndex(1) }} >리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setCurrentTabIndex(2) }} >Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={()=>{
            setCurrentTabIndex(3) }} >반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <Nav variant="tabs" defaultActiveKey="link-0" className="my-3">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setCurrentTab('detail') }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setCurrentTab('review') }} >리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setCurrentTab('qa') }} >Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={()=>{
            setCurrentTab('exchange') }} >반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탭의 내용을 다 만들어 놓고 조건부 렌더링하면 됨 */}
      {/* 방법1: 삼항 연산자 사용(가독성 나쁨) */}
      {/* {currentTabIndex === 0 ?
        <div>탭내용1</div> : currentTabIndex === 1 ?
          <div>탭내용2</div>  : currentTabIndex === 2 ?
            <div>탭내용3</div>  : currentTabIndex === 3 ?
              <div>탭내용4</div> : null
      } */}

      {/*  방법2 : 컴포넌트로 추출(가독성 개선) */}
      <TabContents currentTabIndex={currentTabIndex}/>

      {/* 방법3(편법) : 배열이나 객체 형태로 만들어서 조건부 렌더링  */}
      {/* 배열 형태 */}
      {[
        <div>탭내용1</div>,
        <div>탭내용2</div>,
        <div>탭내용3</div>,
        <div>탭내용4</div>
      ][currentTabIndex]}

      {/* Quiz : 객체 형태 */}
      {{
        'detail' : <div>탭 내용1</div>,
        'review' : <div>탭 내용2</div>,
        'qa' : <div>탭 내용3</div>,
        'exchange' : <div>탭 내용4</div>
      }[currentTab]}

    </Container>
  );
};

export default ProductDetail;