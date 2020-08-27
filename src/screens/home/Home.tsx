import React, { FC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";
import { List } from "../../components";

export const Home: FC = () => {
  return (
    <Flex
      maxH="90vh"
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Heading p="5">Infinite Scroll</Heading>
      <Box w="75%" borderColor="#BABABA" overflow="scroll">
        <List />
      </Box>
    </Flex>
  );
};
