import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  useColorMode,
} from "@chakra-ui/core";
import "./Components/HomePage/HomePage";
import HomePage from "./Components/HomePage/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <HomePage />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
