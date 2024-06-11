import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 */}
      <header>
      {/* 헤더 영역 : 상단 네비게이션 바 */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" onClick={()=>navigate('/')}>주니샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>navigate('/')}>홈</Nav.Link>
              <Nav.Link onClick={()=>navigate('/cart')}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      {/* 자식 컴포넌트가 렌더링 될 위치 */}
      <Outlet />


      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KSJ Joon Kim, All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Layout;