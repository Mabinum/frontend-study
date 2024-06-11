import { Button, Col, Container, Row } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { getSelectedProduct, selectProductList, selectselectedProduct } from "../features/product/productSlice";
import { useEffect  } from "react";
import axios from "axios";
import {useDispatch , useSelector} from "react-redux";
function ProductDetail(props) {

  const dispatch = useDispatch();
  const {productId} = useParams();
  const selectedProduct = useSelector(selectselectedProduct);

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
  }, []);


  return (
    <Container className="pt-3">
      <Row>
        {/* Quiz : 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={selectedProduct.imagePath} width="80%" alt="" />
        </Col>
        <Col md={6}>
          <h4>{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price}</p>
          {/* <h4>상품명</h4>
          <p>상품설명</p>
          <p>1000원</p> */}
          <Button variant="primary">주문하기</Button>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ProductDetail;