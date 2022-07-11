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
import usePayload from '../hooks/usePayload';

const Menu = ({ shopInput, menuInput, setMenuInput, setBarcode }) => {
  const [handleScript, transcript, listening] = usePayload();
  const handler = () => {
    handleScript();
    console.log(transcript);
    console.log(listening);
    if (transcript) {
      /* 입력 종료 시 */
      setMenuInput(transcript);
      //매장(shopInput)-메뉴(menuInput) 정보 넘겨주고 바코드 받아오는 API 요청
      //setBarcode(받아온 바코드)
    }
  };
  return (
    <MenuContainer>
      <div>
        <HeaderContainer text={'메뉴 선택'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>
              "<RedText>{shopInput}</RedText>에서 이용할
            </DefaultText>
            <br />
            <DefaultText> 메뉴를 말해주세요"</DefaultText>
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
