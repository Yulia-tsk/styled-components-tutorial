import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url("/bg-desktop.svg");
    background-color: ${({ theme }) => theme.colors.background};
    background-repeat: no-repeat;
    background-size: cover;
    
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    body {
      background-image: url("/bg-mobile.svg");
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    body {
      max-width: 95vw;
      margin: 0 auto; /* Only centers if width < 100% */
    }
  }
`;

export default GlobalStyles;
