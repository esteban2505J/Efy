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
  const { isAuthenticated } = userAuth();

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


  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <CardModalLogin />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}