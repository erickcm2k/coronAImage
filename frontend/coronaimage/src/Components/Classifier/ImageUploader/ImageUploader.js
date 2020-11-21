import React from "react";

import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/core";
import axios from "axios";

class ImageUploader extends React.Component {
  state = {
    image: null,
    imageURL: null,
    invalidImage: false,
  };
  validateImage = (event) => {
    const validationRegex = /\.(jpg|png|jpeg)$/;
    let fileName;
    try {
      fileName = event.target.files[0].name.toLowerCase();
    } catch (e) {
      return false;
    }
    this.setState({ fileName });

    const testFilename = () => {
      if (validationRegex.exec(fileName)) {
        const Mb = 1000;
        const fileSize = Math.round(event.target.files[0].size / 1024);

        if (fileSize > Mb * 20) {
          return false;
        }
        this.setState({
          image: event.target.files[0],
          imageURL: URL.createObjectURL(event.target.files[0]),
          invalidImage: false,
          imageName: event.target.files[0].name,
        });
        return true;
      } else {
        this.setState({
          image: null,
          imageURL: null,
          invalidImage: true,
        });
        return false;
      }
    };

    return testFilename();
  };

  upload() {
    document.getElementById("upload-button").click();
  }

  fileUploadHandler = () => {
    this.setState({ activateLoading: true });
    const fd = new FormData();
    const URL = "url del servidor";
    fd.append("image", this.state.image, this.state.image.name);
    axios
      .post(URL, fd, {
        onUploadProgress: (progressEvent) => {
          console.log(
            `Upload progess: ${
              Math.round(progressEvent.loaded / progressEvent.total) * 100
            }%`
          );
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
          onChange={this.validateImage}
        ></Input>

        <Flex direction="column" align="center" p="6" justify="center">
          <Box
            textAlign="center"
            bg={this.props.bg}
            rounded="lg"
            width={["80%", "80%", "80%", "50%"]}
          >
            <Flex direction="column" align="center" p="1">
              <Text
                my={["2", "3", "4", "5"]}
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                fontWeight="bold"
                color={this.props.textColor}
              >
                Empieza a Analizar
              </Text>
              <Text
                my={["2", "3", "4", "5"]}
                fontSize={["lg", "xl", "2xl", "2xl"]}
                color={this.props.textColor}
              >
                <strong>Importante: </strong> Solo subir imágenes con extensión
                .png, .jpg o .jpeg.
              </Text>
              {this.state.invalidImage && (
                <Text
                  my={["2", "3", "4", "5"]}
                  fontSize={["mg", "lg", "lg", "xl"]}
                  color="salmon"
                >
                  <strong>Error: </strong> El archivo {this.state.fileName} no
                  tiene una extensión válida. Es necesario subir una imagen
                  válida.
                </Text>
              )}

              <Flex align="center">
                <Button
                  my={["2", "3", "4", "5"]}
                  onClick={this.upload}
                  variantColor="teal"
                >
                  Subir imagen
                </Button>
                {this.state.imageURL && (
                  <Button onClick={this.fileUploadHandler}>Analizar</Button>
                )}
              </Flex>
              {this.state.activateLoading && (
                <Box>
                  <Text color={this.props.textColor}>
                    Procesando imagen, espere por favor.
                  </Text>
                  <Spinner color={this.props.textColor}></Spinner>
                </Box>
              )}
              <Box alt="radiography">
                <Image src={this.state.imageURL} boxSize="sm" p="5"></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </React.Fragment>
    );
  }
}

export default ImageUploader;
