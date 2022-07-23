import styled from 'styled-components';
import {
  DefaultText,
  HeaderContainer,
  LeftText,
  MicContainer,
  SectionContainer,
} from '../components/Shared/components';
import Mic from '../components/Home/Mic';
import Barcode from 'react-barcode';
import useSpeak from '../hooks/useSpeak';
import { useEffect } from 'react';

const Result = ({ shopInput, menuInput, barcode }) => {
  // const setValue = useSpeak();
  // useEffect(() => {
  //   console.log('set value');
  //   setValue(
  //     () => '바코드가 생성되었습니다. 키오스크에 바코드를 인식해 주세요.'
  //   );
  // }, [setValue]);
  return (
    <ResultContainer>
      <div>
        <HeaderContainer text={'바코드 생성 결과'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>"{shopInput.name}</DefaultText>
            <br />
            <DefaultText> {menuInput}"</DefaultText>
          </LeftText>
        </SectionContainer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Barcode value="6650515786883629" width="2" />
      </div>
      <MicContainer>
        <Mic />
      </MicContainer>
    </ResultContainer>
  );
};
export default Result;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
`;
