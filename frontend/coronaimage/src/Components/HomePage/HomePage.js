import React from "react";
import {
  Button,
  Flex,
  useToast,
  useColorMode,
  FormControl,
  Input,
  Spinner,
} from "@chakra-ui/core";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
const HomePage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
    </React.Fragment>
  );
};

export default HomePage;
