import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import COLORS from '../constants/colors';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  // You can continue writing global styles here
  body {
    padding: 0;
    background-color: ${COLORS.background};
  }
`;
