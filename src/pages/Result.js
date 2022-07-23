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
import { useNavigate } from 'react-router-dom';

const Result = ({ shopInput, menuInput, barcode }) => {
  console.log(shopInput);
  console.log(menuInput);
  console.log(barcode);

  const test = JSON.stringify(barcode.barcode);
  const test1 = JSON.stringify(shopInput.name);

  console.log(test);
  console.log(test1);

  // const setValue = useSpeak();
  // useEffect(() => {
  //   console.log('set value');
  //   setValue(
  //     () => '바코드가 생성되었습니다. 키오스크에 바코드를 인식해 주세요.'
  //   );
  // }, [setValue]);

  const navigate = useNavigate();
  // menu set 되면 화면 전환
  useEffect(() => {
    if (barcode.id === 0) {
      navigate('/home');
    }
  }, [barcode, navigate]);

  return (
    <ResultContainer>
      <div>
        <HeaderContainer text={'바코드 생성 결과'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          {test1 ? (
            <LeftText>
              <DefaultText>{shopInput.name}</DefaultText>
              <br />
              <DefaultText>{menuInput.name}</DefaultText>
            </LeftText>
          ) : (
            <span>menu 없음</span>
          )}
        </SectionContainer>
      </div>

      {test !== '' ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Barcode value={test} width="2" />
        </div>
      ) : (
        <span>hi</span>
      )}
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
