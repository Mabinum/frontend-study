import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { clearSelectedProduct, getSelectedProduct, selectProductList, selectselectedProduct } from "../features/product/productSlice";
import { useEffect, useState  } from "react";
import axios from "axios";
import {useDispatch , useSelector} from "react-redux";
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";

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
    </Container>
  );
};

export default ProductDetail;