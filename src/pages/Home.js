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

import usePayload from '../hooks/usePayload';
import speechParse from '../utils/speechParse';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

async function getMenuList(id) {
  if (id !== 0) {
    const response = await axios.get(`https://www.piuda.cf/stores/${id}`);
    console.log(response);
    return response.data;
  }
}

const Home = ({ shopList, setShopInput, setMenuList }) => {
  // get menu list, api call, id가 바뀔때마다 api call.
  const [id, setId] = useState(0);
  const [state] = useAsync(() => getMenuList(id), [id]);
  const { loading, data: menuList, error } = state;

  const { handleScript, transcript, listening, toggle, resetTranscript, init } =
    usePayload();

  const navigate = useNavigate();
  // menu set 되면 화면 전환
  useEffect(() => {
    if (menuList && menuList.length > 0) {
      navigate('/menu');
    }
  }, [menuList]);

  useEffect(() => {
    setMenuList(menuList);
  }, [menuList, setMenuList]);

  const handler = () => {
    handleScript();
    // listening이 true일 때 애니메이션? 진동? 효과
    console.log(listening);
    if (!toggle) {
      speechParse(shopList, transcript).then(function ({ name, id }) {
        setShopInput(name);
        // res에 해당하는 메뉴 정보 가져와서 set. id만 부여하면 자동으로 fetch
        setId(id);
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
      {loading ?? (
        <div>
          <span>loading</span>
        </div>
      )}
      {error ?? (
        <div>
          <span>{error}</span>
        </div>
      )}
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
