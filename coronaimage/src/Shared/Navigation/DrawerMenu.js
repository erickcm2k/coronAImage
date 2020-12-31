import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useColorMode,
  Flex,
  Link,
} from "@chakra-ui/core";
import React from "react";
const DrawerMenu = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Drawer
      size="xs"
      isOpen={props.propIsOpen}
      placement="top"
      onClose={props.propOnClose}
      finalFocusRef={props.buttonReference}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>CoronAImage</DrawerHeader>

        <DrawerBody>
          <Flex direction="column">
            <Link
              mt="4"
              textDecor="underline"
              href="https://github.com/erickcm2k/OODesignAndAnalysis"
              target="_blank"
            >
              Acerca de
            </Link>
            <Button
              mt="4"
              as={"a"}
              variantColor="teal"
              href="https://www.google.com.mx/"
              rightIcon="question"
              target="_blank"
            >
              Ayuda
            </Button>
            <Button
              mt="4"
              variantColor="teal"
              rightIcon={colorMode === "light" ? "moon" : "sun"}
              onClick={toggleColorMode}
            >
              {`Modo ${colorMode === "light" ? "noche" : "día"}`}
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerMenu;
