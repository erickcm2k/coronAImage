import React from "react";
import { Text, Box, Image } from "@chakra-ui/core";
import errorSVG from "../../assets/svg/server_down.svg";
const AnalysisResults = (props) => {
  return (
    <>
      <Box
        backgroundColor="teal.600"
        padding="4"
        borderRadius="5px"
        textAlign="left"
        width="70%"
      >
        <Text
          color="white"
          fontSize={["lg", "lg", "xl", "xl"]}
          fontWeight="bold"
          textAlign="center"
          pb="2"
        >
          {props.isError
            ? "El servicio no se encuentra disponible por el momento. Inténtalo más tarde."
            : "Resultados"}
        </Text>
        {props.isError ? (
          <>
            <Image src={errorSVG}></Image>
          </>
        ) : (
          <>
            <Text
              color="white"
              fontWeight="bold"
              textAlign="center"
              pb="2"
            ></Text>
            <Text color="white">
              Paciente contagiado:{" "}
              <strong>{props.infected === "Covid19+" ? "Sí" : "No"}</strong>
            </Text>
            {props.precision > 0 && (
              <Text color="white">
                Grado de infección:{" "}
                <strong>{props.precision}%</strong>
              </Text>
            )}
          </>
        )}
      </Box>
      )
    </>
  );
};

export default AnalysisResults;
