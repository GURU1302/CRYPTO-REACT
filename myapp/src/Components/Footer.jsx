import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/123271428?v=4";
const avatarSrc2 = "https://avatars.githubusercontent.com/u/116997987?v=4";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Track crypto trends with real-time graphs on our website. 
           <br />
           Analyze market trends, compare coins, and make informed decisions.
          </Text>
        </VStack>

        <VStack>
            <HStack>
            
            <VStack>
            <a href="https://github.com/GURU1302" target="blank"> <Avatar cursor={"pointer"} boxSize={"28"} mt={["4", "0"]} src={avatarSrc2} /></a>
            <Text>  PIYUSH </Text>
            </VStack>
            <VStack>
            <a href="https://github.com/one-saurabhsingh" target="blank"> <Avatar cursor={"pointer"} boxSize={"28"} mt={["4", "0"]} src={avatarSrc} /></a>
            <Text>  SAURABH </Text>
            </VStack>
           
            </HStack>
          <Text>  Our Founders  </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;