import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    background: url("/bg-desktop.svg") no-repeat center center fixed;
    background-color: ${({ theme }) => theme.colors.background};
    background-size: cover;
    
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    html {
      background-image: url("/bg-mobile.svg");
    }
  }

 
`;

export default GlobalStyles;
