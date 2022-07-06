import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Account from './pages/Account';
import Home from './pages/Home';
import Result from './pages/Result';

const App = () => {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
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

  width: 80vw;
  min-height: 82vh;

  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: #ffffff;
  align-items: center;
  @media screen and (min-width: 1281px) {
    width: 62vw;
    min-height: 82vh;
    box-shadow: ;
  }
`;
