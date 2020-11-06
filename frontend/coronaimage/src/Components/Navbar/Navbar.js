import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/core";

const NavbarLink = ({ children, ...props }) => (
  <Link {...props} ml={5}>
    {children}
  </Link>
);
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100%" h="75px" bg="transparent" position="fixed">
      <Flex
        align="center"
        width="90%"
        justify="space-between"
        maxWidth="1000px"
        margin="0 auto"
      >
        <Text ml="10px" fontWeight="bold" fontSize="1.8rem">
          CoronAImage
        </Text>
        {/* Display for desktop */}
        <Box display={{ base: "none", md: "block" }}>
          <NavbarLink
            href="https://github.com/erickcm2k/OODesignAndAnalysis"
            target="_blank"
          >
            Acerca de
          </NavbarLink>

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
        <Box ml="5" display={{ sm: "block", md: "none" }}>
          <Menu>
            <MenuButton as={Button} rightIcon="arrow-down">
              Más
            </MenuButton>
            <MenuList>
              <Flex direction="column" width="80%" margin="0 auto">
                <MenuItem
                  textDecoration="underline"
                  as={"a"}
                  href="https://github.com/erickcm2k/OODesignAndAnalysis"
                  target="_blank"
                >
                  Acerca de
                </MenuItem>
                <MenuDivider />
                <Button
                  mb="2"
                  mt="1"
                  variantColor="teal"
                  href="#about"
                  rightIcon="question"
                >
                  Ayuda
                </Button>
                <Button
                  mb="2"
                  variantColor="teal"
                  rightIcon={colorMode === "light" ? "moon" : "sun"}
                  onClick={toggleColorMode}
                >
                  {`Modo ${colorMode === "light" ? "noche" : "día"}`}
                </Button>
              </Flex>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Navbar;
