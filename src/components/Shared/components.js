import COLORS from '../../constants/colors';
import styled from 'styled-components';

export const HeaderContainer = ({ text }) => {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  );
};

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background: ${COLORS.iconBackPrimary};
  border-radius: 50%;
`;
