import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CardModalLogin from "./CardModalLogin";
import { userAuth } from "../../context/AuthContext";

export default function ModalLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, user } = userAuth();

  useEffect(() => {
    console.log("antes del if");
    if (isAuthenticated) {
      // Wait for the modal to be mounted before opening it
      setTimeout(() => {
        console.log("está llegando antes");
        onOpen(); // Call onOpen as a function
        console.log("está llegando");
      }, 0);
    } else {
      onClose(); // Close the modal when the user is not authenticated
    }
  }, [isAuthenticated, onOpen, onClose]);

  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <CardModalLogin />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
