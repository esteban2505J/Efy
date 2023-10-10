import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { LockIcon } from "./LockIcon.jsx";
import { useForm } from "react-hook-form";
import { userAuth } from "../../context/AuthContext";
import ModalLogin from "./ModalLogin.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx"; // Asegúrate de importar el contexto adecuado

export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { sigIn, isAuthenticated } = userAuth();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      // onOpen(); // Open the modal
    } else {
      // onOpenChange(false); // Close the modal
    }
  }, [isAuthenticated, onOpen, onOpenChange]);

  // Obtener el contexto de autenticación
  const authContext = useContext(AuthContext);

  // Desestructurar los valores del contexto
  const { user } = authContext;

  const onSubmit = handleSubmit(async (values) => {
    sigIn(values);
    onOpenChange(false);
    console.log(
      "Renderizando Login component. isAuthenticated:",
      isAuthenticated
    );
  });

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-200" variant="shadow">
        Login
      </Button>
      {isAuthenticated && <ModalLogin />}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <Modal></Modal>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  {...register("email", { required: true })}
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  {...register("password", { required: true })}
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex gap-4 py-2 px-1 justify-between">
                  <Checkbox defaultSelected size="sm">
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="/forgotpassword" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#DA344D]"
                  variant="flat"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onSubmit}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}