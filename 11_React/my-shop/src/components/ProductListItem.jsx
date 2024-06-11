import { Col } from "react-bootstrap";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

// 방법1: 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법2: GlobalStyle에 공통 스타일로 작성

function ProductListItem(props) {
  const { product : {id, title, price, imagePath}} = props;

  // 숫자 포맷 적용 
  // 내장 객체
  const formatter = new Intl.NumberFormat('ko-KR',{ style: 'currency', currency : 'KRW' });

  const navigate = useNavigate();

  return (
    <StyledCol md={4} sm={6} >
      <img src={imagePath} width="80%"  className="cursor-pointer" onClick={()=>{navigate(`/detail/${id}`);}}/>
      <h4>{title}</h4>
      <p>{formatter.format(price)}원</p>
    </StyledCol>
    // <Col md={4} sm={6} >
    //   <img src={imagePath} width="80%"  className="cursor-pointer"/>
    //   <h4>{title}</h4>
    //   <p>{formatter.format(price)}원</p>
    // </Col>
  );
};

export default ProductListItem;