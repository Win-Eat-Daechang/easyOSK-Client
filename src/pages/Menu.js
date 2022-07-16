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

import { useNavigate } from 'react-router-dom';
import usePayload from '../hooks/usePayload';
import speechParse from '../utils/speechParse';
import { useEffect } from 'react';

const Menu = ({ shopInput, menuList, setMenuInput, setBarcode }) => {
  const { handleScript, transcript, listening, toggle, resetTranscript } =
    usePayload();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(menuList);
    resetTranscript();
  }, [resetTranscript]);

  const handler = () => {
    handleScript();
    // listening이 true일 때 애니메이션? 진동? 효과
    console.log(listening);
    if (!toggle) {
      console.log(menuList);
      speechParse(menuList, transcript).then(function (res) {
        console.log(res);
        setMenuInput(res);

        // barcode set
        // setBarcode()

        // 다음 page로 navigate
        navigate('/result');
      });
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
