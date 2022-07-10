import COLORS from '../../constants/colors';
import styled from 'styled-components';

export const HeaderContainer = ({ text }) => {
  return (
    <header style={{ marginTop: '60px' }}>
      <h2>{text}</h2>
    </header>
  );
};

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background: ${COLORS.iconBackPrimary};
  border-radius: 50%;
`;

export const MicContainer = styled.section`
  display: flex;
  align-self: center;
  margin-bottom: 84px;
`;

export const LeftText = styled.h1`
  white-space: pre-wrap;
`;

export const RightText = styled.h1`
  margin-top: 16px;
  display: flex;
  justify-content: right;
  white-space: pre-wrap;
`;

export const DefaultText = styled.span``;

export const RedText = styled.span`
  color: #ff2929;
`;
