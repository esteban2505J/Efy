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

<<<<<<< HEAD
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
=======
 useEffect(() => {
  if (isAuthenticated) {
    // Espera a que el modal se haya montado antes de abrirlo
    setTimeout(() => {
      onOpen()
    }, 0);
  } else {
    onClose(); // Cierra el modal cuando el usuario no está autenticado
  }
}, [isAuthenticated, onOpen, onClose]);

>>>>>>> 235e36811224a5d07c93d38e299ceb0c27930ed6

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