import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Classifier from "../Classifier/Classifier";
import { Route } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Hero} />
      <Route exact path="/analyse" component={Classifier} />
    </React.Fragment>
  );
};

export default HomePage;
