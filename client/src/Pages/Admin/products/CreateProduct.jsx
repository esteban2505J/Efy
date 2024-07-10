import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import useProduct from "../../../context/ProductContext";
import { createCategory } from "../../../api/products";

export default function CreateProduct() {
  // useForm for creating products
  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    formState: { errors: productErrors },
  } = useForm();

  // useForm for creating categories
  const {
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: categoryErrors },
  } = useForm();

  const { createProductContext } = useProduct();
  const [fileName, setFileName] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);

  // Function for the submit request
  const onSubmitProduct = handleSubmitProduct(async (values) => {
    const formData = new FormData();

    // Ensure attributes is an object and convert it to JSON
    const attributes = { marca: "oakley" };

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("typeProduct", values.typeProduct);
    const categories = values.categories.split(",").map((categorie) => {
      return categorie.trim();
    });
    formData.append("categories", JSON.stringify(categories));
    formData.append("price", values.price);
    formData.append("attributes", JSON.stringify(attributes));
    const imageFile = values.image[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    createProductContext(formData);
    setIsFileSelected(true);
  });

  // Function to handle file name display
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsFileSelected(true); // Set file selected state
    } else {
      setFileName("");
    }
  };

  // Function to create a new category
  const onSubmitCategory = handleSubmitCategory(async (values) => {
    const formDataCategory = new FormData();
    const attributes = values.atributos.split(",").map((atributo) => {
      return atributo.trim();
    });

    formDataCategory.append("name", values.name);
    formDataCategory.append("atributtes", JSON.stringify(attributes));
    console.log(attributes);
    console.log(values.name);

    try {
      const category = await createCategory(formDataCategory);
      if (category) console.log(category);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="min-h-screen bg-gray-300 grid justify-center grid-cols-1 sm:grid-cols-3 items-center sm:items-start sm:gap-4">
      <div className="bg-white sm:my-20 p-8 rounded-lg shadow-lg m-4 sm:ml-10 col-span-2">
        <h1 className="font-semibold text-xl text-center mb-8">
          Crear Productos
        </h1>
        <form onSubmit={onSubmitProduct} className="grid grid-cols-2 gap-4">
          <Input
            {...registerProduct("title", { required: true })}
            type="text"
            label="Titulo"
            variant="underlined"
            color="warning"
          />
          <Input
            {...registerProduct("description", { required: true })}
            type="text"
            label="Descripción"
            variant="underlined"
            color="warning"
          />
          <Input
            {...registerProduct("categories", { required: true })}
            type="text"
            label="Categorias"
            variant="underlined"
            color="warning"
          />
          <Input
            {...registerProduct("typeProduct", { required: true })}
            type="text"
            label="Tipo de producto"
            variant="underlined"
            color="warning"
          />
          <Input
            {...registerProduct("price", { required: true })}
            type="text"
            label="Precio"
            variant="underlined"
            color="warning"
          />

          <div className="col-span-2">
            <div className="flex items-center justify-center w-full m-3">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <LuImagePlus className="text-2xl" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Click para subir la imagen del producto.
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG
                  </p>
                  {isFileSelected && fileName && (
                    <div className="text-center mt-2">
                      <div className="flex justify-center items-center max-w-max">
                        <FaCircleCheck className="mr-2 text-green-500" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 overflow-hidden max-w-[200px] sm:max-w-full truncate">
                          {fileName}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  {...registerProduct("image", { required: true })}
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

      {/* Crear las categorías */}
      <div className="m-4 sm:my-20 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="m-6 text-center">Crear categorias</h2>
        <form onSubmit={onSubmitCategory} className="grid grid-cols-2 gap-4">
          <Input
            {...registerCategory("name", { required: true })}
            type="text"
            label="Name"
            variant="underlined"
          />
          <Input
            {...registerCategory("atributos", { required: true })}
            type="text"
            label="Atributos"
            variant="underlined"
          />
          <div className="col-span-2 flex justify-center mt-4">
            <Button type="submit" className="bg-black text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
