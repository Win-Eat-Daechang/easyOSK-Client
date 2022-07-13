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
import axios from 'axios';
import useAsync from '../hooks/useAsync';

import { useNavigate } from 'react-router-dom';
import usePayload from '../hooks/usePayload';
import speechParse from '../utils/speechParse';
import { useState } from 'react';

async function getMenuList(id) {
  const response = await axios.get(`https://www.piuda.cf/stores/${id}`);
  console.log(response.data);
  return response.data;
}

const Home = ({ shopList, setShopInput, setMenusInShop: setMenuList }) => {
  // get menu list, api call, id가 바뀔때마다 api call.
  const [id, setId] = useState(0);
  const [state] = useAsync(() => getMenuList(id), [id]);
  const { loading, data: menuList, error } = state;

  const [handleScript, transcript, listening, toggle, resetTranscript] =
    usePayload();
  const navigate = useNavigate();

  const handler = () => {
    handleScript();

    // listening이 true일 때 애니메이션? 진동? 효과
    console.log(listening);
    if (!toggle) {
      speechParse(shopList, transcript).then(function (res) {
        setShopInput(res);
        // res에 해당하는 메뉴 정보 가져와서 set. id만 부여하면 자동으로 fetch
        setId(1);

        // reset transcript
        resetTranscript();

        // 다음 page로 navigate
        navigate('/menu');
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
