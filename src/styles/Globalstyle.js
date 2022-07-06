import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import COLORS from '../constants/colors';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  a{
    text-decoration-line : none;
    color: black;
  }
  // You can continue writing global styles here
  body {
    width: 100vw;
    height: 100vh;

    /* Center Container */
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    background-color: ${COLORS.background};
  }
  button:hover {
    cursor: pointer
  }
`;
