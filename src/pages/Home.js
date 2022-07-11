//Home 페이지에서 매장 선택
// import { useState } from 'react';
import styled from 'styled-components';
import {
  DefaultText,
  HeaderContainer,
  LeftText,
  MicContainer,
  RedText,
  RightText,
  SectionContainer,
} from '../components/Shared/components';
import Mic from '../components/Home/Mic';
// import { Link } from 'react-router-dom';

import usePayload from '../hooks/usePayload';

const Home = ({ shopInput, setShopInput, setMenusInShop }) => {
  const [handleScript, transcript, listening] = usePayload();
  const handler = () => {
    handleScript();
    console.log(transcript);
    console.log(listening);
    if (transcript) {
      /* 입력 종료 시 */
      setShopInput(transcript);
      //매장 정보(shopInput) 넘겨주고 메뉴 정보 받아오는 API 요청
      //setMenusInShop(받아온 메뉴 list)
    }
  };

  return (
    <HomeContainer>
      <div>
        <HeaderContainer text={'홈'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>"이용할</DefaultText>
            <br />
            <DefaultText> 매장을 말해주세요"</DefaultText>
          </LeftText>
          {transcript && (
            <RightText>
              "<RedText>{transcript}</RedText>"
            </RightText>
          )}
        </SectionContainer>
      </div>
      <MicContainer onClick={handler}>
        <Mic />
      </MicContainer>
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
