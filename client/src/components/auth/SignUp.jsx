// Imports
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
  Checkbox,
} from "@nextui-org/react";

import { MailIcon } from "./icon/MailIcon.jsx";
import { LockIcon } from "./icon/LockIcon.jsx";
import { useForm } from "react-hook-form";
import { userAuth } from "../../context/AuthContext.jsx";
import { useState } from "react";
import Loading from "../tienda/Loader.jsx";

export default function SignUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    sigUp,
    errors: registerErrors,
    loading,
    isAuthenticated,
  } = userAuth();

  const [Pasword, setPasword] = useState("");
  const [Pasword2, setPasword2] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // functions handle forms
  const handleProfilePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
  };
  const verfyMatchPassword = Pasword === Pasword2;
  /**
   * method to control the sending of the registration request
   */
  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();

    if (verfyMatchPassword) {
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("profilePicture", profilePicture);

      try {
        await sigUp(formData);
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    } else {
      alert("Passwords do not match");
    }
  });

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className={`${loading ? "invisible" : ""}, w-full sm:w-auto ${
          isAuthenticated ? "invisible" : ""
        } text-xl font-semibold sm:text-medium`}
      >
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
              <ModalHeader className="flex flex-col gap-1">
                Sign Up
                <div>
                  {registerErrors &&
                    Object.values(registerErrors).map((error, index) => (
                      <div className="text-red-600" key={index}>
                        {error}
                      </div>
                    ))}
                </div>
              </ModalHeader>
              <ModalBody>
                {errors.fullName && (
                  <p className=" text-red-500">Full name is required</p>
                )}
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
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                {Pasword2 === null && (
                  <p className=" text-red-500">E-mail is required</p>
                )}
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
                <label>Profile Picture</label>
                {errors.profilePicture && (
                  <p className=" text-red-500"> Profile picture is required</p>
                )}
                <input
                  {...register("profilePicture", { required: true })}
                  type="file"
                  onChange={handleProfilePictureChange}
                  accept="image/*"
                  name="profilePicture"
                  required
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
