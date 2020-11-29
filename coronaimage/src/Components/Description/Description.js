import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/core";
import doctorsImage from "../../assets/images/doctors.png";
import aiImage from "../../assets/images/ai.png";
// import doctorsImage from "../../assets/svg/doctors.svg";
// import aiImage from "../../assets/svg/ai.svg";
import logoIPN from "../../assets/images/ipn_white.png";
import classes from "./Description.module.css";
const Description = () => {
  return (
    <React.Fragment>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
      >
        <Box flex="50%" order={["1", "1", "1", "1"]}>
          <Text
            mx={["3", "4", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontWeight="bold"
            fontSize={["1.6rem", "2rem", "4xl", "2.5rem"]}
            color="teal.400"
          >
            Viendo lo invisible, usando las técnicas de más modernas de
            reconocimiento de imágenes
          </Text>
          <Text
            mx={["5", "5", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            elit cursus pulvinar id in ullamcorper rhoncus, augue. Lorem tellus
            tincidunt risus cras id. Ultrices vel, adipiscing vulputate sed
            consectetur turpis sed lacus elit. Leo amet amet, adipiscing purus
            turpis ornare.
          </Text>
        </Box>
        <Box flex="50%">
          <Image src={aiImage} alt="logo"></Image>
        </Box>
      </Flex>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
      >
        <Box flex="50%" order={["1", "1", "1", "0"]}>
          <Text
            mx={["3", "4", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontWeight="bold"
            fontSize={["1.6rem", "2rem", "4xl", "2.5rem"]}
            color="teal.400"
          >
            Fácil de usar y amigable con la vista
          </Text>
          <Text
            mx={["5", "5", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            elit cursus pulvinar id in ullamcorper rhoncus, augue. Lorem tellus
            tincidunt risus cras id. Ultrices vel, adipiscing vulputate sed
            consectetur turpis sed lacus elit. Leo amet amet, adipiscing purus
            turpis ornare.
          </Text>
        </Box>
        <Box flex="50%">
          <Image src={doctorsImage} alt="logo"></Image>
        </Box>
      </Flex>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
      >
        <Box flex="50%" order={["1", "1", "1", "1"]}>
          <Text
            mx={["3", "4", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontWeight="bold"
            fontSize={["1.6rem", "2rem", "4xl", "2.5rem"]}
            color="teal.400"
          >
            Desarrollado por alumnos del IPN
          </Text>
          <Text
            mx={["5", "5", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            elit cursus pulvinar id in ullamcorper rhoncus, augue. Lorem tellus
            tincidunt risus cras id. Ultrices vel, adipiscing vulputate sed
            consectetur turpis sed lacus elit. Leo amet amet, adipiscing purus
            turpis ornare.
          </Text>
        </Box>
        <Box flex="50%">
          <figure className={classes.picture}></figure>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Description;
