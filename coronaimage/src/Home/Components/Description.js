import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/core";
import doctorsSVG from "../../assets/svg/doctors.svg";
import codingSVG from "../../assets/svg/coding.svg";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <React.Fragment>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
        minH="50vh"
      >
        <Box flex="50%" order={["1", "1", "1", "1"]}>
          <Text
            mx={["3", "4", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontWeight="bold"
            fontSize={["1.6rem", "2rem", "4xl", "2.5rem"]}
            color="teal.400"
          >
            Viendo lo invisible, usando las técnicas más modernas de
            reconocimiento de imágenes
          </Text>
          <Text
            mx={["5", "5", "5", "5"]}
            my={["4", "4", "4", "5"]}
            fontSize={["lg", "xl", "xl", "1.4rem"]}
            textAlign="justify"
          >
            Gracias al uso de algoritmos de Machine Learning, CoronAImage
            analizará radiografías de tórax y determinará si el paciente es
            COVID-19 positivo, todo esto con un alto grado de precisión.
            ¡Obtendrás resultados en cuestión de segundos!
          </Text>
        </Box>
        <Box flex="50%">
          <Image alt="coding" src={codingSVG}></Image>
        </Box>
      </Flex>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
        minH="50vh"
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
            CoronAImage está diseñada para ser intuitiva y fácil de usar.
            Sabemos lo molesto que es para algunas personas usar aplicaciones
            con fondos blancos. Con el modo noche, la aplicación podrá ser usada
            durante largos periodos de tiempo sin lastimar tus ojos.
          </Text>
        </Box>
        <Box flex="50%">
          <Image alt="doctors-image" src={doctorsSVG}></Image>
        </Box>
      </Flex>
      <Flex
        direction={["column", "column", "column", "row"]}
        align="center"
        textAlign="center"
        minH="50vh"
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
            Una herramienta desarrollada por alumnos de la Escuela Superior de
            Cómputo del Instituto Politécnico Nacional (ESCOM IPN), con el
            objetivo de dar soluciones digitales para una problemática que
            vivimos hoy en día.
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
