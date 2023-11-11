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
import { MailIcon } from "./icon/MailIcon.jsx";
import { LockIcon } from "./icon/LockIcon.jsx";
import { useForm } from "react-hook-form";
import { userAuth } from "../../context/AuthContext";

import Loading from "../tienda/Loader.jsx";

export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { sigIn, isAuthenticated, errors: loginErrors, loading } = userAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    sigIn(values);
    // onOpenChange(false);
  });

  return (
    <>
      {/* {loading && <Loading loading={loading} />} */}
      <Button
        onPress={onOpen}
        className={`bg-orange-200 ${loading ? "invisible" : ""}`}
        variant="shadow"
      >
        Login
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
              <ModalHeader className="flex flex-col gap-1">
                Log in
                <div>
                  {loginErrors &&
                    Object.values(loginErrors).map((error, index) => (
                      <div className="text-red-600" key={index}>
                        {error}
                      </div>
                    ))}
                </div>
              </ModalHeader>
              <ModalBody>
                {errors.email && (
                  <p className=" text-red-500">E-mail is required</p>
                )}
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
                {errors.password && (
                  <p className=" text-red-500">Password is required</p>
                )}
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
                {loading ? (
                  <Loading loading={loading} />
                ) : (
                  <Button color="primary" onPress={onSubmit}>
                    Sign in
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
