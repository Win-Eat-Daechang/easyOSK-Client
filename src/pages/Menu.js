import { useState, useEffect } from 'react';
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
import useAsync from '../hooks/useAsync';
import usePayload from '../hooks/usePayload';
import speechParse from '../utils/speechParse';
//import useSpeak from '../hooks/useSpeak';

import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

async function getBarcode(storeId, menuId) {
  // https://www.piuda.cf/code?store=버거킹&menu=갈릭불고기와퍼세트

  if (menuId !== undefined && menuId !== 0) {
    const response = await axios.get(
      `https://www.piuda.cf/code?store=${storeId}&menu=${menuId}`
    );
    console.log(response.data);
    return response.data;
  }
}

const Menu = ({ shopInput, menuList, setMenuInput, setBarcode }) => {
  // get menu list, api call, id가 바뀔때마다 api call.
  const [menuId, setMenuId] = useState(0);
  const [state] = useAsync(() => getBarcode(shopInput.id, menuId), [menuId]);
  const { loading, data: barcode } = state;

  const { handleScript, transcript, toggle, init } = usePayload();

  // transcript 지우기
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  // barcode fetch하면 result page로 navigate
  const navigate = useNavigate();
  useEffect(() => {
    if (barcode) {
      navigate('/result');
    }
  }, [barcode, navigate]);

  /*
  const setValue = useSpeak();
  useEffect(() => {
    console.log('set value');
    setValue(() => '이용할 메뉴를 화면 중앙의 버튼을 누르고 말해 주세요');
  }, [setValue]);
  */

  useEffect(() => {
    if (barcode) {
      const result = {
        ...barcode,
        id: menuId,
      };
      console.log(result);
      setBarcode(result);
    }
  }, [barcode, setBarcode, menuId]);

  const handler = () => {
    handleScript();
    // listening이 true일 때 애니메이션-진동 효과?
    if (!toggle) {
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
              "<RedText>{shopInput.name}</RedText>에서 이용할
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
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
`;
