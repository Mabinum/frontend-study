import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
      <Routes>
        {/* 값이 있을수도 있고 없을수도 있는 경우에 옵셔널을 붙여주면 됌 */}
        {/* ?라는 category값이 선택적이라는 의미 즉, 있을 수도 있고, 없을 수도 있다는 뜻 */}
        <Route path='/:category?' element={<NewsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
