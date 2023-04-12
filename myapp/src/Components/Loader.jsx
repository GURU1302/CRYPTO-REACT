import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"lg"} />
     
      </Box>
      <Heading p={35}>Loading ...</Heading>
    </VStack>
  );
};

export default Loader;
