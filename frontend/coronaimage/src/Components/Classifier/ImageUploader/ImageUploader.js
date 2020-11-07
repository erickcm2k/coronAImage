import React from "react";
import { Box, Button, Flex, Input, Text, useColorMode } from "@chakra-ui/core";
import axios from "axios";

class ImageUploader extends React.Component {
  state = {
    selectedFile: null,
  };
  selectedFileHandler = (event) => {
    const validationRegex = /\.(jpg|png|jpeg)$/;
    const fileName = event.target.files[0].name;
    
    const testFilename = () => {
      if (validationRegex.exec(fileName)) {
        console.log("Good image!");
        this.setState({
          selectedFile: event.target.files[0],
        });
        return true;
      } else {
        console.log("Please submit a valid image");
        return false;
      }
    };
    
    return testFilename();
  };
  
  upload() {
    document.getElementById("upload-button").click();
  }
  
  fileUploadHandler = () => {
    const fd = new FormData();
    const URL = "url del servidor";
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
    .post(URL, fd, {
      onUploadProgress: (ProgressEvent) => {
        console
        .log
        // "Upload progess" +
        //   Math.round(
          //     (progessEvent.loaded / progressEvent.total) * 100 + "%"
          //   )
          ();
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    };
    
    render() {

      return (
        <React.Fragment>
        <Input
          id="upload-button"
          type="file"
          hidden="hidden"
          onChange={this.selectedFileHandler}
        ></Input>

        <Flex direction="column" align="center" pt='6'>
          <Box
            textAlign="center"
            bg="orange.400"
            rounded='lg'
            
            width={["80%", "80%", "80%", "50%"]}
          >
            <Flex direction="column" align="center">
              <Text
                my={["2", "3", "4", "5"]}
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                fontWeight="bold"
                color='white'
              >
                Empieza a Analizar
              </Text>
              <Text
                my={["2", "3", "4", "5"]}
                fontSize={["lg", "xl", "2xl", "2xl"]}
                color='black'
              >
                Nota: La precisión del análisis es cercana al 97%
              </Text>
              <Button
                my={["2", "3", "4", "5"]}
                onClick={this.upload}
                variantColor="blue"
              >
                Subir imagen
              </Button>
            </Flex>
          </Box>
        </Flex>
        {/* <Button onClick={this.fileUploadHandler}>Analizar</Button> */}
      </React.Fragment>
    );
  }
}

export default ImageUploader;
