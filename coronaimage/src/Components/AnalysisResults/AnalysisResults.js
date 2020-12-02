import React from "react";
import { Text } from "@chakra-ui/core";

const AnalysisResults = (props) => {
  return (
    <React.Fragment>
      <Text color={props.textColor}>
        Paciente contagiado {props.infected === 1 ? "Sí" : "No"}
      </Text>
      <Text color={props.textColor}>
        <div>Precisión del análisis {props.precision}</div>
      </Text>
    </React.Fragment>
  );
};

export default AnalysisResults;
