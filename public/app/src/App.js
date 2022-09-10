import React from "react";

import Routes from "./routes";

import "./assets/styles/global.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "./useTheme";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
`;

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
