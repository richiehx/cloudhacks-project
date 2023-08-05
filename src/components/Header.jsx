import { Box, Flex, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box bg={"#e4e3e3"} px={4}>
      <Flex h={16} alignItems={"center"} px={14} py={10}>
        <Box as={Link} href="/" p={4} borderRadius={10}>
          <Image src="/images/logo.png" height="80px"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
