import React from "react";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import Description from "../Description/Description";
import { Box, Flex, Text, Image, Button, useColorMode } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment>
      <Flex
        justify="space-around"
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
            textTransform="capitalize"
          >
            Una herramienta de libre acceso para estudiantes y profesionales de
            la salud
          </Text>
          <Text
            mx={["5", "5", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
          >
            Sabemos lo complicado que es encontrar herramientas de análisis de
            datos gratuitas y fáciles de usar, CoronAImage está aquí para ayudar
          </Text>
        </Box>
        <Box flex="50%">
          <Image
            src={colorMode === "light" ? logoDark : logoLight}
            alt="logo"
          ></Image>
        </Box>
      </Flex>
      <Flex align="center" justify="center">
        <Link to={{ pathname: "/analyse" }}>
          <Button my="5" variantColor="green">
            ¡Comenzar!
          </Button>
        </Link>
      </Flex>
      <Description />
    </React.Fragment>
  );
};

export default Hero;
