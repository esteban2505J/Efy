import React, { useState } from "react";
import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import useProduct from "../../../context/ProductContext";
import { toast, ToastContainer } from "react-toastify";
import {
  createCategory,
  createSubCategory,
  createTag,
} from "../../../api/products";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa los estilos de Quill

export default function CreateProduct() {
  // Use form product
  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    control: controlProduct,
    formState: { errors: productErrors },
  } = useForm();

  // Use form categories
  const {
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: categoryErrors },
  } = useForm();

  // use form sub categories
  const {
    register: registerSubCategory,
    handleSubmit: handleSubmitSubCategory,
    formState: { errors: subCategoryErrors },
  } = useForm();

  // Use form tags
  const {
    register: registerTags,
    handleSubmit: handleSubmitTags,
    formState: { errors: tagsErrors },
  } = useForm();

  const { createProductContext, subCategories, categories, tags, loading } =
    useProduct();
  const [fileName, setFileName] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingCategorie, setLoadingCategorie] = useState(false);
  const [loadingSubCategorie, setLoadingSubCategorie] = useState(false);
  const [loadingTag, setLoadingTag] = useState(false);

  // Crear los productos
  const onSubmitProduct = handleSubmitProduct(async (formValues) => {
    const formData = new FormData();

    try {
      if (formValues) {
        console.log(formValues);

        formData.append("title", formValues.title);
        formData.append("description", formValues.description);
        formData.append("typeProduct", formValues.typeProduct);
        formData.append(
          "categories",
          JSON.stringify(Array.from(selectedCategories))
        );
        formData.append(
          "subCategories",
          JSON.stringify(Array.from(selectedSubCategories))
        );
        formData.append("price", formValues.price);
        if (selectedImage) {
          formData.append("image", selectedImage);
        }

        formData.append("tags", JSON.stringify(Array.from(selectedTags)));

        const createSucces = await createProductContext(formData);
        if (createSucces === true) {
          toast(`Producto creado`, {
            position: "bottom-right",
            autoClose: 3000,
            type: "success",
          });
        }
        if (createSucces === false)
          toast.error(`Producto no ha sido creado`, {
            position: "bottom-right",
            autoClose: 3000,
          });

        setIsFileSelected(true);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // Manejador de las imágenes
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedImage(file);
      setIsFileSelected(true);
    } else {
      setFileName("");
      setSelectedImage(null);
    }
  };

  // Crear las categorías
  const onSubmitCategory = handleSubmitCategory(async (values) => {
    const formDataCategory = new FormData();
    formDataCategory.append("name", values.name.toUpperCase());
    try {
      setLoadingCategorie(true);
      const category = await createCategory(formDataCategory);
      setLoadingCategorie(false);
      if (category) console.log(category);
      if (category.status === 200)
        toast(`Categoría creada`, {
          position: "bottom-right",
          autoClose: 3000,
          type: "success",
        });
    } catch (error) {
      console.log(error);
      setLoadingCategorie(false);
      toast.error("Categoría no creada");
    }
  });

  // Crear las subcategorías
  const onSubmitSubCategory = handleSubmitSubCategory(async (values) => {
    const formDataSubCategory = new FormData();
    formDataSubCategory.append("name", values.name.toUpperCase());
    try {
      setLoadingSubCategorie(true);
      const subCategory = await createSubCategory(formDataSubCategory);
      setLoadingSubCategorie(false);
      if (subCategory) console.log(subCategory);
      if (subCategory.status === 200)
        toast(`Subcategoría creada`, {
          position: "bottom-right",
          autoClose: 3000,
          type: "success",
        });
    } catch (error) {
      console.log(error);
      setLoadingSubCategorie(false);
      toast.error("SubCategoría no creada");
    }
  });

  // Crear tags
  const onSubmitTag = handleSubmitTags(async (values) => {
    const formDataTag = new FormData();
    formDataTag.append("name", values.name.toUpperCase());
    try {
      setLoadingTag(true);
      const tag = await createTag(formDataTag);
      setLoadingTag(false);
      console.log(tag);

      if (tag.status === 200)
        toast(`Etiqueda creada`, {
          position: "bottom-right",
          autoClose: 3000,
          type: "success",
        });
    } catch (error) {
      console.log(error);
      setLoadingTag(false);
      toast.error("Etiqueta no creada");
    }
  });

  return (
    <div className="min-h-screen bg-gray-300 grid justify-center grid-cols-1 sm:grid-cols-3 items-center sm:items-start sm:gap-4">
      <div className="bg-white sm:my-20 p-8 rounded-lg shadow-lg m-4 sm:ml-10 col-span-2">
        <h1 className="font-semibold text-xl text-center mb-8 bg-yellow-500">
          Crear Productos
        </h1>
        <form
          onSubmit={onSubmitProduct}
          className="sm:grid flex flex-col sm:grid-cols-2 gap-8 gap-y-14"
        >
          <div>
            <Input
              {...registerProduct("title", { required: true })}
              type="text"
              label="Titulo"
              variant="underlined"
              color="warning"
            />
            {productErrors.title && (
              <span className="text-red-400 text-xs block mt-1">
                El titulo es requerido
              </span>
            )}
          </div>

          <div>
            <Controller
              name="description"
              control={controlProduct}
              defaultValue=""
              render={({ field }) => (
                <ReactQuill {...field} placeholder="Descripción..." />
              )}
            />
            {productErrors.description && (
              <span className="text-red-400 text-xs block mt-1">
                La descripción es requerida
              </span>
            )}
          </div>
          {/* Categories */}
          <Controller
            name="categories"
            control={controlProduct}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  label="Categorías"
                  selectedKeys={selectedCategories}
                  selectionMode="multiple"
                  className="max-w-xs"
                  onSelectionChange={setSelectedCategories}
                  variant="underlined"
                  color="warning"
                >
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
          />
          <Controller
            name="subCategories"
            control={controlProduct}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  label="Subcategorías"
                  selectedKeys={selectedSubCategories}
                  selectionMode="multiple"
                  className="max-w-xs"
                  onSelectionChange={setSelectedSubCategories}
                  variant="underlined"
                  color="warning"
                >
                  {subCategories.map((subCategory) => (
                    <SelectItem key={subCategory.name} value={subCategory.name}>
                      {subCategory.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
          />
          {/* Tags */}
          <Controller
            name="tags"
            control={controlProduct}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  label="Tags"
                  selectedKeys={selectedTags}
                  selectionMode="multiple"
                  className="max-w-xs"
                  onSelectionChange={setSelectedTags}
                  variant="underlined"
                  color="warning"
                >
                  {tags.map((tag) => (
                    <SelectItem key={tag.name} value={tag.name}>
                      {tag.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
          />
          <div>
            <Input
              {...registerProduct("price", { required: true })}
              type="text"
              label="Precio"
              variant="underlined"
              color="warning"
            />
            {productErrors.price && (
              <span className="text-red-400 text-xs block mt-1">
                El precio es requerido
              </span>
            )}
          </div>
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
                        <div className="max-w-[200px]">
                          <p className="text-sm text-gray-500 dark:text-gray-400 overflow-hidden  sm:max-w-full truncate">
                            {fileName}
                          </p>
                        </div>
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
          <div className="col-span-2 flex justify-center mt-4">
            <Button
              type="submit"
              disabled={loading}
              className={`${loading ? "disabled" : ""} bg-black text-white`}
            >
              {loading ? <Spinner /> : "Create"}
            </Button>
            <ToastContainer />
          </div>
        </form>
      </div>

      <aside className="grid gap-y-6 sm:mt-20 sm:mr-10 m-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-black text-white">
            Crear una categoría
          </h2>
          <form
            onSubmit={onSubmitCategory}
            className="grid grid-cols-1 gap-y-4"
          >
            <div>
              <Input
                {...registerCategory("name", { required: true })}
                type="text"
                label="Name"
                variant="underlined"
              />
              {categoryErrors.name && (
                <span className="text-red-400 text-xs block mt-1">
                  El nombre de la categoría es requerido
                </span>
              )}
            </div>
            <div className="col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-black text-white"
                disabled={loadingCategorie}
              >
                {loadingCategorie ? <Spinner /> : "Create"}
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-slate-600 text-white">
            Crear una subcategoría
          </h2>
          <form
            onSubmit={onSubmitSubCategory}
            className="grid grid-cols-1 gap-y-4"
          >
            <div>
              <Input
                {...registerSubCategory("name", { required: true })}
                type="text"
                label="Name"
                variant="underlined"
              />
              {subCategoryErrors.name && (
                <span className="text-red-400 text-xs block mt-1">
                  El nombre de la subcategoría es requerido
                </span>
              )}
            </div>
            <div className="col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-black text-white"
                disabled={loadingSubCategorie}
              >
                {loadingSubCategorie ? <Spinner /> : "Create"}
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-4 text-center bg-orange-200 text-white">
            Crear un tag
          </h2>
          <form onSubmit={onSubmitTag} className="grid grid-cols-1 gap-y-4">
            <div>
              <Input
                {...registerTags("name", { required: true })}
                type="text"
                label="Name"
                variant="underlined"
              />
              {tagsErrors.name && (
                <span className="text-red-400 text-xs block mt-1">
                  El nombre de la etiqueta es requerido
                </span>
              )}
            </div>
            <div className="col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-black text-white "
                disabled={loadingTag}
              >
                {loadingTag ? <Spinner /> : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </aside>
    </div>
  );
}
