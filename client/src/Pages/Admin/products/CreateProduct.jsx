import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import useProduct from "../../../context/ProductContext";
import { useState } from "react";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createProductContext } = useProduct();
  const [fileName, setFileName] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);

  // function for the submit request
  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();

    // Asegurarse de que attributes sea un objeto y convertirlo a JSON
    const attributes = { marca: "oakley" };

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("typeProduct", values.typeProduct);
    const categories = values.categories.split(",").map((categorie) => {
      return categorie.trim();
    });
    formData.append("categories", categories);
    formData.append("price", values.price);
    formData.append("attributes", JSON.stringify(attributes));
    const imageFile = values.image[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    createProductContext(formData);
    setIsFileSelected(true);
  });

  //funtion for the handle file name
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setFileName(file.name);
      setIsFileSelected(true); // Restablecer el estado de selección del archivo
    } else {
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 ">
        <h1 className="font-semibold text-xl text-center mb-8">
          Crear Productos
        </h1>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <Input
            {...register("title", { required: true })}
            type="text"
            label="Titulo"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("description", { required: true })}
            type="text"
            label="Descripción"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("categories", { required: true })}
            type="text"
            label="Categorias"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("typeProduct", { required: true })}
            type="text"
            label="Tipo de producto"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("price", { required: true })}
            type="text"
            label="Precio"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("attributes", { required: true })}
            type="text"
            label="Atributos"
            variant="underlined"
            color="warning"
          />
          <div className="col-span-2">
            <div className="flex items-center justify-center w-full m-3">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                  <LuImagePlus className="text-2xl" />

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Click para subir la imagen del producto.
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG
                  </p>

                  {isFileSelected && (
                    <>
                      <div className="text-center mt-2">
                        <div className="flex justify-center items-center">
                          <FaCircleCheck className="mr-2 text-green-500" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {fileName}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  {...register("image", { required: true })}
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <Button type="submit" className="bg-black text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
