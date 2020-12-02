import React from "react";

import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Progress,
  Spinner,
} from "@chakra-ui/core";
import axios from "axios";

class ImageUploader extends React.Component {
  state = {
    image: null,
    imageURL: null,
    invalidImage: false,
    uploadProgess: 0,
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
    const URL = "http://localhost:3000";

    fd.append("image", this.state.image, this.state.image.name);
    axios
      .post(URL, fd, {
        onUploadProgress: (progressEvent) => {
          let uploadProgess = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          this.setState({ uploadProgess });
          console.log(uploadProgess);
        },
      })
      .then((res) => {
        console.log(res.data);
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
            width={["100%", "80%", "80%", "50%"]}
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
                  <strong>
                    Error: El archivo {this.state.fileName} no es válido. Es
                    necesario subir una imagen válida.
                  </strong>
                </Text>
              )}

              <Flex align="center">
                <Flex
                  align="center"
                  direction={["column", "column", "row", "row"]}
                >
                  <Button
                    my={["2", "3", "4", "5"]}
                    onClick={this.upload}
                    variantColor="teal"
                    m={["2", "2", "4", "5"]}
                  >
                    Seleccionar imagen
                  </Button>
                  {this.state.imageURL && (
                    <Button
                      m={["2", "2", "4", "5"]}
                      variantColor="green"
                      onClick={this.fileUploadHandler}
                    >
                      Analizar
                    </Button>
                  )}
                </Flex>
              </Flex>
              {this.state.activateLoading && this.state.imageURL && (
                <Box>
                  <Text color={this.props.textColor}>
                    Cargando imagen. {this.state.uploadProgess}%
                  </Text>

                  <Progress
                    hasStripe
                    value={this.state.uploadProgess}
                  ></Progress>
                </Box>
              )}
              {this.state.uploadProgess === 100 && this.state.image && (
                <Box>
                  <Text color={this.props.textColor}>
                    Analizando imagen. Espere, por favor.
                  </Text>
                  <Spinner color={this.props.textColor} my="3"></Spinner>
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
