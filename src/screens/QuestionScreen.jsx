import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Image,
  Stack,
  Button,
  Spacer,
  Select,
  Link,
} from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
import AnswerModal from "../components/AnswerModal";
import questions from "../data/questionBank";

const maxQns = questions.length;

const QuestionScreen = () => {
  // const { subject, difficulty } = useParams();

  const [questionCounter, setQuestionCounter] = useState(0);

  useEffect(() => {}, [questionCounter]);

  return (
    <Flex justify={"center"} py={24} gap={24}>
      <Stack gap={16} width="100%" p={16}>
        <Stack direction={"row"}>
          <Button
            onClick={() => setQuestionCounter((prev) => prev - 1)}
            isDisabled={questionCounter === 0 ? true : false}
            bg={"red.400"}
          >
            Back
          </Button>
          <Spacer></Spacer>
          <Text>
            Question {questionCounter + 1}/{maxQns}
          </Text>
          <Spacer></Spacer>
          {questionCounter === maxQns - 1 ? (
            <Button as={Link} href="/" bg={"green.400"}>
              Home
            </Button>
          ) : (
            <Button
              onClick={() => setQuestionCounter((prev) => prev + 1)}
              isDisabled={questionCounter === maxQns - 1 ? true : false}
              bg={"blue.400"}
            >
              Next
            </Button>
          )}
        </Stack>

        <Stack gap={16} direction={"column"}>
          {questions[questionCounter].image != null &&
            questions[questionCounter] !== "" && (
              <Image src={questions[questionCounter].image}></Image>
            )}

          <Text>{questions[questionCounter].questionText}</Text>
          <Select placeholder="Select option">
            {questions[questionCounter].options.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Select>

          <AnswerModal
            qnNumber={questionCounter}
            videoLink={questions[questionCounter].videoLink}
          ></AnswerModal>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default QuestionScreen;
