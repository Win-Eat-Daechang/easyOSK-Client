import styled from 'styled-components';
import {
  DefaultText,
  HeaderContainer,
  LeftText,
  MicContainer,
  SectionContainer,
} from '../components/Shared/components';
import Mic from '../components/Home/Mic';

const Result = ({ shopInput, menuInput, barcode }) => {
  return (
    <ResultContainer>
      <div>
        <HeaderContainer text={'바코드 생성 결과'} />
        <SectionContainer style={{ marginTop: '64px' }}>
          <LeftText>
            <DefaultText>"{shopInput}</DefaultText>
            <br />
            <DefaultText> {menuInput}"</DefaultText>
          </LeftText>
        </SectionContainer>
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
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
