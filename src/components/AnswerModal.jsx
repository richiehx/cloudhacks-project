import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function AnswerModal({ qnNumber, videoLink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg={"green.500"}>
        Check Answer
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <iframe
              src={videoLink}
              width="520"
              height="310"
              allow="autoplay"
              title={qnNumber}
            ></iframe>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} bg="red.400">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AnswerModal;
