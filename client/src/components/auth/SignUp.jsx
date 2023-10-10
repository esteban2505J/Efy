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
import { TbPhotoUp } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { userAuth } from "../../context/AuthContext.jsx";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { sigUp, errors: registerError } = userAuth();
  const [Pasword, setPasword] = useState("");
  const [Pasword2, setPasword2] = useState("");

  const verfyMatchPassword = () => {
    Pasword === Pasword2 ? true : false;
  };
  /**
   * method to control the sending of the registration request
   */
  const onSubmit = handleSubmit(async (values) => {
    if (verfyMatchPassword) {
      sigUp(values);
      <Modal isOpen={isOpen} onChange={onOpenChange}>
        <ModalContent>
          <ModalHeader> Error the passwords no match</ModalHeader>
        </ModalContent>
      </Modal>;
    } else {
      alert(`${errors}`);
    }
  });

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <Input
                  {...register("fullName", { required: true })}
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Full name"
                  placeholder="Enter your full Name"
                  variant="bordered"
                />
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
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => {
                    setPasword2(e.target.value);
                  }}
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Enter your password again"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <Input
                  endContent={<TbPhotoUp className="text-2xl" />}
                  label="Enter a profile photo"
                  type="file"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
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
