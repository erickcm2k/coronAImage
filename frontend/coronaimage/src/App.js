import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import "./Components/Layout/Layout";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Layout />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
