//Home 페이지에서 매장 선택
import { useState } from 'react';
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
import { Link } from 'react-router-dom';
const Home = ({ shopInput, setShopInput }) => {
  //음성 인식 부분과 setShopInput 연결 필요
  setShopInput('버거킹');
  return (
    <HomeContainer>
      <div>
        <HeaderContainer text={'홈'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>"이용할</DefaultText> <br />
            <DefaultText> 매장을 말해주세요"</DefaultText>
          </LeftText>
          {shopInput && (
            <RightText>
              "<RedText>{shopInput}</RedText>"
            </RightText>
          )}
        </SectionContainer>
      </div>
      <MicContainer>
        <Mic />
      </MicContainer>
      <Link to="/menu">메뉴로 이동(디버깅용)</Link>
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
