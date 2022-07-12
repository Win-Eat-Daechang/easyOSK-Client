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
// import { Link } from 'react-router-dom';

import usePayload from '../hooks/usePayload';
import speechParse from '../utils/speechParse';
import { useEffect } from 'react';

const Home = ({ shopList, setShopInput, setMenusInShop }) => {
  const [handleScript, transcript, listening, toggle] = usePayload();
  const [result, setResult] = useState();

  useEffect(() => {
    setResult(null);
  }, []);

  const handler = () => {
    handleScript();
    // console.log(transcript);
    console.log(listening);
    if (!toggle) {
      speechParse(shopList, transcript).then(function (res) {
        setShopInput(res);
        setResult(res);

        // res에 해당하는 메뉴 정보 가져와서 set.
        setMenusInShop(['menu1', 'menu2', 'menu3']);
      });
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
          {result ? (
            <RightText>
              "<RedText>{result}</RedText>"
            </RightText>
          ) : (
            transcript && (
              <RightText>
                "<RedText>{transcript}</RedText>"
              </RightText>
            )
          )}
          {/* {transcript && (
            <RightText>
              "<RedText>{transcript}</RedText>"
            </RightText>
          )} */}
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
