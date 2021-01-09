import React from "react";
import DrawerMenu from "./DrawerMenu";

import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import userManual from "../../assets/pdf/Manual-de-uso-CoronAImage.pdf";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w="100%" h="75px" align="center" justify="space-between">
      <Text ml="10px" fontWeight="bold" fontSize="1.8rem">
        Coron<strong style={{ color: "rgb(58,174,150)" }}>AI</strong>mage
      </Text>
      {/* <Image
        width={["150px", "200px", "220px", "220px"]}
        src={colorMode === "light" ? lightNotext : darkNotext}
      /> */}
      {/* <Image width='220px' src={colorMode === "light" ? logoDark : logoLight}/>  */}
      {/* <Image width='100px' src={colorMode === "light" ? iconDark : iconLight}/> */}
      {/* <Image width='80px' src={logoIpn}/> */}
      {/* 
        
        Display for desktop
        
        */}
      <Box display={{ base: "none", md: "block" }}>
        <Link
          href="https://github.com/erickcm2k/OODesignAndAnalysis"
          target="_blank"
        >
          Acerca de
        </Link>

        <Button
          ml="5"
          variantColor="teal"
          href="#about"
          rightIcon="question"
          onClick={() => window.open(userManual)}
        >
          Ayuda
        </Button>
        <Button
          ml="5"
          variantColor="teal"
          rightIcon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
        >
          {`Modo ${colorMode === "light" ? "noche" : "día"}`}
        </Button>
      </Box>
      {/* 
        
        For mobile

        */}

      <Box display={{ sm: "block", md: "none" }}>
        <Button
          rightIcon="arrow-down"
          ref={btnRef}
          variantColor="teal"
          onClick={onOpen}
        >
          Más
        </Button>
        <DrawerMenu
          propIsOpen={isOpen}
          propOnClose={onClose}
          buttonReference={btnRef}
        />
      </Box>
    </Flex>
  );
};
export default Navbar;
