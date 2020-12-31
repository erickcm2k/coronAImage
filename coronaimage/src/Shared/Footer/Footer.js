import React from "react";
import { Flex, List, ListItem, Box, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Flex minH="50vh" backgroundColor="teal.400" flexDir="row" justify="space-evenly" align="center">
      <Box alignSelf="center">
        <Text pb="1rem" fontWeight="bold" fontSize={['1rem', '1.2rem','1.5rem','1.5rem']}>
          Cliente Web
        </Text>
        <List styleType="disc">
          <ListItem>Erick Castañeda</ListItem>
        </List>
      </Box>
      <Box alignSelf="center">
        <Text pb="1rem" fontWeight="bold" fontSize={['1rem', '1.2rem','1.5rem','1.5rem']}>
          Lógica de IA
        </Text>
        <List styleType="disc">
          <ListItem>Moisés Arango</ListItem>
          <ListItem>Miguel A. Monteros</ListItem>
          <ListItem>Iván Cano</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Footer;
