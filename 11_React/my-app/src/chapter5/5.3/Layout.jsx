import Header from "./Header";
import Footer from "./Footer";

function Layout(props){
  // 집가서 확인해보기
  console.log(props);
  // Quiz : {}채우기
  return (
    <>
    {props.header}
    레이아웃 크기는 가로{props.width}, 세로{props.height}
    {props.footer}
    </>
  );
}

export default Layout;