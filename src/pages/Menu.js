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
import { useState, useEffect } from 'react';
import useAsync from '../hooks/useAsync';

import axios from 'axios';

async function getBarcode(storeId, menuId) {
  // https://www.piuda.cf/code?store=버거킹&menu=갈릭불고기와퍼세트

  if (menuId !== undefined && menuId !== 0) {
    const response = await axios.get(
      `https://www.piuda.cf/code?store=${storeId}&menu=${menuId}`
    );
    console.log(response);
    return response.data;
  }
}

const Menu = ({ shopInput, menuList, setMenuInput, setBarcode }) => {
  // get menu list, api call, id가 바뀔때마다 api call.
  const [menuId, setMenuId] = useState(0);
  const [state] = useAsync(() => getBarcode(menuId), [menuId]);
  const { loading, data: barcode } = state;

  const { handleScript, transcript, listening, toggle, init } = usePayload();

  // transcript 지우기
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  // barcode fetch하면 result page로 navigate
  const navigate = useNavigate();
  useEffect(() => {
    if (barcode && barcode.length > 0) {
      navigate('/result');
    }
  }, [barcode, navigate]);

  useEffect(() => {
    setBarcode(barcode);
  }, [barcode, setBarcode]);

  const handler = () => {
    handleScript();
    // listening이 true일 때 애니메이션? 진동? 효과
    console.log(listening);
    if (!toggle) {
      console.log(menuList);
      speechParse(menuList, transcript).then(function ({ name, id }) {
        setMenuInput(name);

        // set menuId, fetch barcode
        setMenuId(id);
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
      {loading ?? (
        <div>
          <span>loading</span>
        </div>
      )}

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
