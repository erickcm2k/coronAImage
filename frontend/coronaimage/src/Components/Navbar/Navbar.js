import React from "react";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
  useDisclosure,
  Image
} from "@chakra-ui/core";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoIpn from "../../assets/images/logo-ipn.webp";
import iconDark from "../../assets/images/icon-dark.png";
import iconLight from "../../assets/images/icon-light.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w="100%" h="75px">
      <Flex
        align="center"
        width="90%"
        justify="space-between"
        maxWidth="1000px"
        margin="0 auto"
      >
        {/* <Text ml="10px" fontWeight="bold" fontSize="1.8rem">
          CoronAImage
        </Text> */}
        {/* <Image width='220px' src={colorMode === "light" ? logoDark : logoLight}/> */}
        {/* <Image width='100px' src={colorMode === "light" ? iconDark : iconLight}/> */}
        <Image width='80px' src={logoIpn}/>
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

          <Button ml="5" variantColor="teal" href="#about" rightIcon="question">
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
    </Flex>
  );
};
export default Navbar;
