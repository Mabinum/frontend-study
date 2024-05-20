import { useLocation, useSearchParams } from "react-router-dom";

function AboutPage() {
  // 실습1
  const location = useLocation();
  console.log(location);  

  // 실습2
  // 첫번째 요소는 쿼리스트링을 조회하거나 수정하는 메소드가 담긴 객체를 반환
  const [searchParams,setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');
  return (
    <>
      <h1>쿼리스트링 사용</h1>
      <h3>1. useLocation</h3>
      <p>{location.search}</p>

      <h1>2. useSearchParams</h1>
      <p>name : {name}</p>
      <p>age : {age}</p>
    </>
  );
};

export default AboutPage;