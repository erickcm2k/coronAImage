import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import "./Components/Layout/Layout";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Layout />
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
