import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Progress,
  Spinner,
} from "@chakra-ui/core";
import AnalysisResults from "./AnalysisResults";
import axios from "axios";

const ImageUploader = (props) => {
  // const hiddenUploadButton = useRef();
  // const clickHiddenUploadButton = () => {
  //   hiddenUploadButton.current.click();
  // };

  const submitButton = useRef();
  const [error, setError] = useState(false);
  const [filename, setFilename] = useState("");
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState("");
  const [pictureInvalid, setPictureInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgess] = useState(0);
  const [analysisResult, setAnalysisResult] = useState({
    infected: "",
    precision: "",
    hasResult: false,
  });

  const validateImage = (e) => {
    setError(false);
    setAnalysisResult({ hasResult: false });
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

  const onSubmit = async () => {
    setError(false);
    setAnalysisResult({ hasResult: false });
    setIsLoading(true);
    // Google Cloud server
    const url = "http://34.68.115.100:5000/model/covid19/";
    // Dummy server
    // const url = "http://192.168.0.6:3000";

    var myform = document.forms["myForm"];
    var formData = new FormData(myform);

    await axios
      .post(url, formData, {
        onUploadProgress: (progressEvent) => {
          let currentProgess = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgess(currentProgess);
          if (currentProgess === 100) {
            setIsLoading(false);
            setIsAnalyzing(true);
            setUploadProgess(0);
          }
        },
      })
      .then((res) => {
        // For real server
        setIsAnalyzing(true);
        setAnalysisResult({
          infected: res.data.predictions[0].label,
          precision: res.data.predictions[0].score.toFixed(2),
          hasResult: true,
        });
        // For dummy server
        // setIsAnalyzing(true);
        // setAnalysisResult({
        //   infected: res.data.label,
        //   precision: res.data.score,
        //   hasResult: true,
        // });
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        setIsLoading(false);
        setIsLoading(false);
        setUploadProgess(0);
      });
    setIsAnalyzing(false);
    setIsLoading(false);
  };

  const hiddenSubmitButton = useRef();
  const hiddenFilePicker = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form name="myForm" onSubmit={handleFormSubmit}>
        <input
          hidden="hidden"
          onChange={(e) => validateImage(e)}
          ref={hiddenFilePicker}
          type="file"
          name="file"
        />
        <button hidden="hidden" ref={hiddenSubmitButton} type="submit">
          Analizar
        </button>
      </form>
      <React.Fragment>
        <Flex direction="column" align="center" mb="6" justify="center">
          <Box
            textAlign="center"
            bg={props.bg}
            rounded="lg"
            width={["100%", "80%", "80%", "70%"]}
            minH="100vh"
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
                    Error: El archivo {filename} no es válido. Es necesario
                    subir una imagen válida.
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
                    onClick={() => hiddenFilePicker.current.click()}
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
                      onClick={() => hiddenSubmitButton.current.click()}
                    >
                      Analizar
                    </Button>
                  )}
                </Flex>
              </Flex>
              {isLoading && (
                <Box>
                  <Text color={props.textColor}>
                    Cargando imagen. {uploadProgress}%
                  </Text>

                  <Progress hasStripe value={uploadProgress}></Progress>
                </Box>
              )}
              {isAnalyzing && (
                <Box>
                  <Text color={props.textColor} pb="2">
                    Analizando imagen...
                  </Text>
                  <Spinner color="blue.500"></Spinner>
                </Box>
              )}

              {(analysisResult.hasResult || error) && (
                <AnalysisResults
                  textColor={props.textColor}
                  infected={analysisResult.infected}
                  precision={analysisResult.precision}
                  isError={error}
                ></AnalysisResults>
              )}

              <Box alt="radiography">
                <Image src={imageURL} maxHeight="70vh" p="5"></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </React.Fragment>
    </>
  );
};

export default ImageUploader;

// const uploadToServer = async () => {
//   setIsLoading(true);
//   const fd = new FormData();
//   const serverURL = "http://192.168.0.2:3000";

//   fd.append("image", image, "here the image name");

//   await axios
//     .post(serverURL, fd, {
//       onUploadProgress: (progressEvent) => {
//         let currentProgess = Math.round(
//           (progressEvent.loaded / progressEvent.total) * 100
//         );
//         setUploadProgess(currentProgess);
//         // console.log(currentProgess);
//         if (currentProgess === 100) {
//           setIsLoading(false);
//           setUploadProgess(0);
//         }
//       },
//     })
//     .then((res) => {
//       console.log(res.data);
//       setIsLoading(false);
//       setAnalysisResult({
//         infected: res.data.acceptedImage,
//         precision: res.data.precision,
//         hasResult: true,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       setIsLoading(false);
//       setIsLoading(false);
//       setUploadProgess(0);
//     });
// };
