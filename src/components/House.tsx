import React from "react";
import {
  Box,
  Heading,
  Stat,
  StatNumber,
  Image,
  Icon,
  StatHelpText,
} from "@chakra-ui/core";

type HouseProps = {
  owner: string;
  address: string;
  price: number;
  src: string;
};

export default function House({
  owner,
  address,
  price,
  src,
  ...rest
}: HouseProps) {
  return (
    <Box
      w="40%"
      rounded="lg"
      alignItems="center"
      shadow="md"
      borderWidth="1px"
      overflow="hidden"
      {...rest}
    >
      <Box>
        <Box position="relative">
          <Heading
            borderRadius="3px"
            size="xs"
            position="absolute"
            color="white"
            p="2"
            bg="#0000008a"
            fontSize="sm"
          >
            <Icon mr="5px" name="view" />
            {owner}
          </Heading>
        </Box>
        <Image
          htmlWidth="250px"
          width="100%"
          src={src}
          m="0"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>
      <Stat p={5}>
        <StatNumber>
          ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </StatNumber>
        <StatHelpText>{address}</StatHelpText>
      </Stat>
    </Box>
  );
}
