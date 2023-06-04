import { colors } from "@/constants/colors";
import { Toaster } from "react-hot-toast";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    font-family: Rubik;
    box-sizing: border-box;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: #1A1C22;
    margin: 0;
  }

  button {
    font-family: Rubik;
  }
  
  input {
  /* default */
  caret-color: ${colors.GREEN_BRIGHT};
}

  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
