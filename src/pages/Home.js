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
// import useSpeak from '../hooks/useSpeak';

async function getMenuList(id) {
  if (id !== undefined && id !== 0) {
    const response = await axios.get(`https://www.piuda.cf/stores/${id}`);
    // console.log(response);
    return response.data;
  }
}

const Home = ({ shopList, setShopInput, setMenuList }) => {
  // get menu list, api call, id가 바뀔때마다 api call.
  const [id, setId] = useState(0);
  const [state] = useAsync(() => getMenuList(id), [id]);
  const { loading, data: menuList } = state;

  const { handleScript, transcript, toggle } = usePayload();

  const navigate = useNavigate();
  // menu set 되면 화면 전환
  useEffect(() => {
    if (menuList && menuList.length > 0) {
      navigate('/menu');
    }
  }, [menuList, navigate]);

  useEffect(() => {
    setMenuList(menuList);
  }, [menuList, setMenuList]);

  // const setValue = useSpeak();
  // useEffect(() => {
  //   console.log('set value');
  //   setValue(() => '이용할 매장을 화면 중앙의 버튼을 누르고 말해 주세요');
  // }, [setValue]);

  const handler = () => {
    handleScript();
    // listening이 true일 때 애니메이션? 진동? 효과
    // console.log(listening);
    if (!toggle) {
      speechParse(shopList, transcript).then(function ({ name, id }) {
        setShopInput({ name, id });
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

  width: 100%;
  height: 100%;
`;
