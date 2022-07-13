import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Account from './pages/Account';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Result from './pages/Result';
import useAsync from './hooks/useAsync';
import axios from 'axios';
import Offline from './pages/Offline';

async function getShopList() {
  const response = await axios.get('https://www.piuda.cf/stores');
  console.log(response.data);
  return response.data;
}

const App = () => {
  const initialState = '';
  // get shoplist, api call
  const [shopList, refetch] = useAsync(getShopList, [], false);
  const { data: SL, error } = shopList;

  const [shopInput, setShopInput] = useState(initialState);

  const [menuList, setMenuList] = useState([]);
  const [menuInput, setMenuInput] = useState(initialState);

  const [barcode, setBarcode] = useState(initialState);

  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Routes>
          {error ? (
            <Route path="/" element={<Offline />} />
          ) : (
            <Route
              path="/"
              element={
                <Home
                  shopInput={shopInput}
                  shopList={shopList}
                  setShopInput={setShopInput}
                  setMenusInShop={setMenuList}
                />
              }
            />
          )}
          <Route
            path="/menu"
            element={
              <Menu
                shopInput={shopInput}
                menuList={menuList}
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
