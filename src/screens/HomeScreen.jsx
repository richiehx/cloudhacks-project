import React from "react";
import {
  Card,
  CardBody,
  Flex,
  Text,
  Image,
  Link,
  Stack,
  Heading,
} from "@chakra-ui/react";

const HomeScreen = () => {
  const subjects = ["Physics", "Math", "Chemistry"];

  return (
    <Stack py={48} align={"center"} direction={"column"} gap={24}>
      <Heading>Choose a Subject to Revise!</Heading>
      <Flex justify={"center"} gap={24}>
        {subjects.map((subject, index) => (
          <Card justify={"center"} as={Link} key={index} href={"/" + subject}>
            <CardBody>
              <Image
                src={"/images/" + subject + ".jpg"}
                height="192px"
                width="192px"
              ></Image>
              <Text>{subject}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Stack>
  );
};

export default HomeScreen;
