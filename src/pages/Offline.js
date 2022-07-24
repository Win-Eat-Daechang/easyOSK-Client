import styled from 'styled-components';
import {
  DefaultText,
  HeaderContainer,
  LeftText,
  MicContainer,
  SectionContainer,
} from '../components/Shared/components';
import Mic from '../components/Home/Mic';
// import { useEffect } from 'react';
// import useSpeak from '../hooks/useSpeak';

const Offline = () => {
  // const setValue = useSpeak();
  // useEffect(() => {
  //   console.log('set value');
  //   setValue(() => '네트워크 연결을 확인해 주세요');
  // }, [setValue]);

  return (
    <HomeContainer>
      <div>
        <HeaderContainer text={'홈'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>"네트워크</DefaultText>
            <br />
            <DefaultText> 연결을 확인해 주세요"</DefaultText>
          </LeftText>
        </SectionContainer>
      </div>
      {/* 마이크 클릭 시 네트워크 확인하라고 말해줌 */}
      <MicContainer>
        <Mic />
      </MicContainer>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
`;

export default Offline;
