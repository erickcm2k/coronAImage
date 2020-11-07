import React from "react";
import { Box, Flex, Text, Image, Button, useColorMode } from "@chakra-ui/core";
import logo from "../../assets/images/coronaimage-logo.png";
import logoIpn from "../../assets/images/logo-ipn.webp";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
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
        <Box order={["1", "1", "2", "2"]}>
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
            order={["2", "2", "1", "1"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
          >
            Sabemos lo complicado que es encontrar herramientas de análisis de
            datos gratuitas y fáciles de usar, CoronAImage está aquí para ayudar
          </Text>
        </Box>
        <Box>
          <Image
            src={colorMode === "light" ? logoDark : logoLight }
            alt="logo"
          ></Image>
        </Box>
      </Flex>
      <Flex align="center" justify="center">
        <Button my="5" variantColor="green">
          ¡Comenzar!
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default Hero;
