import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from "./Shared/Navigation/Navbar";
import Container from "./Shared/UIElements/Containers/Container";
import Home from "./Home/Pages/Home";
import Analysis from "./Analysis/Pages/Analysis";
import Footer from "./Shared/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Container>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/analysis" component={Analysis} />
              <Redirect to="/" />
            </Switch>
          </Container>
          <Footer />
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
