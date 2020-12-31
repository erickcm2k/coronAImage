import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Progress,
} from "@chakra-ui/core";
import AnalysisResults from "./AnalysisResults";
import axios from "axios";

const ImageUploader = (props) => {
  const hiddenUploadButton = useRef();
  const clickHiddenUploadButton = () => {
    hiddenUploadButton.current.click();
  };

  const submitButton = useRef();

  const [filename, setFilename] = useState("");
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState("");
  const [pictureInvalid, setPictureInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgess] = useState(0);
  const [analysisResult, setAnalysisResult] = useState({
    infected: "",
    precision: "",
    hasResult: false,
  });

  const validateImage = (e) => {
    const validateExtension = (fName) => {
      const extRegex = /\.(jpg|png|jpeg)$/;
      return extRegex.exec(fName) !== null;
    };

    const validateSize = (fSize) => {
      const Mb = 1000;
      return fSize < Mb * 20;
    };

    if (e.target.files[0]) {
      const fName = e.target.files[0].name.toLowerCase();
      const fSize = Math.round(e.target.files[0].size / 1024);

      // Picture is valid
      if (validateExtension(fName) && validateSize(fSize)) {
        setFilename(fName);
        setImage(e.target.files[0]);
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setPictureInvalid(false);

        return true;
      } else {
        // Picture is not valid
        setFilename(fName);
        setImage(null);
        setImageURL(null);
        setPictureInvalid(true);
        return false;
      }
    } else {
      // Aborted selection
      return false;
    }
  };

  const uploadToServer = async () => {
    setIsLoading(true);
    const fd = new FormData();
    const serverURL = "http://192.168.0.2:3000";

    fd.append("image", image, "here the image name");

    await axios
      .post(serverURL, fd, {
        onUploadProgress: (progressEvent) => {
          let currentProgess = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgess(currentProgess);
          // console.log(currentProgess);
          if (currentProgess === 100) {
            setIsLoading(false);
            setUploadProgess(0);
          }
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setAnalysisResult({
          infected: res.data.acceptedImage,
          precision: res.data.precision,
          hasResult: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsLoading(false);
        setUploadProgess(0);
      });
  };

  return (
    <React.Fragment>
      <Input
        ref={hiddenUploadButton}
        id="upload-button"
        type="file"
        hidden="hidden"
        onChange={(e) => validateImage(e)}
      ></Input>
      <Flex direction="column" align="center" p="6" justify="center">
        <Box
          textAlign="center"
          bg={props.bg}
          rounded="lg"
          width={["100%", "80%", "80%", "50%"]}
        >
          <Flex direction="column" align="center" p="1">
            <Text
              my={["2", "3", "4", "5"]}
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight="bold"
              color={props.textColor}
            >
              Empieza a Analizar
            </Text>
            <Text
              my={["2", "3", "4", "5"]}
              fontSize={["lg", "xl", "2xl", "2xl"]}
              color={props.textColor}
            >
              <strong>Importante: </strong> Solo subir imágenes con extensión
              .png, .jpg o .jpeg.
            </Text>

            {!image && pictureInvalid && (
              <Text
                my={["2", "3", "4", "5"]}
                fontSize={["mg", "lg", "lg", "xl"]}
                color="salmon"
              >
                <strong>
                  Error: El archivo {filename} no es válido. Es necesario subir
                  una imagen válida.
                </strong>
              </Text>
            )}

            <Flex align="center">
              <Flex
                align="center"
                direction={["column", "column", "row", "row"]}
              >
                <Button
                  disabled={isLoading}
                  my={["2", "3", "4", "5"]}
                  onClick={clickHiddenUploadButton}
                  variantColor="teal"
                  m={["2", "2", "4", "5"]}
                >
                  Seleccionar imagen
                </Button>
                {imageURL && (
                  <Button
                    disabled={isLoading}
                    ref={submitButton}
                    m={["2", "2", "4", "5"]}
                    variantColor="green"
                    onClick={uploadToServer}
                  >
                    Analizar
                  </Button>
                )}
              </Flex>
            </Flex>
            {isLoading && imageURL && (
              <Box>
                <Text color={props.textColor}>
                  Cargando imagen. {uploadProgress}%
                </Text>

                <Progress hasStripe value={uploadProgress}></Progress>
              </Box>
            )}

            {analysisResult.hasResult && (
              <AnalysisResults
                textColor={props.textColor}
                infected={analysisResult.infected}
                precision={analysisResult.precision}
              ></AnalysisResults>
            )}

            <Box alt="radiography">
              <Image src={imageURL} boxSize="sm" p="5"></Image>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default ImageUploader;
