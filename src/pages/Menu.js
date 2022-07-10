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
const Menu = ({ shopInput, menuInput, setMenuInput }) => {
  //음성 인식 부분과 setMenuInput 연결 필요
  setMenuInput('와퍼주니어 내놔');
  return (
    <MenuContainer>
      <div>
        <HeaderContainer text={'메뉴 선택'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>
              "<RedText>{shopInput}</RedText>에서 이용할
            </DefaultText>{' '}
            <br />
            <DefaultText> 메뉴를 말해주세요"</DefaultText>
          </LeftText>
          {menuInput && (
            <RightText>
              "<RedText>{menuInput}</RedText>"
            </RightText>
          )}
        </SectionContainer>
      </div>
      <MicContainer>
        <Mic />
      </MicContainer>
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
