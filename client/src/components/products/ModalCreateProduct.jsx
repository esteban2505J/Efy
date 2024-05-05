import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import useProduct from "../../context/ProductContext";
import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function ModalCreateProduct() {
  const [productImage, setProductImage] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { createProductContext } = useProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductImageChange = (e) => {
    let selectedFile = e.target.files[0];
    setProductImage(selectedFile);
    console.log(productImage);
  };
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("house", values.house);
    formData.append("description", values.description);
    formData.append("composition", {
      notasAltas: values.notasAltas,
      notasMedias: values.notasMedias,
      notasBajas: values.notasBajas,
    });
    formData.append("type", values.type);
    formData.append("referenceImage", productImage);
    console.log(JSON.stringify(formData));

    // createProductContext(formData);
    onclose();
  });
  return (
    <>
      <Button
        className="bg-white text-black font-bold"
        endContent={<AiOutlinePlus />}
        size="sm"
        onPress={onOpen}
      >
        Add New
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Create Product
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("title", { required: true })}
                  className="font-bold"
                  autoFocus
                  label="Title"
                  placeholder="Enter the name of product"
                  variant="bordered"
                />
                <Input
                  {...register("house", { required: true })}
                  className="font-bold"
                  label="House"
                  placeholder="Enter the house of product"
                  type="text"
                  variant="bordered"
                />
                <Input
                  {...register("description", { required: true })}
                  className="font-bold"
                  label="Description"
                  placeholder="Enter the descripcion of product"
                  type="text"
                  variant="bordered"
                />
                <div>
                  <h2 className="my-2">Composition</h2>
                  <div className="grid grid-cols-3 gap-3 mb-2">
                    <Input
                      {...register("notasAltas", { require: true })}
                      label="Notas Altas"
                      className="font-bold"
                      placeholder="Enter the notas altas of product "
                    />
                    <Input
                      {...register("notasMedias", { required: true })}
                      label="Notas Medias"
                      className="font-bold"
                      placeholder="Enter the notas medias of product "
                    ></Input>
                    <Input
                      {...register("notasBajas", { required: true })}
                      label="Notas bajas"
                      className="font-bold"
                      placeholder="Enter the notas bajas of product "
                    ></Input>
                  </div>
                </div>
                <Input
                  {...register("type", { required: true })}
                  className="font-bold"
                  label="Type of product"
                  placeholder="Enter the type of product"
                  type="text"
                  variant="bordered"
                />

                <Input
                  {...register("categories", { required: true })}
                  className="font-bold"
                  label="Categorie(s) of product"
                  placeholder="Ingrese las categorías"
                  type="text"
                  variant="bordered"
                />
                <label htmlFor="imageProduct" className="font-semibold">
                  Imagen del producto
                </label>
                <Input
                  type="file"
                  id="imageProduct"
                  variant="bordered"
                  onChange={handleProductImageChange}
                  name="productImage"
                />
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
