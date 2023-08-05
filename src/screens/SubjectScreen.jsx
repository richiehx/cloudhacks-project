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
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SubjectScreen = () => {
  const { subject } = useParams();

  const difficulties = ["Easy", "Hard", "Progressive"];

  return (
    <Stack py={48} align={"center"} direction={"column"} gap={24}>
      <Stack gap={24}>
        <Button as={Link} href="/" bg="blue.400">
          Back
        </Button>
        <Heading>Choose a Difficulty!</Heading>
      </Stack>

      <Flex justify={"center"} gap={24}>
        {difficulties.map((difficulty, index) => (
          <Card
            justify={"center"}
            as={Link}
            key={index}
            href={"/" + subject + "/" + difficulty}
          >
            <CardBody>
              <Image src="/images/book.png" width="192px"></Image>
              <Text>{difficulty}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Stack>
  );
};

export default SubjectScreen;
