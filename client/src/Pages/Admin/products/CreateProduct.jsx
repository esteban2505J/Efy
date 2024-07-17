import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import useProduct from "../../../context/ProductContext";
import {
  createCategory,
  createSubCategory,
  createTag,
} from "../../../api/products";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa los estilos de Quill

export default function CreateProduct() {
  // useForm for creating products
  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    control: controlProduct,
    formState: { errors: productErrors },
  } = useForm();

  // useForm for creating categories
  const {
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: categoryErrors },
  } = useForm();

  // useForm for creating subcategories
  const {
    register: registerSubCategory,
    handleSubmit: handleSubmitSubCategory,
    formState: { errors: subCategoryErrors },
  } = useForm();

  // useForm for creating subcategories
  const {
    register: registerTags,
    handleSubmit: handleSubmitTags,
    formState: { errors: tagsErrors },
  } = useForm();

  const { createProductContext, subCategories } = useProduct();
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

    formDataCategory.append("name", values.name.toUpperCase());
    console.log(values.name);
    try {
      const category = await createCategory(formDataCategory);
      if (category) console.log(category);
    } catch (error) {
      console.log(error);
    }
  });
  // Function to create a new subcategory
  const onSubmitSubCategory = handleSubmitSubCategory(async (values) => {
    const formDataSubCategory = new FormData();

    console.log(values.name);
    formDataSubCategory.append("name", values.name.toUpperCase());

    try {
      const subCategory = await createSubCategory(formDataSubCategory);
      if (subCategory) console.log(subCategory);
    } catch (error) {
      console.log(error);
    }
  });
  // Function to create a new tag
  const onSubmitTag = handleSubmitTags(async (values) => {
    const formDataTag = new FormData();

    formDataTag.append("name", values.name.toUpperCase());

    console.log(values.name);

    try {
      const tag = await createTag(formDataTag);
      if (tag) console.log(tag);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="min-h-screen bg-gray-300 grid justify-center grid-cols-1 sm:grid-cols-3 items-center sm:items-start sm:gap-4">
      <div className="bg-white sm:my-20 p-8 rounded-lg shadow-lg m-4 sm:ml-10 col-span-2">
        <h1 className="font-semibold text-xl text-center mb-8 bg-yellow-500 ">
          Crear Productos
        </h1>
        <form
          onSubmit={onSubmitProduct}
          className="sm:grid  flex flex-col sm:grid-cols-2 gap-8 gap-y-14"
        >
          {/* Titulo */}
          <Input
            {...registerProduct("title", { required: true })}
            type="text"
            label="Titulo"
            variant="underlined"
            color="warning"
          />
          {/* Descriptción */}
          <Controller
            name="description"
            control={controlProduct}
            z
            defaultValue=""
            render={({ field }) => (
              <ReactQuill {...field} placeholder="Descripción..." />
            )}
          />
          {/* categorías */}
          <Input
            {...registerProduct("categories", { required: true })}
            type="text"
            label="Categorias"
            variant="underlined"
            color="warning"
          />
          {/* SubCategories */}
          <Select
            label="Subcategorías"
            selectionMode="multiple"
            className="max-w-xs"
            variant="underlined"
            color="warning"
          >
            {subCategories.map((subCategories) => (
              <SelectItem key={subCategories.key}>
                {subCategories.name}
              </SelectItem>
            ))}
          </Select>
          {/* tags */}
          <Input
            {...registerProduct("tags", { required: true })}
            type="text"
            label="Etiquetas"
            variant="underlined"
            color="warning"
          />
          {/* precio */}
          <Input
            {...registerProduct("price", { required: true })}
            type="text"
            label="Precio"
            variant="underlined"
            color="warning"
          />
          {/* I */}
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

      <aside className="grid gap-y-6 sm:mt-20 sm:mr-10 m-4">
        {/* Crear las categorías */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-black text-white">
            Crear una categoría
          </h2>
          <form onSubmit={onSubmitCategory} className="grid grid-cols-2 gap-4">
            <Input
              {...registerCategory("name", { required: true })}
              type="text"
              label="Name"
              variant="underlined"
              className="col-span-2"
            />

            <div className="col-span-2 flex justify-center mt-4">
              <Button type="submit" className="bg-black text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
        {/* Crear subCategorias */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-slate-600 text-white">
            Crear una subcategoría
          </h2>
          <form
            onSubmit={onSubmitSubCategory}
            className="grid grid-cols-2 gap-4"
          >
            <Input
              {...registerSubCategory("name", { required: true })}
              type="text"
              label="Name"
              variant="underlined"
              className="col-span-2"
            />

            <div className="col-span-2 flex justify-center mt-4">
              <Button type="submit" className="bg-black text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
        {/* Crear tags */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-orange-200 text-white">
            Crear un tag
          </h2>
          <form onSubmit={onSubmitTag} className="grid grid-cols-2 gap-4">
            <Input
              {...registerTags("name", { required: true })}
              type="text"
              label="Name"
              variant="underlined"
              className="col-span-2"
            />

            <div className="col-span-2 flex justify-center mt-4">
              <Button type="submit" className="bg-black text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </aside>
    </div>
  );
}
