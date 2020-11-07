import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Classifier from "../Classifier/Classifier";
const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Hero /> */}
      <Classifier />
    </React.Fragment>
  );
};

export default HomePage;
