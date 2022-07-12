import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Account from './pages/Account';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Result from './pages/Result';

const App = () => {
  const initialState = '버거킹';
  const [shopList, setShopList] = useState([]);
  const [shopInput, setShopInput] = useState(initialState);
  const [menusInShop, setMenusInShop] = useState([]);
  const [menuInput, setMenuInput] = useState(initialState);
  const [barcode, setBarcode] = useState(initialState);

  useEffect(() => {
    // app init 시 사용 가능한 shop list 가져오기
    setShopList(['버거킹', '서브웨이']);
  }, []);

  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                shopInput={shopInput}
                shopList={shopList}
                setShopInput={setShopInput}
                setMenusInShop={setMenusInShop}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                shopInput={shopInput}
                menusInShop={menusInShop}
                menuInput={menuInput}
                setMenuInput={setMenuInput}
                setBarcode={setBarcode}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                shopInput={shopInput}
                menuInput={menuInput}
                barcode={barcode}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  width: 100vw;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;

  /* box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: #ffffff; */
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;
