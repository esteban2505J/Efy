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
} from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { MailIcon } from "./icon/MailIcon.jsx";
import { LockIcon } from "./icon/LockIcon.jsx";
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
  const [profilePicture, setProfilePicture] = useState(null);

  // functions handle forms
  const handleProfilePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
  };
  const verfyMatchPassword = () => {
    Pasword === Pasword2 ? true : false;
  };
  /**
   * method to control the sending of the registration request
   */
  const onSubmit = handleSubmit(async (values) => {
    // Crea una instancia de FormData
    const formData = new FormData();

    if (verfyMatchPassword) {
      sigUp(values);

      // Agrega los campos del formulario al formData
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("profilePicture", profilePicture); // Asegúrate de usar la clave correcta aquí

      // Envía los datos al backend utilizando Axios
      try {
        const response = await sigUp(formData);
        // Maneja la respuesta del backend aquí, si es necesario
        console.log(response);
      } catch (error) {
        // Maneja los errores, si los hay
        console.error("Error al enviar el formulario:", error);
      }
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
                <label>Profile Picture</label>
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
