import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Classifier from "../Classifier/Classifier";
import Container from "../../Containers/Container";
import { Route, Switch } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/analyse" component={Classifier} />
      </Switch>
    </Container>
  );
};

export default HomePage;
